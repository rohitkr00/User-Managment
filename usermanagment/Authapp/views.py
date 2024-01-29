from django.shortcuts import render
from rest_framework import status
from rest_framework import viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import AuthenticationFailed
from .utils import generate_jwt, decode_token
import jwt

from .models import UserDetails, UserLogin
from .serializers import UserSerializer, UserLoginSerializer



@api_view(['POST', 'GET'])
def register_view(request):
    data=request.data
    email1=data.get('email')
    password1=data.get('password')
    data2={'emai':email1, 'password': password1}
    print(data)
    if request.method=='POST':
        serializer=UserSerializer(data=data)
        # serializer_login=UserLoginSerializer(data=data2)
        
        # print(data)
        if serializer.is_valid():
            # print("sdasdasd")
            serializer.save()
            data11=UserLogin.objects.create(
            emai=email1,
            password=password1
        )
            data11.save()
            # print(serializer_login)
            # serializer_login.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({
            "message":"Data is not valid"
        }, status=status.HTTP_400_BAD_REQUEST)
    




@api_view(['POST'])
def login_view(request):
    # how to store response in local storage in react
    data = request.data
    # user=UserLogin()
    login_data=UserLogin.objects.filter(emai=data.get("email2"))
    
    if login_data:
        token = generate_jwt(data)
        queryset=UserDetails.objects.get(email=data.get("email2"))
        user_data=UserSerializer(queryset)
        response = {
        "meggage": "Logined success",
        "jwt": token,
        "u_data": user_data.data
        }
        # response.set_cookie(key="jwt", value=token)
        return Response(response, status=status.HTTP_200_OK)
    else:
        response={
        "meggage": "Data is not valid",
        }
        return Response(response, status=status.HTTP_400_BAD_REQUEST)
    



@api_view(['POST'])
def check_permission(request):
    token = request.data
    token2=token.get('headers')
    token3=token2.get('Authorization')
    decoded_token = decode_token(token3)
    email=decoded_token.get('email2')
    queryset=UserDetails.objects.get(email=email)
    user_data=UserSerializer(queryset)
    
    print(user_data.data)
    if user_data.data:

    # return Response("okkkkk", status=status.HTTP_200_OK)
        return Response(user_data.data, status=status.HTTP_200_OK)
    else:
        response={
        "meggage": "Data is not valid",
        }
        return Response(response, status=status.HTTP_400_BAD_REQUEST)



@api_view(['PATCH'])
def update_view(request):
    if request.method == 'PATCH':
        user_id = request.headers.get('X-User-ID')
        if user_id is None:
            return Response({"detail": "User ID not provided in headers."}, status=status.HTTP_400_BAD_REQUEST)

        # Assuming the user is already authenticated, you can access the user using user_id
        user = UserDetails.objects.get(pk=user_id)
        # Assuming the data to update is sent in the request data
        serializer = UserSerializer(user, data=request.data, partial=True)
        

        if serializer.is_valid():
           
            # Update the specific fields
            # user.name = request.data.get('name', user.name)
            # user.designation = request.data.get('designation', user.designation)
            # Other fields as needed
            serializer.save()
            # Save the user object
            # user.save()

            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    return Response(status=status.HTTP_400_BAD_REQUEST)
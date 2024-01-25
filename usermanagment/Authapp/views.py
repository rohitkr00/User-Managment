from django.shortcuts import render
from rest_framework import status
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import AuthenticationFailed
from .utils import generate_jwt, decode_token
import jwt

from .models import UserDetails, UserLogin
from .serializers import UserSerializer, UserLoginSerializer
# Create your views here.
# class UserViewSet(viewsets.ModelViewSet):
#     queryset= UserDetails.objects.all()
#     serializer_class=UserSerializer
#     http_method_names=['post', 'put', 'patch', 'delete', 'get']

    
# class UserLoginViewSet(viewsets.ModelViewSet):
#     queryset= UserLogin.objects.all()
#     serializer_class=UserLoginSerializer
#     http_method_names=['post', 'put', 'patch', 'delete', 'get']
    


@api_view(['POST', 'GET'])
def register_view(request):
    data=request.data
    email1=data.get('email')
    password1=data.get('password')
    data2={'emai':email1, 'password': password1}
    print(data2)
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
    print("post:",data)
    print(login_data)
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
    


@api_view(['GET'])
def UserView(request):
    token=request.COOKIES.get('jwt')

    if not token:
        raise AuthenticationFailed('unauthenticated')
    
    try:
        payload=jwt.decode(token,'secret', algorithm=['HS256'])
    except jwt.ExpireSignatureError:
        raise AuthenticationFailed('Unauthenticated')
    
    user=UserDetails.objects.get(payload['id'])
    serializer = UserSerializer(user)



@api_view(['POST'])
def check_permission(request):
    # print("step1")
    token = request.data
    # token = request.headers.get('Authorization')
    # print(token.get('headers'),"step2")
    token2=token.get('headers')
    
    token3=token2.get('Authorization')
    print(token3)
    # token = token.replace("Bearer ", "")
    decoded_token = decode_token(token3)
    print(decoded_token)
    email=decoded_token.get('email2')
    queryset=UserDetails.objects.get(email=email)
    user_data=UserSerializer(queryset)
    # serialized_data={
    #     "user_data":user_data,
    # }
    print(user_data.data)
    if user_data.data:

    # return Response("okkkkk", status=status.HTTP_200_OK)
        return Response(user_data.data, status=status.HTTP_200_OK)
    else:
        response={
        "meggage": "Data is not valid",
        }
        return Response(response, status=status.HTTP_400_BAD_REQUEST)

from django.shortcuts import render
from rest_framework import status
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

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
def login_view(request):
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
            print("sdasdasd")
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
    

    
    
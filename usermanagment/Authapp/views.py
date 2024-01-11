from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response

from .models import UserDetails, UserLogin
from .serializers import UserSerializer, UserLoginSerializer
# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset= UserDetails.objects.all()
    serializer_class=UserSerializer
    

    
class UserLoginViewSet(viewsets.ModelViewSet):
    queryset= UserLogin.objects.all()
    serializer_class=UserLoginSerializer
    
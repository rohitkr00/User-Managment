from rest_framework import serializers
from .models import UserDetails, UserLogin

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserDetails
        fields="__all__"

class UserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserLogin
        fields="__all__"
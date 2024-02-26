from rest_framework import serializers
from .models import UserDetails, UserLogin, UserTask

class UserSerializer(serializers.ModelSerializer):

    # name=serializers.CharField(max_length=50)
    # email=serializers.EmailField()
    # password=serializers.CharField(max_length=200)
    # gender=serializers.CharField(max_length=50)
    # designation=serializers.CharField(max_length=100)
    # department=serializers.CharField(max_length=200)
    # ctc=serializers.IntegerField()
    # adress=serializers.CharField(max_length=300)
    # education=serializers.CharField(max_length=200)
    # photo=serializers.BinaryField()
    # phone=serializers.CharField(max_length=10)



    class Meta:
        model=UserDetails
        fields="__all__"

class UserLoginSerializer(serializers.ModelSerializer):

    email=serializers.EmailField()
    password=serializers.CharField(max_length=200)
    
    class Meta:
        model=UserLogin
        fields="__all__"



class UserTaskSerializer(serializers.ModelSerializer):

    # useremail=serializers.EmailField(max_length=254)
    # date=serializers.CharField(max_length=254)
    # task=serializers.CharField()
    
    class Meta:
        model=UserTask
        fields="__all__"
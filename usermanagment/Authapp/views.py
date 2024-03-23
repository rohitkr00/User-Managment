from django.shortcuts import render
from rest_framework import status
from rest_framework import viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth.hashers import check_password
from .utils import generate_jwt, decode_token
import jwt
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from random import randint
from django.core.mail import EmailMessage

from .models import UserDetails, UserLogin, UserTask, Notifications
from .serializers import UserSerializer, UserLoginSerializer, UserTaskSerializer, NotificationsSerializer






def generateOTP(n):
		range_start = 10**(n-1)
		range_end = (10**n)-1
		return randint(range_start, range_end)




def sendemail(email, otp):
	try:
		message = """
					<html>
					<body>
					<h1>Login OTP</h1>
					<hr>
					<h3>Your login otp is {0} , please don't share it with anayone</h3>
					<br>
					<h2>Thank You</h2>
					</body>
					</html>""".format(otp)
		msg=MIMEMultipart()
		msg['Subject'] = "Login otp"
		msg['From'] = "manankr21@gmail.com"
		msg['To'] = email
		msg.attach(MIMEText(message,'html'))

		smtp = smtplib.SMTP(host='smtp.gmail.com',port=587)
		smtp.starttls()
		smtp.login("manankr21@gmail.com","vqhqptiyzcsavkbn")
		smtp.send_message(msg)
		smtp.quit()
		return True

	except Exception as ex:
		print("Mail send Error : ",ex)
		return False
    



@api_view(['POST', 'GET'])
def fetch_email(request):
    data=request.data
    print(data)
    email2=data.get('email')
    if request.method=='POST':
        # query_data=UserDetails.objects.get(id=id)
        # query_data_login=UserLogin.objects.get(id=id)
        if email2:
            global otp3
            otp3 = generateOTP(5)
            print(otp3)
            sending_mail = sendemail(email2, otp3)
            if sending_mail:
                return Response("Email sent Successfull", status=status.HTTP_200_OK)
        return Response({"message": "Email not found"}, status=status.HTTP_404_NOT_FOUND)
    return Response({
            "message":"Data is not valid"
         }, status=status.HTTP_400_BAD_REQUEST)
    







@api_view(['POST', 'GET'])
def register_view(request):
    data=request.data
    print(data)    
    myotp = int(data.pop('otp'))
    print(myotp)
    print(data)
    # authorization_header = request.META.get('HTTP_AUTHORIZATION')
    # print(authorization_header)
    email1=data.get('email')
    password1=data.get('password')
    data2={'emai':email1, 'password': password1}
    # print(data)
    if request.method=='POST' and otp3 == myotp:
        # image_file = request.FILES.get('photo')
        # binary_data = image_file.read()
        # data['photo'] = binary_data
        # print("photo")
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
    




@api_view(['POST'])
def login_view(request):
    # how to store response in local storage in react
    data = request.data
    email = data.get("email2")
    password = data.get("password2")
    login_data = UserLogin.objects.filter(emai=email, password=password)
    # user_data = UserLoginSerializer(user)
    # print(user_data.data)

    
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




@api_view(['POST', 'GET'])
def task_view(request):
    data=request.data
    print(data)
    if request.method=='POST':
        serializer=UserTaskSerializer(data=data)
        if serializer.is_valid():
            print("check1")
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({
            "message":"Data is not valid"
        }, status=status.HTTP_400_BAD_REQUEST)
    




@api_view(['POST', 'GET'])
def fetch_task(request):
    data=request.data
    # print(data)
    email2=data.get('email')
    if request.method=='POST':
        query_data=UserTask.objects.filter(useremail=email2)
        if query_data.exists():
            task_data=UserTaskSerializer(query_data, many=True)
            return Response(task_data.data, status=status.HTTP_200_OK)
        return Response({"message": "No tasks found for the provided email"}, status=status.HTTP_404_NOT_FOUND)
    return Response({
            "message":"Data is not valid"
         }, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['POST', 'GET', ])
def delete_task(request):
    data=request.data
    print(data)
    id=data.get('id')
    if request.method=='POST':
        query_data=UserTask.objects.get(id=id)
        if query_data:
            query_data.delete()
            return Response("Delete Succesfull", status=status.HTTP_200_OK)
        return Response({"message": "No tasks found for the provided id"}, status=status.HTTP_404_NOT_FOUND)
    return Response({
            "message":"Data is not valid"
         }, status=status.HTTP_400_BAD_REQUEST)
    




@api_view(['POST', 'GET'])
def fetch_user(request):
    # data=request.data
    # print(data)
    # email2=data.get('email')
    if request.method=='GET':
        print("check1")
        query_data=UserDetails.objects.filter(role="user")
        print("check2")
        print(query_data)
        if query_data.exists():
            task_data=UserSerializer(query_data, many=True)
            return Response(task_data.data, status=status.HTTP_200_OK)
        return Response({"message": "No User found for the provided email"}, status=status.HTTP_404_NOT_FOUND)
    if request.method=='POST':
        data=request.data
        # print(data)
        id=data.get('id')
        query_data=UserDetails.objects.get(id=id)
        query_data_login=UserLogin.objects.get(id=id)
        if query_data:
            query_data.delete()
            query_data_login.delete()
            return Response("Delete Succesfull", status=status.HTTP_200_OK)
        return Response({"message": "No tasks found for the provided id"}, status=status.HTTP_404_NOT_FOUND)
    return Response({
            "message":"Data is not valid"
         }, status=status.HTTP_400_BAD_REQUEST)







@api_view(['POST', 'GET'])
def notification_view(request):
    
    if request.method=='GET':
        print("check1")
        query_data=Notifications.objects.all()
        print("check2")
        print(query_data)
        if query_data.exists():
            notification_data=NotificationsSerializer(query_data, many=True)
            return Response(notification_data.data, status=status.HTTP_200_OK)
        return Response({"message": "There is notifications"}, status=status.HTTP_404_NOT_FOUND)
    if request.method=='POST':
        data=request.data
        print(data)
        serializer=NotificationsSerializer(data=data)
        if serializer.is_valid():
            print("check1")
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({
            "message":"Data is not valid"
        }, status=status.HTTP_400_BAD_REQUEST)
    




@api_view(['POST', 'GET', ])
def delete_notification(request):
    data=request.data
    print(data)
    id=data.get('id')
    if request.method=='POST':
        query_data=Notifications.objects.get(id=id)
        if query_data:
            query_data.delete()
            return Response("Delete Succesfull", status=status.HTTP_200_OK)
        return Response({"message": "No tasks found for the provided id"}, status=status.HTTP_404_NOT_FOUND)
    return Response({
            "message":"Data is not valid"
         }, status=status.HTTP_400_BAD_REQUEST)
    



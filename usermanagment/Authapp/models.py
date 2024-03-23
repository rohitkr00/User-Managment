from django.db import models

class UserDetails(models.Model):
    name=models.CharField(max_length=50)
    email=models.EmailField()
    role=models.CharField(max_length=20)
    password=models.CharField(max_length=200)
    gender=models.CharField(max_length=50)
    designation=models.CharField(max_length=100)
    department=models.CharField(max_length=200)
    ctc=models.IntegerField()
    adress=models.CharField(max_length=300)
    education=models.CharField(max_length=200)
    photo=models.BinaryField()
    phone=models.CharField(max_length=10)

        

    def __str__(self):
        return self.name

class UserLogin(models.Model):
    emai=models.EmailField(max_length=254)
    password=models.CharField(max_length=254)


class UserTask(models.Model):
    useremail=models.EmailField(max_length=254)
    date=models.CharField(max_length=254)
    task=models.TextField()


class Notifications(models.Model):
    adminemail=models.EmailField(max_length=254)
    date=models.CharField(max_length=254)
    news=models.TextField()
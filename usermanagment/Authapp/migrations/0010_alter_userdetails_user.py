# Generated by Django 4.1 on 2024-02-22 09:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Authapp', '0009_remove_userdetails_role_userdetails_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userdetails',
            name='user',
            field=models.CharField(max_length=20),
        ),
    ]

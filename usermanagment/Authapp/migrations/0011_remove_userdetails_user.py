# Generated by Django 4.1 on 2024-02-22 09:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Authapp', '0010_alter_userdetails_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userdetails',
            name='user',
        ),
    ]

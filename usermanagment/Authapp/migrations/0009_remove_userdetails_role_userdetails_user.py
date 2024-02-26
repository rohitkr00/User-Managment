# Generated by Django 4.1 on 2024-02-22 09:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Authapp', '0008_alter_userdetails_role'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userdetails',
            name='role',
        ),
        migrations.AddField(
            model_name='userdetails',
            name='user',
            field=models.CharField(default='null', max_length=20),
        ),
    ]

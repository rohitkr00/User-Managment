from django.urls import path
from rest_framework import routers
from .views import register_view, login_view, UserView, check_permission
# from .views import UserViewSet, UserLoginViewSet ,login_view


# router = routers.DefaultRouter()
# router.register(r'Users', UserViewSet)
# router.register(r'Userlogin', UserLoginViewSet)
# router.register(r'login_view', login_view())

# urlpatterns = router.urls
urlpatterns = [
    path('register_view/', register_view),
    path('login_view/', login_view),
    path('userview/', UserView ),
    path('check_permission/', check_permission ),
    # Add other URLs as needed
    ]
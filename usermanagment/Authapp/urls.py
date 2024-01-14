from django.urls import path
from rest_framework import routers
from .views import login_view
# from .views import UserViewSet, UserLoginViewSet ,login_view


# router = routers.DefaultRouter()
# router.register(r'Users', UserViewSet)
# router.register(r'Userlogin', UserLoginViewSet)
# router.register(r'login_view', login_view())

# urlpatterns = router.urls
urlpatterns = [
    path('login_view/', login_view),
    # Add other URLs as needed
]
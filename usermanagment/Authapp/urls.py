from django.urls import path
from rest_framework import routers
from .views import UserViewSet, UserLoginViewSet


router = routers.DefaultRouter()
router.register(r'Users', UserViewSet)
router.register(r'Userlogin', UserLoginViewSet)

urlpatterns = router.urls
# urlpatterns = [
#     path('user-details/', UserViewSet.as_view(), name='user-details-list-create'),
#     path('user-login/', UserLoginViewSet.as_view(), name='user-login-list-create'),
#     # Add other URLs as needed
# ]
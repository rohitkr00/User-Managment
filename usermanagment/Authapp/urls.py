from django.urls import path
from rest_framework import routers
from .views import register_view, login_view, check_permission, update_view, task_view, fetch_task, delete_task, fetch_user, fetch_email, notification_view, delete_notification
# from .views import UserViewSet, UserLoginViewSet ,login_view


# router = routers.DefaultRouter()
# router.register(r'Users', UserViewSet)
# router.register(r'Userlogin', UserLoginViewSet)
# router.register(r'login_view', login_view())

# urlpatterns = router.urls
urlpatterns = [
    path('register_view/', register_view),
    path('login_view/', login_view),
    path('update_view/', update_view),    
    path('check_permission/', check_permission ),
    path('task_view/', task_view ),
    path('fetch_task/', fetch_task ),
    path('delete_task/', delete_task ),
    path('fetch_user/', fetch_user ),
    path('fetch_email/', fetch_email ),
    path('add_notification/', notification_view ),
    path('delete_notification/', delete_notification ),
    # Add other URLs as needed
    ]
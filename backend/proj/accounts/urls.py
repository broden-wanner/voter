from django.urls import path
from rest_framework import routers
from accounts.api import UsermodelViewSet

router = routers.DefaultRouter()
router.register('users', UsermodelViewSet, 'users')

urlpatterns = router.urls

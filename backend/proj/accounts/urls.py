from django.urls import path
from rest_framework import routers
from accounts.api import UsermodelViewSet, LoginAPI, RegisterAPI
from accounts import views
from django.conf.urls import include


router = routers.DefaultRouter()
router.register('users', UsermodelViewSet, 'users')

urlpatterns = router.urls
urlpatterns += [
    path('accounts/', views.UserList.as_view()),
    path('accounts/<int:pk>/', views.UserDetail.as_view()),
]
urlpatterns += [
    path('api-auth/', include('rest_framework.urls')),
]
urlpatterns += [
    path('login/', LoginAPI.as_view()),
    path('register/', RegisterAPI.as_view())
]

from rest_framework import viewsets, permissions, generics
from accounts.models import Usermodel
from accounts.serializers import UsermodelSerializer, RegisterSerializer, LoginSerializer
from knox.settings import knox_settings
from knox.models import AuthToken
from rest_framework.serializers import DateTimeField
import datetime
from rest_framework import viewsets
from rest_framework import generics
from rest_framework import permissions
from rest_framework.response import Response
from accounts.models import Usermodel
from accounts.serializers import UsermodelSerializer


class UsermodelViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing subtasks on projects
    """
    serializer_class = UsermodelSerializer
    # Users must be authenticated to view subtasks
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return Usermodel.objects.all()


class UserAPI(generics.RetrieveAPIView):
    serializer_class = UsermodelSerializer
    permission_classes = [permissions.AllowAny]

    def get_object(self):
        return self.request.user


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]

    # queryset = Usermodel.objects.all()

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        instance, token = AuthToken.objects.create(user)
        return Response({
            'user': UsermodelSerializer(user, context=self.get_serializer_context()).data,
            'token': token,
            'expiry_date': instance.expiry
        })


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        instance, token = AuthToken.objects.create(user)
        return Response({
            'user': UsermodelSerializer(user, context=self.get_serializer_context()).data,
            'token': token,
            'expiry_date': instance.expiry
        })

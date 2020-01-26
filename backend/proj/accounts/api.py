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
        """
        Override the get_queryset method to return only those
        projects which belong to the user
        """
        return Usermodel.objects.all()

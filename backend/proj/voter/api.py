import datetime
from rest_framework import viewsets
from rest_framework import generics
from rest_framework import permissions
from rest_framework.response import Response
from voter.models import Location
from voter.serializers import LocationSerializer


class LocationViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing subtasks on projects
    """
    serializer_class = LocationSerializer
    # Users must be authenticated to view subtasks
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        """
        Override the get_queryset method to return only those
        projects which belong to the user
        """
        return Location.objects.all()

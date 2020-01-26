from django.shortcuts import render

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from voter.models import Location
from voter.serializers import LocationSerializer

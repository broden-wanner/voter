from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from accounts.models import Usermodel
from accounts.serializers import UsermodelSerializer
from rest_framework import generics
from django.contrib.auth.models import User

@api_view(['GET', 'POST'])
def user_list(request, format=None):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        user = Usermodel.objects.all()
        serializer = UsermodelSerializer(user, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = UsermodelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def user_detail(request, pk, format=None):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        user = Usermodel.objects.get(pk=pk)
    except Usermodel.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UsermodelSerializer(user)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = UsermodelSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class UserList(generics.ListAPIView):
    queryset = Usermodel.objects.all()
    serializer_class = UsermodelSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = Usermodel.objects.all()
    serializer_class = UsermodelSerializer

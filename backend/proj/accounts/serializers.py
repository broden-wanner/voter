from rest_framework import serializers
from accounts.models import Usermodel


class UsermodelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usermodel
        fields = '__all__'


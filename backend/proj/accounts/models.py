from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class Usermodel(AbstractUser):
    # preferredvotinglocation: get these later
    # matcheduser (compare current locations)
    # currentlocation (based on device data)
    pass
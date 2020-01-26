from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class Usermodel(AbstractUser):
    preferredvotinglocation = models.ForeignKey(
        'voter.Location', 
        on_delete=models.SET_NULL,
        related_name='preferred',
        null=True)
    currentLocation = models.ForeignKey(
        'voter.Location', 
        on_delete=models.SET_NULL,
        related_name='current',
        null=True)
    role = models.BooleanField(default=False)
    leaveTime = models.DateTimeField()


    def __str__(self):
        return self.username
    



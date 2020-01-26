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
    
    leaveTime = models.DateTimeField(null=True, blank=True)

    role = models.BooleanField(default=False)

    partner = models.ForeignKey(
        'accounts.Usermodel',
        on_delete=models.SET_NULL,
        association=None,
        null=True)

    def __str__(self):
        return self.username
    



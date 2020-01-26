from django.db import models

# Create your models here.

class Role(models.Model):
    role = models.BooleanField()
    # votinglocations 
    def __str__(self):
        return self.role


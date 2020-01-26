from django.db import models

# Create your models here.

class Location(models.Model):
    precinct = models.TextField(max_length=30)
    # likely unused in the actual database
    # latitude = models.DecimalField(max_digits=12, decimal_places=9)
    # likely unused in the actual database
    # longitude = models.DecimalField(max_digits=12, decimal_places=9)
    canditates = models.TextField()
    address = models.TextField()
    location = models.CharField(max_length=30)

    def __str__(self):
        return self.location

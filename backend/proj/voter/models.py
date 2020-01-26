from django.db import models

# Create your models here.

class Location(models.Model):
    string = models.CharField(max_length=30)
    latitude = models.DecimalField(max_digits=12, decimal_places=9)
    longitude = models.DecimalField(max_digits=12, decimal_places=9)
    display_name = models.CharField(max_length=30)

    def __str__(self):
        return self.display_name

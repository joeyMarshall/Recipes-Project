from django.db import models

# Create your models here.
from django.db import models

class Recipe(models.Model):
    title = models.CharField(max_length=100)
    ingredients = models.TextField()

    def __str__(self):
        return self.title
    

    
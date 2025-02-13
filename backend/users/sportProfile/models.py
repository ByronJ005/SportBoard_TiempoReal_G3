from django.contrib.auth.models import User
from django.db import models

class User(User):
    nationality = models.CharField(max_length=100)
    birthdate = models.DateField()
    weigth = models.FloatField()



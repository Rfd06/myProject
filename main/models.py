from django.db import models

# Create your models here.
class Player(models.Model):
    name = models.CharField(max_length=100)
    height = models.CharField(max_length=100)
    team = models.CharField(max_length=100)
    ppg = models.DecimalField(max_digits=5, decimal_places=5)
class Team(models.Model):
    T_id = models.AutoField(primary_key=True)
    nameOfTeam = models.CharField(max_length=100)
    cityOfTeam = models.CharField(max_length=100)
    yearBorn = models.IntegerField()
from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator,MaxValueValidator


class Products(models.Model):
    title=models.CharField(max_length=200)
    description=models.CharField(max_length=200)
    price=models.PositiveIntegerField()
    category=models.CharField(max_length=200)
    image=models.ImageField(upload_to="image")

class Reviews(models.Model):
    product=models.ForeignKey(Products,on_delete=models.CASCADE)
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    comment=models.CharField(max_length=200)
    rating=models.PositiveIntegerField(validators=[MinValueValidator(1),MaxValueValidator(5)])




from django.conf import settings
from django.db import models
class Mybalance(models.Model):
    'Generated Model'
    btc = models.FloatField(null=True,blank=True,)
    eth = models.FloatField(null=True,blank=True,)
    bnb = models.FloatField(null=True,blank=True,)
    usdc = models.FloatField(null=True,blank=True,)
class Payment(models.Model):
    'Generated Model'
    amount = models.DecimalField(max_digits=10,decimal_places=2,)
    currency = models.CharField(max_length=3,)
    date = models.DateTimeField(auto_now_add=True,)
class Notification(models.Model):
    'Generated Model'
    title = models.CharField(max_length=100,)
    message = models.TextField()

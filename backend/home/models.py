from django.conf import settings
from django.db import models
class Mybalance(models.Model):
    'Generated Model'
    btc = models.FloatField(null=True,blank=True,)
    eth = models.FloatField(null=True,blank=True,)
    bnb = models.FloatField(null=True,blank=True,)
    usdc = models.FloatField(null=True,blank=True,)

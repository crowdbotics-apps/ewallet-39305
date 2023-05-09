from django.conf import settings
from django.db import models
class Wallet(models.Model):
    'Generated Model'
    wallet_id = models.BigIntegerField()
    wallet_name = models.CharField(null=True,blank=True,max_length=256,)
    wallet_type = models.CharField(null=True,blank=True,max_length=256,)
    chain_support = models.CharField(null=True,blank=True,max_length=256,)

# Create your models here.

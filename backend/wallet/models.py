from django.conf import settings
from django.db import models
class Wallet(models.Model):
    'Generated Model'
    wallet_id = models.BigIntegerField()
    wallet_name = models.CharField(max_length=256,null=True,blank=True,)
    wallet_type = models.CharField(max_length=256,null=True,blank=True,)
    chain_support = models.CharField(max_length=256,null=True,blank=True,)

# Create your models here.

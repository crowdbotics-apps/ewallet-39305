from django.contrib import admin
from .models import Mybalance,Notification,Payment
admin.site.register(Mybalance)
admin.site.register(Payment)
admin.site.register(Notification)

# Register your models here.

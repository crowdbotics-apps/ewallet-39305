
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import WalletViewSet
router = DefaultRouter()
router.register('wallet', WalletViewSet )

urlpatterns = [
    path("", include(router.urls)),
]

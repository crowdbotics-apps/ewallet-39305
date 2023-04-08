from rest_framework import authentication
from wallet.models import Wallet
from .serializers import WalletSerializer
from rest_framework import viewsets

class WalletViewSet(viewsets.ModelViewSet):
    serializer_class = WalletSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Wallet.objects.all()
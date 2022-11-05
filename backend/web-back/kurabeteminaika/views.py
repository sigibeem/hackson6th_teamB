# Create your views here.
from django.shortcuts import render
from rest_framework import viewsets, generics
from .models import weapon_configuration
from .serializers import ikaSerializer

class IkaAPIView(viewsets.ModelViewSet):
    queryset = weapon_configuration.objects.all()
    serializer_class = ikaSerializer


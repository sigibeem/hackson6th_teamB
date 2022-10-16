from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import generics
from .models import Kurabeteminaika
from .serializers import KurabeteminaikaSerializer


class ListKurabeteminaika(generics.ListAPIView):
    queryset = Kurabeteminaika.objects.all()
    serializer_class = KurabeteminaikaSerializer


class DetailKurabeteminaika(generics.RetrieveAPIView):
    queryset = Kurabeteminaika.objects.all()
    serializer_class = KurabeteminaikaSerializer

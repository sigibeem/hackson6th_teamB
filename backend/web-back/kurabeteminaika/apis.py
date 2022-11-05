from yaml import serialize
from .models import *
from rest_framework.generics import ListAPIView
from .serializers import KurabeteminaikaSerializer

class api(ListAPIView):
    queryset = weapon_configuration.objects.all()
    serialize_class = KurabeteminaikaSerializer
    permission_class = []
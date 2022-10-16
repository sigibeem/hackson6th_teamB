from rest_framework import serializers
from .models import Kurabeteminaika


class KurabeteminaikaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kurabeteminaika
        fields = ('id', 'title', 'body')

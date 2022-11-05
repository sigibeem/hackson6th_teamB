from rest_framework import serializers
from .models import weapon_configuration
from dataclasses import fields
from pyexpat import model

class ikaSerializer(serializers.ModelSerializer):
    class Meta:
        model = weapon_configuration
        fields = ('weapon_name', 'range', 'damage', 'fire_rate')

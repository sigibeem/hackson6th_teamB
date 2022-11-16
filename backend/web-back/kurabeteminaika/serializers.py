from rest_framework import serializers
from .models import *



class KurabeteminaikaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kurabeteminaika
        fields = ('id', 'title', 'body')

class GetResultMatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match_result
        fields = '__all__'


'''
class PostVote(serializers.ModelSerializer):
    class Meta:
        model = Match_result
        fields = '__all__'

        def create(self, validated_data):
            newVote = Match_result.objects.create(
                weapon = validated_data["weapon"],
                battle_mode = validated_data["battle_mode"],
                result = validated_data["result"]
            )
            newVote.save()
'''


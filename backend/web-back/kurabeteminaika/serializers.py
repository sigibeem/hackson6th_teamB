from rest_framework import serializers
from .models import *



class KurabeteminaikaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kurabeteminaika
        fields = ('id', 'title', 'body')


class WeaponSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weapon
        fields = '__all__'

class BattleModeSerializer(serializers.ModelSerializer):
    class Meta:
        mdoel = Battle_mode
        fields = '__all__'
class GetResultMatchSerializer(serializers.ModelSerializer):

    #battle_mode = BattleModeSerializer(many=True)
    class Meta:
        model = Match_result
        fields = [
            'weapon',
            'battle_mode',
            'result',
            #'win_rate',
        ]
    '''
    win_rate = serializers.SerializerMethodField()
    def get_win_rate(self, obj):
        
        return obj.result + 100
    '''

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


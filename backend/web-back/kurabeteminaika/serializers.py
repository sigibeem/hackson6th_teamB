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
class PostResultMatchSerializer(serializers.ModelSerializer):
    weapon = serializers.SlugRelatedField(queryset = Weapon.objects.all(), slug_field = 'weapon_name')
    battle_mode = serializers.SlugRelatedField(queryset = Battle_mode.objects.all(), slug_field = 'battle_mode_name')

    class Meta:
        model = Match_result
        fields = [
            'weapon',
            'battle_mode',
            'result',
            #'win_rate',
        ]
'''
class WinRateSerializer(serializers.Serializer):
    win_rate = serializers.SerializerMethodField()

    def get_win_rate(self):

        try:
            win_count = Match_result.objects.filter(battle_mode = 'area', result = 1).count()
        except ZeroDivisionError:
            win_count = "zero"
            
        return win_count
'''

class GetResultMatchSerializer(serializers.Serializer):
    #win_rate = WinRateSerializer(many = True)
    #weapon = serializers.SlugRelatedField(queryset = Weapon.objects.all(), slug_field = 'weapon_name')
    #battle_mode = serializers.SlugRelatedField(queryset = Battle_mode.objects.all(), slug_field = 'battle_mode_name')
    win_rate = serializers.SerializerMethodField()#many = True)
    
    def get_win_rate(self, obj):
        req_weapon = self.context.get('request').parser_context.get('kwargs').get('weapon')#query_params.get('weapon', None)
        #win_count = Match_result.objects.filter(weapon__weapon_name = req_weapon).count()
        
        win_count = {}
        battle_mode_list = list(Battle_mode.objects.values_list('battle_mode_name', flat=True))

        for battle_mode in battle_mode_list:
            match_count_locked_req_weapon = Match_result.objects.filter(weapon__weapon_name = req_weapon, battle_mode__battle_mode_name = battle_mode)
            try:
                match_counter = match_count_locked_req_weapon.count()
                win_counter = match_count_locked_req_weapon.filter(result = True).count()
                ratio = round(win_counter / match_counter, 2)
                win_count[battle_mode] = ratio

            except ZeroDivisionError:
                win_count[battle_mode] = "NoneData"

        return win_count



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

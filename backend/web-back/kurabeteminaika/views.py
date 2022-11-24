
<<<<<<< HEAD
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK
from rest_framework.viewsets import ViewSet
from rest_framework import viewsets, generics, status
import json
from .models import *
from .serializers import *

=======
>>>>>>> 1b3e23128d0fc57b6314f0ae2bdfe36c1e1cee87
'''
class ListKurabeteminaika(generics.ListAPIView):
    queryset = Kurabeteminaika.objects.all()
    serializer_class = KurabeteminaikaSerializer


class DetailKurabeteminaika(generics.RetrieveAPIView):
    queryset = Kurabeteminaika.objects.all()
    serializer_class = KurabeteminaikaSerializer
<<<<<<< HEAD

'''
=======
'''



>>>>>>> 1b3e23128d0fc57b6314f0ae2bdfe36c1e1cee87
#argument:weapon (武器名)、返り値:ゲームモード毎の勝率
class MatchResultViewSet(generics.ListAPIView):
    queryset = Match_result.objects.all()
    serializer_class = GetResultMatchSerializer
    lookup_field = 'weapon'

    def get_queryset(self):
        the_weapon = self.kwargs['weapon']
<<<<<<< HEAD
        '''
        win_rate = {}

        battle_mode_list = list(Battle_mode.objects.values_list('battle_mode_name', flat=True))
        for battle_mode in battle_mode_list:
            match_counter_lock_weapon = Match_result.objects.filter(weapon__weapon_name = the_weapon, battle_mode_id__battle_mode_name = battle_mode)

            match_count = match_counter_lock_weapon.count()
            win_count = match_counter_lock_weapon.filter(result = 1).count()
            
            win_rate[battle_mode] = int(win_count / match_count)
        '''
        #return json.dumps(win_rate)   
        return Match_result.objects.filter(weapon__weapon_name = the_weapon)

class VoteCreateView(generics.CreateAPIView):
    serializer_class = GetResultMatchSerializer
    queryset = Match_result.objects.all()
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

=======

        return Match_result.objects.filter(weapon__weapon_name = the_weapon)

'''
class CreatVote(APIView):
    queryset = Match_result.objects.all()
    serializer_class = PostVote
'''
>>>>>>> 1b3e23128d0fc57b6314f0ae2bdfe36c1e1cee87


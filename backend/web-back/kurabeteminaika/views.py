from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import generics
from .models import Kurabeteminaika
from .serializers import KurabeteminaikaSerializer

'''
class ListKurabeteminaika(generics.ListAPIView):
    queryset = Kurabeteminaika.objects.all()
    serializer_class = KurabeteminaikaSerializer


class DetailKurabeteminaika(generics.RetrieveAPIView):
    queryset = Kurabeteminaika.objects.all()
    serializer_class = KurabeteminaikaSerializer
'''



#argument:weapon (武器名)、返り値:ゲームモード毎の勝率
class MatchResultViewSet(generics.ListAPIView):
    queryset = Match_result.objects.all()
    serializer_class = GetResultMatchSerializer
    lookup_field = 'weapon'

    def get_queryset(self):
        the_weapon = self.kwargs['weapon']

        return Match_result.objects.filter(weapon__weapon_name = the_weapon)

'''
class CreatVote(APIView):
    queryset = Match_result.objects.all()
    serializer_class = PostVote
'''


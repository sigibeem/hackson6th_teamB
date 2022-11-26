
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK
from rest_framework.viewsets import ViewSet
from rest_framework.views import APIView
from rest_framework import viewsets, generics, status
import json
from .models import *
from .serializers import *

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
        #return json.dumps(win_rate)   
        return Match_result.objects.filter(weapon__weapon_name = the_weapon)
'''
class MatchResultViewSet(APIView):
    def get(self, request, weapon):
        queryset = Match_result.objects.all()
        serializer = GetResultMatchSerializer()
        return Response(serializer.data)
'''

class VoteCreateView(generics.CreateAPIView):
    serializer_class = PostResultMatchSerializer
    queryset = Match_result.objects.all()
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)



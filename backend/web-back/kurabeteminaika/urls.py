from rest_framework import routers
from django.urls import path, include
from .views import *


urlpatterns = [
    path('statistics/<str:weapon>/', MatchResultViewSet.as_view()),
    #path('vote/', CreatVote.as_view()),

]

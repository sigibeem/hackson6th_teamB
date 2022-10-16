from django.urls import path, include
from .views import ListKurabeteminaika, DetailKurabeteminaika

urlpatterns = [
    path('<int:pk>/', DetailKurabeteminaika.as_view()),
    path('', ListKurabeteminaika.as_view())
]

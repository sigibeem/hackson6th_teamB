from django.urls import URLPattern, path, include
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('ika', views.IkaAPIView)

urlpatterns = [
    path('', include(router.urls))
]
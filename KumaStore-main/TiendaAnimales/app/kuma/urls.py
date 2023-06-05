from django.urls import path
from . import views

urlpatterns = [
    path('', views.cargarInicio),
    path('login', views.cargarSesion),
    path('bandana', views.cargarBandana),
    path('correa', views.cargarCorreas),
    path('colgante', views.cargarColgantes),
    path('juguete', views.cargarJuguetes)
]
from django.shortcuts import render

# Create your views here.

def cargarInicio(request):
    return render(request, "inicio.html")
    
def cargarSesion(request):
   return render(request,"iniciosesion.html")
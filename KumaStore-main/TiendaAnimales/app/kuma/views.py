from django.shortcuts import render

# Create your views here.

def cargarInicio(request):
    return render(request, "inicio.html")
    
def cargarSesion(request):
   return render(request,"iniciosesion.html")

def cargarBandana(request):
    return render(request, "bandanas.html")

def cargarCorreas(request):
    return render(request, "correas.html")

def cargarColgantes(request):
    return render(request, "identificadores.html")

def cargarJuguetes(request):
    return render(request, "juguetes.html")
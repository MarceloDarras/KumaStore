from django.db import models

# Create your models here.

class Categoria(models.Model):
    categoria_id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50, null=False)

    def __str__(self):
        txt = "Nombre: {0} - {1}"
        return txt.format(self.nombre, self.categoria_id)
        

class Producto(models.Model):
    sku = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=100, null=False)
    descripcion = models.CharField(max_length=150, null=False)
    stock = models.IntegerField(null=False)
    precio = models.IntegerField(null=False)
    fecha_ingreso = models.DateField(auto_now_add=True, null=False)
    fecha_vencimiento = models.DateField(null=True)
    categoria_id = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    imagen_url = models.CharField(max_length=200, null=False)

    def __str__(self):
        txt = "Nombre: {0} - {1}"
        return txt.format(self.nombre, self.sku)


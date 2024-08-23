from django.shortcuts import render
from rest_framework import generics
from .models import Recipe
from .serializers import RecipeSerializer

class RecipeListCreate(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

# New view for the root URL
def home(request):
    return HttpResponse("Welcome to the Recipe App!")  # You can replace this with render if you have a template

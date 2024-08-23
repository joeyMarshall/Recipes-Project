from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('api/recipes/', views.RecipeListCreate.as_view(), name='recipe-list-create'),
]

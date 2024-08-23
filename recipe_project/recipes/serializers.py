from rest_framework import serializers
from .models import Recipe

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ['id', 'title', 'ingredients']
        extra_kwargs = {
            'ingredients': {'required': False, 'allow_blank': True}
        }

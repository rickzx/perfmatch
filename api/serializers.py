from rest_framework import serializers
from .models import Employer, Employee

class EmployerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employer
        fields = ('id', 'name', 'age', 'profile_photo', 
        'description', 'email', 'created_at')


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ('id', 'name', 'age', 'profile_photo', 
        'description', 'email', 'created_at')


class CreateEmployerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employer
        fields = ('name', 'age', 'profile_photo', 'description', 'email')
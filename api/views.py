from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import EmployerSerializer, EmployeeSerializer, CreateEmployerSerializer
from .models import Employer, Employee

# Create your views here.

class EmployerView(generics.ListAPIView):
    queryset = Employer.objects.all()
    serializer_class = EmployerSerializer


class EmployeeView(generics.ListAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class GetEmployerView(APIView):
    serializer_class = EmployerSerializer
    lookup_url_kwarg = 'id'

    def get(self, request, format=None):
        id = request.GET.get(self.lookup_url_kwarg)
        if id != None:
            employer = Employer.objects.filter(id=id)
            if len(employer) > 0:
                data = EmployeeSerializer(employer[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Employer not found': 'Invalid id'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'id parameter not found'}, status=status.HTTP_400_BAD_REQUEST)

class CreateEmployerView(APIView):
    serializer_class = CreateEmployerSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            employer = Employer(name=serializer.data.get('name'), 
                age=serializer.data.get('age'),
                profile_photo=serializer.data.get('profile_photo'), 
                description=serializer.data.get('description'),
                email=serializer.data.get('email'))
            employer.save()
        
        return Response(EmployeeSerializer(employer).data, status=status.HTTP_201_CREATED)

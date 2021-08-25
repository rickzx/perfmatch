from django.urls import path
from .views import EmployerView, EmployeeView, CreateEmployerView, GetEmployerView

urlpatterns = [
    path('employers/', EmployerView.as_view()),
    path('employees/', EmployeeView.as_view()),
    path('createEmployer', CreateEmployerView.as_view()),
    path('getEmployer', GetEmployerView.as_view())
]
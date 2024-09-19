from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, ProductSerializer, InventorySerializer, CompanySerializer, OrderDetailsSerializer, OrderSerializer, OrderTrackingSerializer, CustomerSerializer, EmployeeSerializer, SupplierSerializer, InboundStockSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Product, Inventory, Company, Order, OrderDetails, OrderTracking, Customer, Employee, Supplier, InboundStock

# USER
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

# PRODUCT
class ProductCreate(generics.CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

class ProductListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny] 

class ProductUpdateView(generics.RetrieveUpdateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

class ProductDeleteView(generics.DestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]


# COMPANY
class CompanyAdd(generics.CreateAPIView):
    serializer_class = CompanySerializer
    permission_classes = [AllowAny]

class CompanyListView(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    permission_classes = [AllowAny]

class CompanyUpdateView(generics.RetrieveUpdateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    permission_classes = [AllowAny]

class CompanyDeleteView(generics.DestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    permission_classes = [AllowAny]

# Customer
class CustomerAdd(generics.CreateAPIView):
    serializer_class = CustomerSerializer
    permission_classes = [AllowAny]

class CustomerListView(generics.ListAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = [AllowAny]

class CustomerUpdateView(generics.RetrieveUpdateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = [AllowAny]

class CustomerDeleteView(generics.DestroyAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = [AllowAny]

# ORDER
class OrderAdd(generics.CreateAPIView):
    serializer_class = OrderSerializer
    permission_classes = [AllowAny]

class OrderListView(generics.ListAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [AllowAny]

class OrderDetailsAdd(generics.CreateAPIView):
    serializer_class = OrderDetailsSerializer
    permission_classes = [AllowAny]

class OrderDetailsListView(generics.ListAPIView):
    queryset = OrderDetails.objects.all()
    serializer_class = OrderDetailsSerializer
    permission_classes = [AllowAny]

class OrderTrackingCreate(generics.CreateAPIView):
    serializer_class = OrderTrackingSerializer
    permission_classes = [AllowAny]

class OrderTrackingListView(generics.ListAPIView):
    queryset = OrderTracking.objects.all()
    serializer_class = OrderTrackingSerializer
    permission_classes = [AllowAny]

# INVENTORY
class InventoryListView(generics.ListAPIView):
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer
    permission_classes = [AllowAny] 

class InventoryAdd(generics.CreateAPIView):
    serializer_class = InventorySerializer
    permission_classes = [AllowAny] 

# Employee
class EmployeeAdd(generics.CreateAPIView):
    serializer_class = EmployeeSerializer
    permission_classes = [AllowAny]

class EmployeeListView(generics.ListAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [AllowAny]

class EmployeeUpdateView(generics.RetrieveUpdateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [AllowAny]

class EmployeeDeleteView(generics.DestroyAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [AllowAny]

# Supplier
class SupplierAdd(generics.CreateAPIView):
    serializer_class = SupplierSerializer
    permission_classes = [AllowAny]

class SupplierListView(generics.ListAPIView):
    queryset = Supplier.objects.all()
    serializer_class = SupplierSerializer
    permission_classes = [AllowAny]

class SupplierUpdateView(generics.RetrieveUpdateAPIView):
    queryset = Supplier.objects.all()
    serializer_class = SupplierSerializer
    permission_classes = [AllowAny]

class SupplierDeleteView(generics.DestroyAPIView):
    queryset = Employee.objects.all()
    serializer_class = SupplierSerializer
    permission_classes = [AllowAny]

# InboundStock
class InboundStockCreateView(generics.CreateAPIView):
    queryset = InboundStock.objects.all()
    serializer_class = InboundStockSerializer
    permission_classes = [AllowAny]
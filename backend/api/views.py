from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics, status
from rest_framework.response import Response
from .serializers import (
        UserSerializer, ProductSerializer, InventorySerializer, 
        AccountSerializer, OrderDetailsSerializer, OrderSerializer, 
        OrderTrackingSerializer, CustomerSerializer, EmployeeSerializer, 
        SupplierSerializer, InboundStockSerializer, InvoiceSerializer
    )
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import (
        Product, Inventory, Account, 
        Order, OrderDetails, OrderTracking, 
        Customer, Employee, Supplier, 
        InboundStock, Invoice
    )


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

# Account
class AccountAdd(generics.CreateAPIView):
    serializer_class = AccountSerializer
    permission_classes = [AllowAny]

class AccountListView(generics.ListAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    permission_classes = [AllowAny]

class AccountUpdateView(generics.RetrieveUpdateAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    permission_classes = [AllowAny]

class AccountDeleteView(generics.DestroyAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    permission_classes = [AllowAny]

class AccountSoftDeleteView(generics.UpdateAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    permission_classes = [AllowAny]

    def update(self, request, *args, **kwargs):
        # Get the instance of the account
        instance = self.get_object()

        # Set the 'is_deleted' field to True
        instance.is_deleted = True
        instance.save()

        # You can optionally return the updated instance
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

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
    permission_classes = [IsAuthenticated]

class CustomerDeleteView(generics.DestroyAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = [IsAuthenticated]

class CustomerSoftDeleteView(generics.UpdateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = [AllowAny]

    def update(self, request, *args, **kwargs):
        # Get the instance of the account
        instance = self.get_object()

        # Set the 'is_deleted' field to True
        instance.is_deleted = True
        instance.save()

        # You can optionally return the updated instance
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

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

class OrderTrackingUpdateView(generics.RetrieveUpdateAPIView):
    queryset = OrderTracking.objects.all()
    serializer_class = OrderTrackingSerializer
    permission_classes = [AllowAny]

class InvoiceCreate(generics.CreateAPIView):
    serializer_class = InvoiceSerializer
    permission_classes = [AllowAny]

class InvoiceListView(generics.ListAPIView):
    queryset = Invoice.objects.all()
    serializer_class = InvoiceSerializer
    permission_classes = [AllowAny]

# INVENTORY
class InventoryListView(generics.ListAPIView):
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer
    permission_classes = [AllowAny] 

class InventoryAdd(generics.CreateAPIView):
    serializer_class = InventorySerializer
    permission_classes = [AllowAny] 

class InventoryUpdateView(generics.RetrieveUpdateAPIView):
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer
    permission_classes = [AllowAny]

class InventoryDetailView(generics.RetrieveAPIView):
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer
    permission_classes = [AllowAny]

class InventorySoftDeleteView(generics.UpdateAPIView):
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer
    permission_classes = [AllowAny]

    def update(self, request, *args, **kwargs):
        # Get the instance of the account
        instance = self.get_object()

        # Set the 'is_deleted' field to True
        instance.is_deleted = True
        instance.save()

        # You can optionally return the updated instance
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

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

class EmployeeSoftDeleteView(generics.UpdateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [AllowAny]

    def update(self, request, *args, **kwargs):
        # Get the instance of the account
        instance = self.get_object()

        # Set the 'is_deleted' field to True
        instance.is_deleted = True
        instance.save()

        # You can optionally return the updated instance
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
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
    queryset = Supplier.objects.all()
    serializer_class = SupplierSerializer
    permission_classes = [AllowAny]

class SupplierSoftDeleteView(generics.UpdateAPIView):
    queryset = Supplier.objects.all()
    serializer_class = SupplierSerializer
    permission_classes = [AllowAny]

    def update(self, request, *args, **kwargs):
        # Get the instance of the account
        instance = self.get_object()

        # Set the 'is_deleted' field to True
        instance.is_deleted = True
        instance.save()

        # You can optionally return the updated instance
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
    
# InboundStock
class InboundStockCreateView(generics.CreateAPIView):
    queryset = InboundStock.objects.all()
    serializer_class = InboundStockSerializer
    permission_classes = [AllowAny]

class InboundStockListView(generics.ListAPIView):
    queryset = InboundStock.objects.all()
    serializer_class = InboundStockSerializer
    permission_classes = [AllowAny]

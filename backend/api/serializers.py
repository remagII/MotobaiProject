from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Product, Inventory, Company, Order, OrderDetails, OrderTracking, Customer, Employee, Supplier, InboundStock


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    def create(self, validated_data):
        # Create the product
        product = super().create(validated_data)

        # Add the product to the inventory with default values
        Inventory.objects.create(product=product, stock=0, stock_minimum_threshold=0)

        return product

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'
    
class InboundStockSerializer(serializers.ModelSerializer):
    class Meta:
        model = InboundStock
        fields = '__all__'
        depth = 1
    
    # def create(self, validated_data):
    #     # Create the inbound stock
    #     inbound_stock = super().create(validated_data)

    #     # Get the related product and inventory
    #     product = inbound_stock.product
    #     quantity = inbound_stock.quantity

    #     # Find the existing inventory for this product
    #     inventory, created = Inventory.objects.get_or_create(product=product)

    #     # Update the stock by adding the inbound quantity
    #     inventory.stock += quantity
    #     inventory.save()

    #     return inbound_stock

class InventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory
        fields = '__all__'
        depth = 1

class OrderSerializer(serializers.ModelSerializer):
    company = serializers.PrimaryKeyRelatedField(queryset=Company.objects.all())

    class Meta:
        model = Order
        fields = '__all__'

    # def create(self, validated_data):
    #     order_details_data = validated_data.pop('order_details')
    #     order = Order.objects.create(**validated_data)
    #     for order_detail_data in order_details_data:
    #         OrderDetails.objects.create(order=order, **order_detail_data)
    #     return order

class OrderDetailsSerializer(serializers.ModelSerializer):
    order = serializers.PrimaryKeyRelatedField(queryset=Order.objects.all())
    product = serializers.PrimaryKeyRelatedField(queryset=Inventory.objects.all())

    class Meta:
        model = OrderDetails
        fields = '__all__'

class OrderTrackingSerializer(serializers.ModelSerializer):
    order = serializers.PrimaryKeyRelatedField(queryset=Order.objects.all())

    class Meta:
        model = OrderTracking
        fields = '__all__'

class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplier
        fields = '__all__'

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'
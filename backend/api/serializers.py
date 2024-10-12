from django.contrib.auth.models import User
from rest_framework import serializers
from .models import (
        Product, Inventory, Account, Order, OrderDetails,
        OrderTracking, Customer, Employee, Supplier, 
        InboundStock, InboundStockItem
    )

# USER
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user

# PRODUCT
class ProductSerializer(serializers.ModelSerializer):
    stock_minimum_threshold = serializers.IntegerField(write_only=True, required=False, default=0)

    class Meta:
        model = Product
        fields = '__all__'

    def create(self, validated_data):
        stock_minimum_threshold = validated_data.pop('stock_minimum_threshold', 0)
        
        # Create the product
        product = super().create(validated_data)

        # Add the product to the inventory with default values
        Inventory.objects.create(product=product, stock=0, stock_minimum_threshold=stock_minimum_threshold)

        return product
    
    def update(self, instance, validated_data):
        # Update the product instance
        instance = super().update(instance, validated_data)

         # Update the stock_minimum_threshold if provided
        stock_minimum_threshold = validated_data.get('stock_minimum_threshold', None)
        
        if stock_minimum_threshold is not None:
            # Access the related inventory object using the reverse relationship
            inventory_instance = instance.inventory_set.first()  # Get the first related inventory
            
            if inventory_instance:
                inventory_instance.stock_minimum_threshold = stock_minimum_threshold
                inventory_instance.save()

        return instance

# CUSTOMER
class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'

# STOCKIN
class InboundStockItemSerializer(serializers.ModelSerializer):
    inventory = serializers.PrimaryKeyRelatedField(queryset=Inventory.objects.all())
    supplier = serializers.PrimaryKeyRelatedField(queryset=Supplier.objects.all())
    product = ProductSerializer(source='inventory.product', read_only=True)
    supplier_name = serializers.ReadOnlyField(source='supplier.supplier_name')

    class Meta:
        model = InboundStockItem
        fields = ['inventory', 'supplier', 'quantity', 'product', 'supplier_name']
        depth = 1
    
class InboundStockSerializer(serializers.ModelSerializer):
    inboundStockItems = InboundStockItemSerializer(many=True)

    class Meta:
        model = InboundStock
        fields = ['id', 'inboundStockItems', 'date_created']

    def create(self, validated_data):
        inbound_stock_items_data = validated_data.pop('inboundStockItems')

        # Create the InboundStock object first
        inbound_stock = InboundStock.objects.create(**validated_data)

        # Iterate through each inbound_stock_item
        for item_data in inbound_stock_items_data:
            inventory = item_data['inventory']
            quantity = item_data['quantity']

            # Create each InboundStockItem linked to this InboundStock
            inbound_stock_item = InboundStockItem.objects.create(**item_data)
            inbound_stock.inboundStockItems.add(inbound_stock_item)

            # Update the Inventory stock for the related product
            inventory.stock += quantity
            inventory.save()

        return inbound_stock

# INVENTORY
class InventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory
        fields = '__all__'
        depth = 1

# ORDER MANAGEMENT
class OrderDetailsSerializer(serializers.ModelSerializer):
    order = serializers.PrimaryKeyRelatedField(queryset=Order.objects.all(), required=False)
    product = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all())
    product_price = serializers.DecimalField(decimal_places=2, max_digits=10, required=False)
    quantity = serializers.IntegerField(required=True)  
    
    class Meta:
        model = OrderDetails
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    account = serializers.PrimaryKeyRelatedField(queryset=Account.objects.all(), required=False)
    customer = serializers.PrimaryKeyRelatedField(queryset=Customer.objects.all(), required=False)
    employee = serializers.PrimaryKeyRelatedField(queryset=Employee.objects.all(), required=True)
    order_details = OrderDetailsSerializer(many=True)

    class Meta:
        model = Order
        fields = '__all__'

    def create(self, validated_data):
        order_details_data = validated_data.pop('order_details')
        order = Order.objects.create(**validated_data)
        for order_detail_data in order_details_data:
            OrderDetails.objects.create(order=order, **order_detail_data)
        return order

class OrderTrackingSerializer(serializers.ModelSerializer):
    order = serializers.PrimaryKeyRelatedField(queryset=Order.objects.all())
    

    class Meta:
        model = OrderTracking
        fields = '__all__'

# MISC
class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplier
        fields = '__all__'

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'
from django.db import models
from django.contrib.auth.models import User

class Product(models.Model):
    product_name = models.CharField(max_length=100)
    price = models.DecimalField(decimal_places=2, max_digits=10, null=True, blank=True, default=0)
    product_type = models.CharField(max_length=100, null=True, blank=True, default='')
    description = models.TextField(max_length=32, null=True, blank=True, default='')
    brand = models.CharField(max_length=32, null=True, blank=True, default='')
    vehicle_type = models.CharField(max_length=32, null=True, blank=True, default='')
    
    def __str__(self):
        return '{}: {}'.format(self.product_name, self.product_type)

class Inventory(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    stock = models.PositiveIntegerField(null=True, blank=True, default=0)
    stock_minimum_threshold = models.PositiveIntegerField(null=True, blank=True, default=0)
    stock_maximum_threshold = models.PositiveIntegerField(null=True, blank=True, default=0)
    date_added = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return '{}: {}'.format(self.product, self.stock)
    
class Supplier(models.Model):
    supplier_name = models.CharField(max_length=100, default='')
    phone_number = models.CharField(max_length=100, default='')
    description = models.CharField(max_length=100, default='')

class InboundStockItem(models.Model):
    inventory = models.ForeignKey(Inventory, on_delete=models.CASCADE)
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(null=True, blank=True, default=0)

class InboundStock(models.Model):
    inboundStockItems = models.ManyToManyField(InboundStockItem, related_name='inbound_stocks')
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return 'Stock Entry: {} items on {}'.format(self.inboundStockItems.count(), self.date_created)
    

class Account(models.Model):
    account = models.CharField(max_length=100)
    representative_name = models.CharField(max_length=100)
    representative_position = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    barangay = models.CharField(max_length=100)
    street = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '{}: {}'.format(self.account_name, self.representative_name)
    
class Customer(models.Model):
    customer_name = models.CharField(max_length=100, default='')
    phone_number = models.CharField(max_length=100, default='')
    date_created = models.DateTimeField(auto_now_add=True)

# DISCOUNT NOT YET ADDED 
# CHOICES NOT COMPLETE
class Order(models.Model): 
    account = models.ForeignKey(Account, on_delete=models.CASCADE, null=True, blank=True)
    customer_walk_in_name = models.CharField(max_length=100, null=True, blank=True)
    order_date = models.DateTimeField(auto_now_add=True)
    payment_method = models.CharField(max_length=32,
                              choices=[
                                  ('gcash', 'GCash'),
                                  ('cash', 'Cash'),
                              ], default='cash')
    def __str__(self):
        if self.account:
            return f'Order ID: {self.pk}, Account: {self.account.name}'
        else:
            return f'Order ID: {self.pk}, Customer Walk-In Name: {self.customer_walk_in_name}'

class OrderDetails(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, default='0')
    product = models.ForeignKey(Inventory, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    price_total = models.DecimalField(decimal_places=2, max_digits=10)

class OrderTracking(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    status = models.CharField(max_length=32,
                              choices=[
                                  ('unvalidated', 'Unvalidated'),
                                  ('validated', 'Validated'),
                                  ('packed', 'Packed'),
                                  ('shipped', 'Shipped'),
                                  ('completed', 'Completed'),
                                  ('cancelled', 'Cancelled'),
                                  ('returned', 'Returned'),
                              ], default='unvalidated')
    date_created = models.DateTimeField(auto_now_add=True)
    date_validated = models.DateTimeField(null=True, blank=True)
    date_packed = models.DateTimeField(null=True, blank=True)
    date_completed = models.DateTimeField(null=True, blank=True)
    date_cancelled = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f'{self.order} - {self.status}'
    

    
class Employee(models.Model):
    first_name = models.CharField(max_length=100)
    middle_name = models.CharField(max_length=100) 
    last_name = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    barangay = models.CharField(max_length=100)
    street = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    date_created = models.DateTimeField(auto_now_add=True)
from django.db import models
from django.contrib.auth.models import User

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(decimal_places=2, max_digits=10)
    type = models.CharField(max_length=100, default='DefaultType')
    description = models.TextField(max_length=32, default='DefaultDescription')
    brand = models.CharField(max_length=32, default='DefaultBrand')
    status = models.CharField(max_length=32,
                              choices=[
                                  ('inactive', 'Inactive'),
                                  ('active', 'Active'),
                              ], default='inactive')
    
    def __str__(self):
        return '{}: {}'.format(self.name, self.type)

# INBOUND STOCK NOT YET ADDED
class Inventory(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    stock = models.PositiveIntegerField()
    stock_minimum_threshold = models.PositiveIntegerField()
    date_added = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return '{}: {}'.format(self.product, self.stock)

class Company(models.Model):
    name = models.CharField(max_length=100)
    rep_name = models.CharField(max_length=100)
    rep_position = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    barangay = models.CharField(max_length=100)
    street = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '{}: {}'.format(self.name, self.rep_name)

# DISCOUNT NOT YET ADDED
# CHOICES NOT COMPLETE
class Order(models.Model): 
    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=True, blank=True)
    customer_walk_in_name = models.CharField(max_length=100, null=True, blank=True)
    order_date = models.DateTimeField(auto_now_add=True)
    payment_method = models.CharField(max_length=32,
                              choices=[
                                  ('gcash', 'GCash'),
                                  ('cash', 'Cash'),
                              ], default='cash')
    def __str__(self):
        if self.company:
            return f'Order ID: {self.pk}, Company: {self.company.name}'
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
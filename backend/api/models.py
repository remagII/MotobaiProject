from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinLengthValidator

class Product(models.Model):
    product_name = models.CharField(max_length=64)
    price = models.DecimalField(decimal_places=2, max_digits=10, null=True, blank=True, default=0)
    product_type = models.CharField(max_length=100, null=True, blank=True, default='')
    description = models.TextField(max_length=100, null=True, blank=True, default='')
    brand = models.CharField(max_length=32, null=True, blank=True, default='')
    vehicle_type = models.CharField(max_length=32, null=True, blank=True, default='')
    
    def __str__(self):
        return '{}: {}'.format(self.product_name, self.product_type)

class Inventory(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    stock = models.PositiveIntegerField(null=True, blank=True, default=0)
    stock_minimum_threshold = models.PositiveIntegerField(null=True, blank=True, default=0)
    date_added = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return '{}: {}'.format(self.product, self.stock)
    
class Supplier(models.Model):
    supplier_name = models.CharField(max_length=64, default='')
    phone_number = models.CharField(max_length=11, default='')
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
    account = models.CharField(max_length=64)
    representative_name = models.CharField(max_length=64)
    representative_position = models.CharField(max_length=64)
    city = models.CharField(max_length=100)
    barangay = models.CharField(max_length=100)
    street = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=11, validators=[MinLengthValidator(11)])
    email = models.CharField(max_length=64)
    date_created = models.DateTimeField(auto_now_add=True)
    
    is_deleted = models.BooleanField(default=False)

    def __str__(self):
        return '{}: {}'.format(self.account, self.representative_name)
    
class Customer(models.Model):
    customer_name = models.CharField(max_length=64, default='')
    phone_number = models.CharField(max_length=11, default='')
    date_created = models.DateTimeField(auto_now_add=True)

    is_deleted = models.BooleanField(default=False)
    
    def __str__(self):
        return '{}'.format(self.customer_name)

class Employee(models.Model):
    first_name = models.CharField(max_length=34)
    middle_name = models.CharField(max_length=34) 
    last_name = models.CharField(max_length=34)
    city = models.CharField(max_length=100)
    barangay = models.CharField(max_length=100)
    street = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=11, validators=[MinLengthValidator(11)])
    email = models.CharField(max_length=64)
    date_created = models.DateTimeField(auto_now_add=True)

class Order(models.Model): 
    account = models.ForeignKey(Account, on_delete=models.CASCADE, null=True, blank=True, default="")
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, null=True, blank=True, default="")
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, null=True, blank=True, default="")

    order_date = models.DateTimeField(auto_now_add=True)
    # for information integrity
    account_name = models.CharField(max_length=64, null=True, blank=True, default="")
    representative_name = models.CharField(max_length=64, null=True, blank=True, default="")
    customer_name = models.CharField(max_length=64, null=True, blank=True, default="")
    employee_first_name = models.CharField(max_length=34, null=True, blank=True, default="")
    employee_middle_name = models.CharField(max_length=34, null=True, blank=True, default="")
    employee_last_name = models.CharField(max_length=34, null=True, blank=True, default="")

    def save(self, *args, **kwargs):
        if self.account:
            self.account_name = self.account.account
            self.representative_name = self.account.representative_name
        else:
            self.customer_name = self.customer.customer_name

        if self.employee:
            self.employee_first_name = self.employee.first_name
            self.employee_middle_name = self.employee.middle_name
            self.employee_last_name = self.employee.last_name
        super(OrderDetails, self).save(*args, **kwargs)

    def __str__(self):
        if self.account:
            return f'Order ID: {self.pk}, Account Name: {self.account.name}'
        else:
            return f'Order ID: {self.pk}, Customer Name: {self.customer.last_name}, {self.customer.last_name}'

class OrderDetails(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, default='0')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    # for information integrity
    product_price = models.DecimalField(decimal_places=2, max_digits=10)
    product_name = models.CharField(max_length=64, null=True, blank=True)

    def save(self, *args, **kwargs):
        if self.product:
            self.product_name = self.product.product_name
            self.product_price = self.product.price
        super(OrderDetails, self).save(*args, **kwargs)

class OrderTracking(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    status = models.CharField(max_length=32,
                              choices=[
                                  ('unvalidated', 'Unvalidated'),
                                  ('validated', 'Validated'),
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
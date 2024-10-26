from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinLengthValidator, MinValueValidator

class Product(models.Model):
    product_name = models.CharField(max_length=100)
    price = models.DecimalField(decimal_places=2, max_digits=10, null=False, blank=False, validators=[MinValueValidator(1)])
    product_type = models.CharField(max_length=100, null=False, blank=False, default='')
    description = models.TextField(max_length=150, null=False, blank=False, default='')
    brand = models.CharField(max_length=64, null=False, blank=False, default='')
    vehicle_type = models.CharField(max_length=32, null=False, blank=False, default='')
    
    def __str__(self):
        return '{}: {}'.format(self.product_name, self.product_type)

class Inventory(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    stock = models.PositiveIntegerField(null=False, blank=False, default=0)
    stock_minimum_threshold = models.PositiveIntegerField(null=False, blank=False, default=0)
    date_added = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    is_deleted = models.BooleanField(default=False, null=False, blank=False)

    def __str__(self):
        return '{}: {}'.format(self.product, self.stock)
    
class Supplier(models.Model):
    supplier_name = models.CharField(max_length=64,null=False, blank=False, default='')
    phone_number = models.CharField(max_length=11,null=False, blank=False, validators=[MinLengthValidator(11)])
    description = models.CharField(max_length=150,null=False, blank=False, default='')

    is_deleted = models.BooleanField(default=False, null=False, blank=False)

class InboundStockItem(models.Model):
    inventory = models.ForeignKey(Inventory,null=False, blank=False, on_delete=models.CASCADE)
    supplier = models.ForeignKey(Supplier,null=False, blank=False, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(null=False, blank=False, default=0)

class InboundStock(models.Model):
    inboundStockItems = models.ManyToManyField(InboundStockItem, related_name='inbound_stocks', blank=False)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return 'Stock Entry: {} items on {}'.format(self.inboundStockItems.count(), self.date_created)
    
class Account(models.Model):
    account = models.CharField(max_length=64)
    representative_name = models.CharField(max_length=64, null=False, blank=False)
    representative_position = models.CharField(max_length=64, null=False, blank=False)
    city = models.CharField(max_length=64, null=False, blank=False)
    barangay = models.CharField(max_length=64, null=False, blank=False)
    street = models.CharField(max_length=64, null=False, blank=False)
    phone_number = models.CharField(max_length=11, validators=[MinLengthValidator(11)], null=False, blank=False)
    email = models.CharField(max_length=64, null=False, blank=False)
    date_created = models.DateTimeField(auto_now_add=True)
    
    is_deleted = models.BooleanField(default=False, null=False, blank=False)

    def __str__(self):
        return '{}: {}'.format(self.account, self.representative_name)
    
class Customer(models.Model):
    customer_name = models.CharField(max_length=100, default='', null=False, blank=False)
    phone_number = models.CharField(max_length=11, validators=[MinLengthValidator(11)], null=False, blank=False)
    date_created = models.DateTimeField(auto_now_add=True)

    is_deleted = models.BooleanField(default=False, null=False, blank=False)
    
    def __str__(self):
        return '{}'.format(self.customer_name)

class Employee(models.Model):
    first_name = models.CharField(max_length=64, null=False, blank=False)
    middle_name = models.CharField(max_length=34, null=False, blank=False) 
    last_name = models.CharField(max_length=34, null=False, blank=False)
    city = models.CharField(max_length=100, null=False, blank=False)
    barangay = models.CharField(max_length=100, null=False, blank=False)
    street = models.CharField(max_length=100, null=False, blank=False)
    phone_number = models.CharField(max_length=11, validators=[MinLengthValidator(11)], null=False, blank=False)
    email = models.CharField(max_length=64, null=False, blank=False)
    date_created = models.DateTimeField(auto_now_add=True)

    is_deleted = models.BooleanField(default=False, null=False, blank=False)

class Order(models.Model): 
    account = models.ForeignKey(Account, on_delete=models.CASCADE, null=True, blank=True, default="")  # one of only nullable fields in the system
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, null=True, blank=True, default="") # one of only nullable fields in the system
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, null=False, blank=False, default="")

    order_date = models.DateTimeField(auto_now_add=True)
    # for information integrity
    account_name = models.CharField(max_length=64, null=True, blank=True, default="")
    representative_name = models.CharField(max_length=64, null=True, blank=True, default="")
    customer_name = models.CharField(max_length=64, null=True, blank=True, default="")
    employee_first_name = models.CharField(max_length=34, null=False, blank=False, default="")
    employee_middle_name = models.CharField(max_length=34, null=False, blank=False, default="")
    employee_last_name = models.CharField(max_length=34, null=False, blank=False, default="")

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
        super(Order, self).save(*args, **kwargs)

    def __str__(self):
        if self.account:
            return f'Order ID: {self.pk}, Account Name: {self.account.account}'
        else:
            return f'Order ID: {self.pk}, Customer Name: {self.customer.last_name}, {self.customer.last_name}'

class OrderTracking(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE, related_name='order_tracking', null=True, blank=True)
    status = models.CharField(max_length=32, default='unvalidated')

    date_created = models.DateTimeField(auto_now_add=True)
    date_validated = models.DateTimeField(null=True, blank=True)
    date_shipped = models.DateTimeField(null=True, blank=True)
    date_completed = models.DateTimeField(null=True, blank=True)
    date_cancelled = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f'{self.status}'

class OrderDetails(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order_details', null=False, blank=False)
    inventory = models.ForeignKey(Inventory, on_delete=models.CASCADE, null=False, blank=False)
    quantity = models.PositiveIntegerField(null=False, blank=False, default=0)
    # for information integrity
    product_price = models.DecimalField(decimal_places=2, max_digits=10, null=True, blank=True)
    product_name = models.CharField(max_length=64, null=True, blank=True)

    def save(self, *args, **kwargs):
        if self.inventory:
            self.product_name = self.inventory.product.product_name
            self.product_price = self.inventory.product.price
        
    # Deduct stock quantity
        if self.inventory.stock >= self.quantity:
            self.inventory.stock -= self.quantity
            self.inventory.save()
        else:
            raise ValueError("Not enough stock available")
        super(OrderDetails, self).save(*args, **kwargs)


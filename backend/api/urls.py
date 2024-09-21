from django.urls import path
from . import views

urlpatterns = [
    path("product/create", views.ProductCreate.as_view(), name="product-create"),
    path("product/list", views.ProductListView.as_view(), name="product-list"),
    path("product/update/<int:pk>", views.ProductUpdateView.as_view(), name="product-update"),
    path("product/delete/<int:pk>", views.ProductDeleteView.as_view(), name="product-delete"),

    path("inventory/list", views.InventoryListView.as_view(), name="inventory-list"),
    path("inventory/view/<int:pk>/", views.InventoryDetailView.as_view(), name="inventory-view"),
    # path("inventory/create", views.InventoryAdd.as_view(), name="inventory-add"),

    path("company/list", views.CompanyListView.as_view(), name="company-list"),
    path("company/create", views.CompanyAdd.as_view(), name="company-add"),
    path("company/update/<int:pk>", views.CompanyUpdateView.as_view(), name="company-update"),
    path("company/delete/<int:pk>", views.CompanyDeleteView.as_view(), name="company-delete"),

    path("customer/list", views.CustomerListView.as_view(), name="customer-list"),
    path("customer/create", views.CustomerAdd.as_view(), name="customer-add"),
    path("customer/update/<int:pk>", views.CustomerUpdateView.as_view(), name="customer-update"),
    path("customer/delete/<int:pk>", views.CustomerDeleteView.as_view(), name="customer-delete"),

    path('order/create', views.OrderAdd.as_view(), name='order-create'),
    path('order/list', views.OrderListView.as_view(), name='order-list'),

    path('orderdetails/create', views.OrderDetailsAdd.as_view(), name='orderdetails-add'),
    path('orderdetails/list', views.OrderDetailsListView.as_view(), name='orderdetails-list'),

    path('ordertracking/create', views.OrderTrackingCreate.as_view(), name='ordertracking-add'),
    path('ordertracking/list', views.OrderTrackingListView.as_view(), name='ordertracking-list'),

    path("supplier/list", views.SupplierListView.as_view(), name="supplier-list"),
    path("supplier/create", views.SupplierAdd.as_view(), name="supplier-add"),
    path("supplier/update/<int:pk>", views.SupplierUpdateView.as_view(), name="supplier-update"),
    path("supplier/delete/<int:pk>", views.SupplierDeleteView.as_view(), name="supplier-delete"),

    path("employee/list", views.EmployeeListView.as_view(), name="employee-list"),
    path("employee/create", views.EmployeeAdd.as_view(), name="employee-add"),
    path("employee/update/<int:pk>", views.EmployeeUpdateView.as_view(), name="employee-update"),
    path("employee/delete/<int:pk>", views.EmployeeDeleteView.as_view(), name="employee-delete"),

    path("stockin/create", views.InboundStockCreateView.as_view(), name="stocki-add"),
    path("stockin/list", views.InboundStockListView.as_view(), name="stockin-list"),
]
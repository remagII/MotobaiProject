from django.urls import path
from . import views

urlpatterns = [
    path("product/create/", views.ProductCreate.as_view(), name="product-create"),
    path("product/list/", views.ProductListView.as_view(), name="product-list"),
    path("product/update/<int:pk>/", views.ProductUpdateView.as_view(), name="product-update"),
    path("product/delete/<int:pk>/", views.ProductDeleteView.as_view(), name="product-delete"),

    path("inventory/list/", views.InventoryListView.as_view(), name="inventory-list"),
    path("inventory/view/<int:pk>/", views.InventoryDetailView.as_view(), name="inventory-view"),
    path("inventory/update/<int:pk>/", views.InventoryUpdateView.as_view(), name="inventory-update"),
    # path("inventory/create", views.InventoryAdd.as_view(), name="inventory-add"),
    path("inventory/soft_delete/<int:pk>/", views.InventorySoftDeleteView.as_view(), name="inventory-soft-delete"),

    path("account/list/", views.AccountListView.as_view(), name="account-list"),
    path("account/create/", views.AccountAdd.as_view(), name="account-add"),
    path("account/update/<int:pk>/", views.AccountUpdateView.as_view(), name="account-update"),
    path("account/delete/<int:pk>/", views.AccountDeleteView.as_view(), name="account-delete"),
    path("account/soft_delete/<int:pk>/", views.AccountSoftDeleteView.as_view(), name="account-soft-delete"),

    path("customer/list/", views.CustomerListView.as_view(), name="customer-list"),
    path("customer/create/", views.CustomerAdd.as_view(), name="customer-add"),
    path("customer/update/<int:pk>/", views.CustomerUpdateView.as_view(), name="customer-update"),
    path("customer/delete/<int:pk>/", views.CustomerDeleteView.as_view(), name="customer-delete"),
    path("customer/soft_delete/<int:pk>/", views.CustomerSoftDeleteView.as_view(), name="customer-soft-delete"),

    path('order/create/', views.OrderAdd.as_view(), name='order-create'),
    path('order/list/', views.OrderListView.as_view(), name='order-list'),
    path('order/view/<int:pk>/', views.OrderDetailView.as_view(), name='order-view'),

    path('orderdetails/create/', views.OrderDetailsAdd.as_view(), name='orderdetails-add'),
    path('orderdetails/list/', views.OrderDetailsListView.as_view(), name='orderdetails-list'),

    path('invoice/create/', views.InvoiceCreate.as_view(), name='invoice-create'),
    path('invoice/list/', views.InvoiceListView.as_view(), name='invoice-list'),

    path('ordertracking/create/', views.OrderTrackingCreate.as_view(), name='ordertracking-add'),
    path('ordertracking/list/', views.OrderTrackingListView.as_view(), name='ordertracking-list'),
    path('ordertracking/update/<int:pk>/', views.OrderTrackingUpdateView.as_view(), name='ordertracking-update'),

    path("supplier/list/", views.SupplierListView.as_view(), name="supplier-list"),
    path("supplier/create/", views.SupplierAdd.as_view(), name="supplier-add"),
    path("supplier/update/<int:pk>/", views.SupplierUpdateView.as_view(), name="supplier-update"),
    path("supplier/delete/<int:pk>/", views.SupplierDeleteView.as_view(), name="supplier-delete"),
    path("supplier/soft_delete/<int:pk>/", views.SupplierSoftDeleteView.as_view(), name="supplier-soft-delete"),

    path("employee/list/", views.EmployeeListView.as_view(), name="employee-list"),
    path("employee/create/", views.EmployeeAdd.as_view(), name="employee-add"),
    path("employee/update/<int:pk>/", views.EmployeeUpdateView.as_view(), name="employee-update"),
    path("employee/delete/<int:pk>/", views.EmployeeDeleteView.as_view(), name="employee-delete"),
    path("employee/soft_delete/<int:pk>/", views.EmployeeSoftDeleteView.as_view(), name="employee-soft-delete"),

    path("stockin/create/", views.InboundStockCreateView.as_view(), name="stockin-create"),
    path("stockin/list/", views.InboundStockListView.as_view(), name="stockin-list"), 
]
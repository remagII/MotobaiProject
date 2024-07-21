from django.urls import path
from . import views

urlpatterns = [
    path("product/create", views.ProductCreate.as_view(), name="product-create"),
    path("product/list", views.ProductListView.as_view(), name="product-list"),
    path("product/update/<int:pk>", views.ProductUpdateView.as_view(), name="product-update"),
    path("product/delete/<int:pk>", views.ProductDeleteView.as_view(), name="product-delete"),

    path("inventory/list", views.InventoryListView.as_view(), name="inventory-list"),
    path("inventory/create", views.InventoryAdd.as_view(), name="inventory-add"),

    path("company/list", views.CompanyListView.as_view(), name="company-list"),
    path("company/create", views.CompanyAdd.as_view(), name="company-add"),
    path("company/update/<int:pk>", views.CompanyUpdateView.as_view(), name="company-update"),
    path("company/delete/<int:pk>", views.CompanyDeleteView.as_view(), name="company-delete"),

    path('order/create', views.OrderAdd.as_view(), name='order-create'),
    path('order/list', views.OrderListView.as_view(), name='order-list'),

    path('orderdetails/create', views.OrderDetailsAdd.as_view(), name='orderdetails-add'),
    path('orderdetails/list', views.OrderDetailsListView.as_view(), name='orderdetails-list'),

    path('ordertracking/create', views.OrderTrackingCreate.as_view(), name='ordertracking-add'),
    path('ordertracking/list', views.OrderTrackingListView.as_view(), name='ordertracking-list'),
]
# Generated by Django 5.0.6 on 2024-11-17 07:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_inboundstock_reference_number_inventory_sku_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='ordertracking',
            name='last_updated',
            field=models.DateTimeField(auto_now=True),
        ),
    ]

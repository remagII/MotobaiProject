# Generated by Django 5.0.6 on 2024-12-02 11:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0033_orderdetails_sku'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderdetails',
            name='sku',
            field=models.CharField(max_length=64),
        ),
    ]

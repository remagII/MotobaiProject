# Generated by Django 5.0.6 on 2024-12-02 12:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0038_alter_inventory_sku'),
    ]

    operations = [
        migrations.AlterField(
            model_name='inventory',
            name='sku',
            field=models.CharField(blank=True, max_length=64, null=True, unique=True),
        ),
    ]

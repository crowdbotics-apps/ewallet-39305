# Generated by Django 2.2.28 on 2023-05-28 19:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_mybalance'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='mybalance',
            name='name',
        ),
        migrations.AddField(
            model_name='mybalance',
            name='bnb',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='mybalance',
            name='btc',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='mybalance',
            name='eth',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='mybalance',
            name='usdc',
            field=models.FloatField(blank=True, null=True),
        ),
    ]

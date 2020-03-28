# Generated by Django 3.0.4 on 2020-03-26 18:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django_countries.fields
import phone_field.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0011_update_proxy_permissions'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=150)),
                ('phone_number', phone_field.models.PhoneField(max_length=31)),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('role', models.CharField(max_length=30)),
                ('is_staff', models.BooleanField(default=False)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Community',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=128)),
                ('purpose', models.CharField(choices=[('C', 'Caregiving'), ('E', 'Eldercare & Long Term care'), ('M', 'Military & Veterans Families'), ('V', 'Volunteering'), ('P', 'Parenting'), ('S', 'Schools'), ('R', 'Religious Groups')], default='C', max_length=128)),
                ('is_closed', models.BooleanField(default=False)),
                ('description', models.CharField(default='', max_length=256)),
                ('zipcode', models.IntegerField(default=0)),
                ('country', django_countries.fields.CountryField(max_length=2)),
                ('coordinator', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]

from django.db import models


class Kurabeteminaika(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()

    def __str__(self):
        return self.title


class weapon_category(models.Model):
    category_id = models.SmallAutoField(primary_key=True)
    category_name = models.CharField(max_length = 50)

class sub_weapon(models.Model):
    sub_id = models.SmallAutoField(primary_key=True)
    sub_name = models.CharField(max_length = 50)

class special_weapon(models.Model):
    special_id = models.SmallAutoField(primary_key=True)
    special_name = models.CharField(max_length = 50)

class weapon_configuration(models.Model):
    weapon_id = models.SmallAutoField(primary_key = True)
    category = models.ForeignKey(weapon_category, on_delete = models.CASCADE)
    sub = models.ForeignKey(sub_weapon, on_delete = models.CASCADE)
    special = models.ForeignKey(special_weapon, on_delete = models.CASCADE)
    weapon_name = models.CharField(max_length = 50)
    range = models.IntegerField()
    damage = models.IntegerField()
    fire_rate = models.IntegerField()

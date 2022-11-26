from django.db import models
from django.utils import timezone

class Kurabeteminaika(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()

    def __str__(self):
        return self.title

class Weapon(models.Model):
    weapon_id = models.SmallAutoField(primary_key=True)
    weapon_name = models.CharField(max_length=30, help_text = '武器名')
    class Meta:
        db_table = 'weapon'

    def __str__(self):
        return  self.weapon_name

class Battle_mode(models.Model):
    battle_mode_id = models.SmallAutoField(primary_key=True)
    battle_mode_name = models.CharField(max_length=30, help_text = 'バトルモード')
    class Meta:
        db_table = 'battle_mode'

    def __str__(self):
        return self.battle_mode_name
'''
class MatchResultManager(models.Manager):
    def get_(self):
        
        match_count = self.get_queryset().filter(weapon = self.kwargs['weapon'], result = True).count()
        win_count = self.get_queryset().filter(result = True).count()
        
        return 
'''

class Match_result(models.Model):
    match_result_id = models.SmallAutoField(primary_key=True)
    weapon = models.ForeignKey(Weapon, on_delete = models.CASCADE)
    battle_mode = models.ForeignKey(Battle_mode, on_delete = models.CASCADE)
    date = models.DateTimeField(default=timezone.now)
    result = models.BooleanField(help_text = '勝利した場合はTrue')
    class Meta:
        db_table = 'match_result'

    def __str__(self):
        return f'{self.weapon} / {self.battle_mode} / {self.result}'




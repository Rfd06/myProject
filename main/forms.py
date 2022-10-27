from django import forms
from .models import Player
from .models import Team

class PlayerForm(forms.ModelForm):

  class Meta:
    model = Player
    fields = ('name','height','team','ppg')

class TeamsForm(forms.ModelForm):
    class Meta:
      model = Team
      fields = ('nameOfTeam','cityOfTeam','yearBorn')
from django.shortcuts import render
from .forms import PlayerForm
from .forms import TeamsForm
from .models import Player
from .models import Team

# Create your views here.
def homepage(request):
  if request.method == "POST":
    form = PlayerForm(request.POST)
    if form.is_valid():
      form.save()
  players = Player.objects.all()
  form = PlayerForm()
  return render(request, "home.html", {"form": form, "players":players})

def teamspage(request):
  if request.method == "POST":
    form = TeamsForm(request.POST)
    if form.is_valid():
      form.save()
  teams=Team.objects.all()
  form=TeamsForm()
  return render(request, "teams.html", {"form": form, "teams": teams})
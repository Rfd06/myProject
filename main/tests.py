#from django.test import TestCase

# Create your tests here.
from selenium.webdriver.common.by import By
from django.test import LiveServerTestCase
from selenium import webdriver
from selenium.webdriver.common.keys import Keys


# Create your tests here.
class PlayerFormTest(LiveServerTestCase):

  def testform(self):
    selenium = webdriver.Chrome()
    #Choose your url to visit
    selenium.get('http://127.0.0.1:8000/')
    #find the elements you need to submit form
    player_name = selenium.find_element(By.ID,'id_name')
    player_height = selenium.find_element(By.ID,'id_height')
    player_team = selenium.find_element(By.ID,'id_team')
    player_ppg = selenium.find_element(By.ID,'id_ppg')

    submit = selenium.find_element(By.ID,'submit_button')

    #populate the form with data
    player_name.send_keys('Lebron James')
    player_team.send_keys('Los Angeles Lakers')
    player_height.send_keys('6 feet 9 inches')
    player_ppg.send_keys('25.7')

    #submit form
    submit.send_keys(Keys.RETURN)

    #check result; page source looks at entire html document
    assert 'Lebron James' in selenium.page_source

class TeamFormTest(LiveServerTestCase):
  def testform(self):
    selenium = webdriver.Chrome()
    selenium.get('http://127.0.0.1:8000/Team')
    teamname = selenium.find_element(By.ID,'id_nameOfTeam')
    teamyear = selenium.find_element(By.ID,'id_yearBorn')
    teamcity = selenium.find_element(By.ID,'id_cityOfTeam')
    submit = selenium.find_element(By.ID,'submit_button')
    teamname.send_keys('someTeam')
    teamyear.send_keys('3030')
    teamcity.send_keys('SomeWhere')
    submit.send_keys(Keys.RETURN)
    assert 'someTeam' in selenium.page_source
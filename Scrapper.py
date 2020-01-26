#Dependencies: requests, urllib, bs4
from bs4 import BeautifulSoup
import csv

cities = {Minneapolis, Saint%20Paul, Saint%20Cloud, Rochester}

for city in cities:
	url = "https://www.homelessshelterdirectory.org/cgi-bin/id/city.cgi?city={}&state=MN".format(city)
	html = urlopen(url)
	soup = BeautifulSoup(html, "parser")
	title = soup.title
	titleText = title.get_text
	section = soup.find_all('section', class_='height: auto !important')
	
	for x in section:
		wrappers = x.find_all('div')
		for y in wrappers:
			rows = y.find_all('div')
			for z in rows:
				cols = z.find_all('div')
				for t in cols:
					name = t.find_all('div')
					for d in name:
						row2 = d.find_all('div')
						for g in row2:
							col2 = g.find_all('div')
							for k in col2:
								data = k.find_all('div')
									for i in data.find_all('div', class_='item_content'):
										ShelterName = i.find('h4').get_text()
										ShelterPhone = i.get_text()
										ShelterPhone = ShelterPhone[ShelterPhone.index('6'):ShelterPhone.index('"')]
  
  with open('names.csv', newline='') as csvfile:
     reader = csv.DictReader(csvfile)
     for row in reader:
         reader.writerow[ShelterName,ShelterPhone]
		

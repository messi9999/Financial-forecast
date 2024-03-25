import requests

url = "https://google-news-api1.p.rapidapi.com/search"

querystring = {"language":"English"}

headers = {
	"X-RapidAPI-Key": "948adc1e15msh9210f2ef813968dp1460b8jsnc10ebce67fba",
	"X-RapidAPI-Host": "google-news-api1.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())
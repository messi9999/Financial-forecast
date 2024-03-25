from serpapi import GoogleSearch

params = {
  "engine": "google_news",
  "q": "USD:JYP",
  "api_key": "f0bcd3101c0d3efebcb34ddf935e5905584dcdbd5ff951d60d338e440df10c86"
}

search = GoogleSearch(params)
results = search.get_dict()
news_results = results["news_results"]
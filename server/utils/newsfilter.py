import requests
from requests.exceptions import RequestException
from dotenv import load_dotenv
import os

# Load the .env file
load_dotenv()

API_KEY = os.getenv('NEWS_FILTER_API_KEY')

def getFinancialNews():
    try:
        sort = "asc"
        offset = 0
        limit = 50
        keywords = "USD/JPY, USD:JPY"
        fallback = "off"
        date = "yeartodate"
        sources = "fxstreet.com, dailyfx.com"
# sources={sources}&

        url = f"https://api.apilayer.com/financelayer/news?offset={offset}&limit={limit}&keywords={keywords}&fallback={fallback}&date={date}"

        payload = {}
        headers= {
        "apikey": API_KEY
        }

        response = requests.request("GET", url, headers=headers, data = payload)

        # Check if the request was successful
        response.raise_for_status()

        status_code = response.status_code
        result = response.text
        return {"newsData": result}

    except RequestException as e:
        # Handle the exception
        print(f"An error occurred: {e}")
        return {"newsData": e}
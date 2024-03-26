import requests
from requests.exceptions import RequestException
from dotenv import load_dotenv
import os
import currencyapicom

from datetime import date
from dateutil.relativedelta import relativedelta


# Load the .env file
load_dotenv()

# Get today's date
today = date.today()

# Get the date from 3 months ago
three_months_ago = today - relativedelta(months=3)

# Format the date
formatted_date_past = three_months_ago.strftime("%Y-%m-%d")

formatted_date_now = today.strftime("%Y-%m-%d")

print(formatted_date_past)
print(formatted_date_now)

API_KEY = os.getenv('NEWS_EXCHAGE_RATE_API_KEY')

client = currencyapicom.Client(api_key=API_KEY)
# result = client.currencies(currencies=['JPY'])
# result2 = client.range(formatted_date_past, formatted_date_now)

result = client.range('2021-11-30T23:59:59Z', '2021-12-30T23:59:59Z', 'day')
print(result)
# print(result2)
import requests
from bs4 import BeautifulSoup
import json


def currencyForecast():

    r = requests.get("https://coincodex.com/forex/usd-jpy/forecast/")
    r.content
    # Use the 'html.parser' to parse the page
    soup = BeautifulSoup(r.content, 'html.parser')

    # Find the table
    tables = soup.find_all('table', class_='styled-table full-size-table table-scrollable')

    # Find all table rows
    rows_yearly = tables[0].find_all('tr')

    # List to hold dictionaries (each dictionary represents a row)
    data_yearly = []

    # Iterate over rows
    for row in rows_yearly[1:]:  # Skip the header row
        # Find all cells in the row
        cells = row.find_all('td')

        # Create a dictionary with the data from the cells
        row_data = {
            'Year': cells[0].text.replace('\u202f', ''),
            'Yearly High': cells[1].text.replace('\u202f', ''),
            'Yearly Low': cells[2].text.replace('\u202f', '')
        }

        # Add the dictionary to the list
        data_yearly.append(row_data)
    # Convert the list to JSON
    json_data_yearly = json.dumps(data_yearly)


    data_daily = []
    rows_daily = tables[1].find_all('tr')
    # Iterate over rows
    for row in rows_daily[1:]:  # Skip the header row
        # Find all cells in the row
        cells = row.find_all('td')

        # Create a dictionary with the data from the cells
        row_data = {
            'Date': cells[0].text.replace('\u202f', ''),
            'Daily High': cells[1].text.replace('\u202f', ''),
            'Daily Low': cells[2].text.replace('\u202f', '')
        }

        # Add the dictionary to the list
        data_daily.append(row_data)
    # Convert the list to JSON
    json_data_daily = json.dumps(data_daily)

    return {
        "Daily": json_data_daily,
        "Yearly": json_data_yearly
    }

    
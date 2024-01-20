import requests

url = 'http://localhost:9000/'
files = {'file': open('./input.txt', 'r').read()}
response = requests.post(url, data=files)
print(response.content)

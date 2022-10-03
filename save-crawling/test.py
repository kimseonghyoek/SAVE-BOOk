import json

with open('./BestSeller.json', 'rt', encoding='utf-8') as f:
    json_data = json.load(f)
print(json.dumps(json_data) )
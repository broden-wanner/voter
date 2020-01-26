"""
import json
data = json.load('precincts.json')
print(data)
"""

import json
from pprint import pprint

# Considering "json_list.json" is a json file

with open('precincts.json') as fd:
     json_data = json.load(fd)
     for precinct in json_data:
         candidates = precinct["candidates"]
         string = str(candidates)
         precinct["candidates"] = string
     
     pprint(json_data)
     with open('flat_precincts.json', 'w') as fp:
        json.dump(json_data, fp, indent=4)


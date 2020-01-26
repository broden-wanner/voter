import pandas

df = pandas.read_json("flat_precincts.json")
df.to_csv("precincts.csv")

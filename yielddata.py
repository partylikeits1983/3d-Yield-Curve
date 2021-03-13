import matplotlib.pyplot as plt
import pandas as pd
import quandl
import quandl as ql
import json

df = ql.get("USTREASURY/YIELD")

df = df.to_json(r'/home/ubuntu/Desktop/yield.json', orient="values")

import numpy as np
print('asdasd')
import quandl
import pandas as pd
quandl.ApiConfig.api_key = "zeWk4bcH_4nuJg-91FH8"
d = quandl.get('WIKI/GOOGL')

print(d.head())


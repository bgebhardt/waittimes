import pandas as pd
import numpy as np
import matplotlib as mpl
import matplotlib.pyplot as plt

from pandas.io.parsers import read_csv

# save a ride graph
def saveGraph(rideName, rideData):
    dates = rideData.date_time.values
    waits = rideData.wait_time.values

    plt.plot(dates, waits)
    plt.xlabel('Date')
    plt.ylabel('Wait Time')
    plt.title(rideName)

    # plt.show()

    filePath = 'figures/' + rideName + '.png'
    plt.savefig(filePath)

    return



df = read_csv("../disney_out/07-18-2016/2016-07-18.csv")

print ("Dataframe", df)
print ("Shape", df.shape)
print ("Length", len(df))
print ("Column Headers", df.columns)
print ("Data types", df.dtypes)
print ("Index", df.index)
print ("Values", df.values)

# convert the date_time column to a date object
df['date_time'] = pd.to_datetime(df['date_time'], format = '%a %b %d %Y %X GMT-0700 (PDT)')



rid_group = df.groupby('ride_name')

i=0;
for name, group in rid_group:
    i = i+1
    print("Group", i, name)
    #Aprint(group)
    saveGraph(name, group)

# ride_name = 'Hyperspace Mountain'
# gr = rid_group.get_group(ride_name)
# saveGraph(ride_name, gr)




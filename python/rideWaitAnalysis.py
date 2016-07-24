#!/usr/bin/env python

import sys
import os

import pandas as pd
import numpy as np
import matplotlib as mpl
import matplotlib.pyplot as plt

from pandas.io.parsers import read_csv

# save a ride graph
def saveGraph(themePark, rideName, rideData, dateStamp, outFileDir):
    dates = rideData.date_time.values
    waits = rideData.wait_time.values

    plt.plot(dates, waits)
    plt.xlabel('Date')
    plt.ylabel('Wait Time')

    # catch a non-UTF-8 ride name
    theTitle = themePark.decode('utf8') + " - " + rideName.decode('utf8') + " on " + dateStamp
    plt.title(theTitle)

    # plt.show()

    filePath = outFileDir + themePark + "-" + rideName + "--" + dateStamp + '.png'
    plt.savefig(filePath)

    plt.clf()
    return

# read in command line parameter
# Make sure we have a single URL argument.
if len(sys.argv) != 2:
    print >> sys.stderr, "ERROR: csv file required"
    sys.exit(-1)

# Easier access.
inFilePath = sys.argv[1]

# this assumes you run in the directory; TODO: remove that assumption
filename, file_extension = os.path.splitext(inFilePath)
dateStamp = filename

#inFilePath = "../disney_out/" + dateStamp + "/" + dateStamp + ".csv"
#dateStamp = '2016-07-18'

# TODO: mkdir the figures directory if not there
outFileDir = "figures/"

df = read_csv(inFilePath)

print ("Shape", df.shape)
print ("Length", len(df))
print ("Column Headers", df.columns)
print ("Data types", df.dtypes)
#print ("Dataframe", df)
#print ("Index", df.index)
#print ("Values", df.values)

# convert the date_time column to a date object
df['date_time'] = pd.to_datetime(df['date_time'], format = '%a %b %d %Y %X GMT-0700 (PDT)')

rid_group = df.groupby('ride_name')

i=0;
for name, group in rid_group:
    i = i+1
    print("Group", i, name)
    #Aprint(group)
    #
    park = group.park.values[1]
    saveGraph(park, name, group, dateStamp, outFileDir)

# ride_name = 'Hyperspace Mountain'
# gr = rid_group.get_group(ride_name)
# saveGraph(ride_name, gr)




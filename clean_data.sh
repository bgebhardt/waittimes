#!/usr/bin/env bash

# script to clean up and combine the data files collected with app.js
# pass in the date of the data you are combining (or the name you want of the final file)

#FILE="2016-07-18.csv"
FILE=$1
echo "## processing $FILE..."

# combine all the files
cat *.csv > $FILE.tmp1

# clean a few things
grep -v park $FILE.tmp1 > $FILE.tmp2  # removes header

# add a header
cat ../header $FILE.tmp2 > $FILE.csv

mkdir figures # for saving graphs later

echo "## $FILE processing complete"

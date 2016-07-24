#!/usr/bin/env bash

FILE="2016-07-18.csv"

# command to fix commas inplace with backup
# it still leaves an empty extra Goofy's sky school due to the <CR> in that item. :P
sed -i.bak -e 's/Monsters,/Monsters/g' -e 's/Fire Engine,/Fire Engine/g' -e 's/Streetcars,/Streetcars/g' -e 's/Carriage,/Carriage/g' -e 's/Omnibus,/Omnibus/g' -e 's/^,/California Adventure,Goofys Sky School,/g' *.csv

# move the back up files
mkdir bak
mv *.bak bak

# combine all the files
cat *.csv > $FILE.tmp1

# clean a few things
grep -v "California Adventure,Goofy's Sky School" $FILE.tmp1 > $FILE.tmp2 # remove bad goofy's sky school
grep -v park $FILE.tmp2 > $FILE.tmp3  # removes header

# add a header
cat ../header $FILE.tmp3 > $FILE

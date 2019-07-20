#!/usr/bin/env bash
# simple script you can put in crontab to grab wait times.

# create directory for day
mkdir -p /Users/bryan/code/personal/waittimes/disney_out/`date +%F`

# grab wait times
/usr/local/bin/node /Users/bryan/code/personal/waittimes/wait_times.js >/Users/bryan/code/personal/waittimes/disney_out/`date +%F`/`date +%F-%T`.csv 2>>/tmp/disney_stderr.log

# for debugging hanging node processes
#/usr/local/bin/why-is-node-running /Users/bryan/code/personal/waittimes/wait_times.js >/Users/bryan/code/personal/waittimes/disney_out/`date +%F`/`date +%F-%T`.csv 2>>/tmp/disney_stderr.log
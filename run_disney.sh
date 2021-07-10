#!/usr/bin/env bash
# simple script you can put in crontab to grab wait times.

# create directory for day
#mkdir -p /Users/bryan/code/personal/waittimes/disney_out/`date +%F`
mkdir -p /Volumes/Animal/Content/waittimes/disney_out/`date +%F`

# grab wait times - save to Animal external drive
# version for homebrew on M1 macs (should I use node in the PATH instead?)

# change timestamp to not have colons
# and moved to one drive folder
#date +"%Y-%m-%d--%H-%M-%S"
/opt/homebrew/bin/node /Users/bryan/code/personal/waittimes/wait_times.js >/Volumes/Kermit/Master/OneDrive/Disneyland/disney_out/$(date +%F)/$(date +"%Y-%m-%d--%H-%M-%S").csv 2>>/tmp/disney_stderr.log

#/Volumes/Kermit/Master/OneDrive/Disneyland/disney_out

/opt/homebrew/bin/node /Users/bryan/code/personal/waittimes/wait_times.js >/Volumes/Animal/Content/waittimes/disney_out/`date +%F`/`date +%F-%T`.csv 2>>/tmp/disney_stderr.log

#/usr/local/bin/node /Users/bryan/code/personal/waittimes/wait_times.js >/Volumes/Animal/Content/waittimes/disney_out/`date +%F`/`date +%F-%T`.csv 2>>/tmp/disney_stderr.log

# old local drive version
#/usr/local/bin/node /Users/bryan/code/personal/waittimes/wait_times.js >/Users/bryan/code/personal/waittimes/disney_out/`date +%F`/`date +%F-%T`.csv 2>>/tmp/disney_stderr.log

# for debugging hanging node processes
#/usr/local/bin/why-is-node-running /Users/bryan/code/personal/waittimes/wait_times.js >/Users/bryan/code/personal/waittimes/disney_out/`date +%F`/`date +%F-%T`.csv 2>>/tmp/disney_stderr.log
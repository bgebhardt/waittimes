#!/usr/bin/env bash
# simple script you can put in crontab to grab wait times.
/usr/local/bin/node /Users/bryan/code/personal/waittimes/app.js >/Users/bryan/Dropbox/waittimes/disney_out/`date +%F-%T`.csv 2>>/tmp/disney_stderr.log
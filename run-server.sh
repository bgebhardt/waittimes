#!/usr/bin/env bash

# Script that will run a local elasticsearch, logstash, and kibana
# Assumes you have run setup-mac.sh first
# Assumes my local set up todo: make it independent of that.

elasticsearch &
kibana &
logstash -f ~/code/personal/waittimes/logstash/logstash-config.config --verbose &

# now you can:
# Navigate to Kibana at http://localhost:5601/
# Log in as the built-in elastic user with the password changeme.
# see https://www.elastic.co/downloads/x-pack
# Log in with elastic:changeme (default user)
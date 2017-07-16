#!/usr/bin/env bash

# Script that will run a local ELK stack (elasticsearch, logstash, and kibana) to process wait times in disney_out
# Assumes you have run setup-mac.sh first

# Assumes you my are running in the root directory of the repo
elasticsearch &
kibana &
logstash -f `pwd`/logstash/logstash-config.config --verbose &

# now you can:
# Navigate to Kibana at http://localhost:5601/
# Log in as the built-in elastic user with the password changeme.
# see https://www.elastic.co/downloads/x-pack
# Log in with elastic:changeme (default user)
#!/usr/bin/env bash

# Script to set up your mac to run the waittimes scripts and elasticsearch/kibana set up.
# Assumes you have brew installed

brew install elasticsearch
brew install logstash
brew install kibana

# install a free basic license to elasticsearch.  Assumes license in the same directory as this script is run.
curl -XPUT -u elastic 'http://localhost:9200/_xpack/license' -H "Content-Type: application/json" -d @license.json
#curl -XPUT -u elastic 'http://localhost:9200/_xpack/license' -H "Content-Type: application/json" -d @bryan-gebhardt-8841b060-2be9-4cd9-a113-2d70498183d6-v5.json

# install the management plugin.
elasticsearch-plugin install x-pack
kibana-plugin install x-pack
logstash-plugin install x-pack

# now you can:
# Navigate to Kibana at http://localhost:5601/
# Log in as the built-in elastic user with the password changeme.
# see https://www.elastic.co/downloads/x-pack
# Log in with elastic:changeme (default user)

# TODO: set up users so you're not using elastic superuser everywhere

# Useful elastic doc links:
# [Introduction | X-Pack for the Elastic Stack [5.5] | Elastic](https://www.elastic.co/guide/en/x-pack/current/xpack-introduction.html)
# [Download X-Pack: Extend Elasticsearch and Kibana | Elastic](https://www.elastic.co/downloads/x-pack)
# [Built-in Roles | X-Pack for the Elastic Stack [5.5] | Elastic](https://www.elastic.co/guide/en/x-pack/current/built-in-roles.html)
# [Stopping Elasticsearch | Elasticsearch Reference [5.5] | Elastic](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/stopping-elasticsearch.html)
# [Updating Your License | X-Pack for the Elastic Stack [5.5] | Elastic](https://www.elastic.co/guide/en/x-pack/current/installing-license.html)
# [Logstash and Security | X-Pack for the Elastic Stack [5.5] | Elastic](https://www.elastic.co/guide/en/x-pack/current/logstash.html)
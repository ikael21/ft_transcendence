#!/bin/bash

set -e

npm install --frozen-lockfile

# frontend entrypoint
exec npm start $@


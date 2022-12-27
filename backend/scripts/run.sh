#!/bin/bash

set -e

yarn install

# backend entrypoint
exec yarn start $@

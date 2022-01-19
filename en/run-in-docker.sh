#!/bin/bash

docker build -t alesco .
docker run -it -p 4000:4000 alesco

#!/bin/bash
awk '!/NODE_ENV[=a-zA-Z]+/' .env > temp && mv temp .env
echo -e '\nNODE_ENV='$1 >> .env
awk '!/^$/' .env > temp && mv temp .env
#!/bin/bash

git add .
git commit -m "#addition"
git push

ssh -i ~/.ssh/id_rsa bruikey03@34.100.160.119 'cd /home/bruikey03/shaunslib && git pull && sudo systemctl reload nginx'

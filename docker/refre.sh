#!/bin/bash
docker compose down
git pull
docker build -t merijn-portfolio:V1 ~/docker/web
docker compose up -d
#!/bin/bash
docker compose down
git pull
docker build -t philander-portfolio:V1 ~/docker/ph
docker compose up -d
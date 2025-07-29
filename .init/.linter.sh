#!/bin/bash
cd /home/kavia/workspace/code-generation/m-go-de-oz-fan-encyclopedia-49087-49097/mago_de_oz_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


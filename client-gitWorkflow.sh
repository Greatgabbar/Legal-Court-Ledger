#!/bin/bash

echo "staging code"
git add .

echo "commiting changes"
git commit -m "$1"

echo "pushing changes from remote repo"
git push origin master
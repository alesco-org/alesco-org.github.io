#!/bin/bash
rm -rf _site
bundle exec jekyll build

git add _site/*
git commit -m "updating site"

# requires the git-subtree package
git subtree push -f --prefix _site origin master

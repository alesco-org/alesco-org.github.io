#!/bin/bash
rm -rf _site
bundle exec jekyll build

# fix bug in sitemap generation
for f in $(find . -name sitemap.xml); do
    sed -i "s/<loc>\//<loc>/" $f
done

git add _site/*
git commit -m "updating site"

# requires the git-subtree package
git subtree push --prefix _site origin master

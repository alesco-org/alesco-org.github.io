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
git push origin `git subtree split --prefix _site website-builder`:master --force

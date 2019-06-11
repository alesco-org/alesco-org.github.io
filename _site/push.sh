#!/bin/bash
rm -rf _site
bundle exec jekyll build

en_sitemap=$(cat _site/en/sitemap.xml | grep -v urlset | grep -v "<?xml")
sitemap=$(cat _site/sitemap.xml | grep -v "</urlset")

echo $sitemap > _site/sitemap.xml
echo $en_sitemap >> _site/sitemap.xml
echo "</urlset>" >> _site/sitemap.xml

#git add _site/*
#git commit -m "updating site"

# requires the git-subtree package
#git subtree push --prefix _site origin master

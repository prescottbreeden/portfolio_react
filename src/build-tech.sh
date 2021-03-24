#!/bin/bash

echo "/*prettier-ignore*/" > "./sass/base/_output-test.scss"
sed -i '$ a \$updated-tech:' ./sass/base/_output-test.scss

# create list of tech based on tlogo png files
file_names () {
  dir="./assets/img/tlogos"
  for f in "$dir"/*.png; do
    basename "$f" .png
    # basename "$f" .png | sed -i '$ a ' | sed -i ./sass/base/_output-test.scss
  done
}

file_names

# generate _functions.scss file
# generate hexagon.constants.ts file

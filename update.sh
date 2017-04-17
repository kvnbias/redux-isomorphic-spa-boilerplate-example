#!/bin/bash

yarn install
bower install

compass compile

webpack

echo 'Update complete! Type `webpack --watch` to start the development.';

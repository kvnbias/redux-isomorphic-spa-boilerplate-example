# Isomorphic Boilerplate

Boilerplate for isomorphic rendering using redux.
* Koa - used as server side renderer
* Restify - used as API server
* React & Redux for anything else

## Prerequisites
* NodeJSv7+ (Koa is used as the server side renderer)

## Get started
* `./update.sh`
* Copy `config.json.dist` to `config.json`
* Copy `api/config.json.dist` to `api/config.json`

## NOTES
I included some example implementations of redux state, thunk, saga and observable. Feel free to remove those.

## For front-end only development:
change history/createBrowserHistory tohistory/createHashHistory on line 4

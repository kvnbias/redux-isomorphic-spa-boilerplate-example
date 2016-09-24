# Isomorphic Boilerplate

Boilerplate for isomorphic rendering using redux, express &amp; loopback(API)

## Prerequisites
* Knowledge on react, flux, especially redux

## Get started
* npm install
* bower isntall
* compass compile
* grunt

For development :
* nodemon bin/www
* grunt dev


For front-end only development:
* make sure /src/client.jsx line 25 contains : syncHistoryWithStore(hashHistory, store);
* npm run csr

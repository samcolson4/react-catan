# react-catan
### A catan map generator
[![Build Status](https://www.travis-ci.com/samcolson4/react-catan.svg?branch=main)](https://www.travis-ci.com/samcolson4/react-catan)

![Catan board](https://i.imgur.com/Io889rm.png)


### Deployed [here](http://catan-map.surge.sh).

## Project goal
During lockdown (v3.0), my flatmate and I got deep into Settlers of Catan. This project's aim was to give a quick way of generating a completely random Catan board, whilst I learnt React.

This board does not comply with the 'alphebetised' ordering of probabilites per hex, but this may be added at a later date. Let's see how long the lockdown lasts. This creates some interesting boards, not all of which are usable, but are at least nice to look at.

## Technologies
This project is built in React, and styled with raw CSS (no bootstrap etc). All images used were created using [Procreate](https://procreate.art/ipad).

The logic was translated from Ruby (and tested in RSpec) from my ['Catan Generator'](https://github.com/samcolson4/catan-generator-v1) repo.

The app is deployed using [surge.sh](surge.sh).

## Local deployment
Clone this repo, then:

```
cd catan
yarn start
```

# Array to Object

[![Greenkeeper badge](https://badges.greenkeeper.io/lirantal/array-to-objecthash.svg)](https://greenkeeper.io/)

Converts an Array of objects to an Object hash

## Why?

It's useful when you have an array of objects which you wish to normalize into a single object that can be easily accessed using O(1) hash map.

## Installation

Bold people do:

```bash
yarn add array-to-objecthash
```

The rest can use the mundane:

```bash
npm install --save array-to-objecthash
```

## Usage

If you have the following array of objects:
```js
  const arr = [
    {
      key: 'key_one',
      value: 'some value one'
    },
    {
      key: 'key_two',
      value: 'some value two'
    }
  ]
```

You can convert it to an Object hash based on a key of your choosing in the top level object

```js
  const convertArrayToHash = require('array-to-objecthash')
  const obj = convertArrayToHash(arr, 'key')
```

The result is:

```js
{ 
  key_one: { key: 'key_one', value: 'some value one' },
  key_two: { key: 'key_two', value: 'some value two' }
}
```
  

## Tests

Project tests:

```bash
npm run test
```

Project linting:

```bash
npm run lint
```

## Coverage

```bash
npm run test:coverage
```

## Commit

The project uses the commitizen tool for standardizing changelog style commit
messages so you should follow it as so:

```bash
git add .           # add files to staging
npm run commit      # use the wizard for the commit message
```

'use strict'

const test = require('ava')
const convertArrayToHash = require('./index')

test('successfully converts simple array to object hash based on key field', t => {
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

  const obj = convertArrayToHash(arr, 'key')
  t.truthy(obj)
  t.is(typeof obj === 'object', true)
  t.is(obj.hasOwnProperty('key_one'), true)
  t.is(typeof obj.key_one === 'object', true)
})

test('successfully converts simple array to object hash based on id field', t => {
  const arr = [
    {
      id: 'aaaa1',
      key: 'key_one',
      value: 'some value one'
    },
    {
      id: 'aaaa2',
      key: 'key_two',
      value: 'some value two'
    }
  ]

  const obj = convertArrayToHash(arr, 'id')
  t.truthy(obj)
  t.is(typeof obj === 'object', true)
  t.is(obj.hasOwnProperty('aaaa1'), true)
  t.is(typeof obj.aaaa1 === 'object', true)
})

test('successfully converts simple array to object hash based on spaced string as key', t => {
  const arr = [
    {
      id: 'aaaa 1',
      key: 'key_one',
      value: 'some value one'
    },
    {
      id: 'aaaa 2',
      key: 'key_two',
      value: 'some value two'
    }
  ]

  const obj = convertArrayToHash(arr, 'id')
  t.truthy(obj)
  t.is(typeof obj === 'object', true)
  t.is(obj.hasOwnProperty('aaaa 1'), true)
  t.is(typeof obj['aaaa 1'] === 'object', true)
})

test('handle converting single objects to arrays ', t => {
  const origObj = {
    id: 'aaaa 1',
    key: 'key_one',
    value: 'some value one'
  }

  const obj = convertArrayToHash(origObj, 'id')
  t.truthy(obj)
  t.is(typeof obj === 'object', true)
  t.is(obj.hasOwnProperty('aaaa 1'), true)
  t.is(typeof obj['aaaa 1'] === 'object', true)
})

test('doesnt accept non string for keys ', t => {
  const origObj = {
    id: 'aaaa 1',
    key: 'key_one',
    value: 'some value one'
  }

  let obj
  obj = convertArrayToHash(origObj, ['something'])
  t.false(obj)

  obj = convertArrayToHash(origObj, [])
  t.false(obj)

  obj = convertArrayToHash(origObj, true)
  t.false(obj)

  obj = convertArrayToHash(origObj, 1)
  t.false(obj)

  obj = convertArrayToHash(origObj, {'some': 'thing'})
  t.false(obj)
})

test('doesnt accept conversion without keys', t => {
  const origObj = {
    id: 'aaaa 1',
    key: 'key_one',
    value: 'some value one'
  }

  let obj
  obj = convertArrayToHash(origObj)
  t.false(obj)
})


test('successfully converts array even for objects which keys dont exist', t => {
  const arr = [
    {
      key: 'key_one',
      value: 'some value one'
    },
    {
      id: 'key_two',
      value: 'some value two'
    }
  ]

  const obj = convertArrayToHash(arr, 'key')
  t.truthy(obj)
  t.is(typeof obj === 'object', true)
  t.is(obj.hasOwnProperty('key_one'), true)
  t.is(typeof obj.key_one === 'object', true)
})
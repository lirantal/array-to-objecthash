'use strict'

/**
 * converts an array of objects to hashed objects based on the key property of each object
 *
 *      const arr = [
 *        {
 *          key: 'key_one',
 *          value: 'some value one'
 *        },
 *        {
 *          key: 'key_two',
 *          value: 'some value two'
 *        }
 *      ]
 *
 *      const obj = convertArrayToHash(arr, 'key')
 *
 * @param {string} key the key to hash the object upon
 * @param {object|array} data array or object with a property `key` to map upon
 * @returns {object}
 */
module.exports = function convertArrayToHash (data, key) {
  let dataArray = data

  if (!key || typeof key !== 'string') {
    return false
  }

  if (!Array.isArray(dataArray)) {
    dataArray = Array(data)
  }

  let mappedObject
  mappedObject = dataArray.reduce((newObj, arrItem) => {

    const arrayItemKey = arrItem[key]
    if (arrayItemKey) {
      newObj[arrayItemKey] = arrItem
    }

    return newObj
  }, {})

  return mappedObject
}

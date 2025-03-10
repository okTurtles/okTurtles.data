import sbp from '@sbp/sbp'
import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import './index.js'

describe('[SBP] DATA domain', () => {
  it('should store simple value', () => {
    sbp('okTurtles.data/set', 'test', 1)
    assert.equal(sbp('okTurtles.data/get', 'test'), 1)
  })

  it('should reset value', () => {
    sbp('okTurtles.data/set', 'reset', 1)
    sbp('okTurtles.data/set', 'reset', 2)
    assert.equal(sbp('okTurtles.data/get', 'reset'), 2)
  })

  it('should add item to collection', () => {
    sbp('okTurtles.data/add', 'testCollection', 1)
    sbp('okTurtles.data/add', 'testCollection', 2)
    assert.deepEqual(sbp('okTurtles.data/get', 'testCollection'), [1, 2])
  })

  it('should return undefined for unset path', () => {
    assert.equal(sbp('okTurtles.data/get', 'testNothing'), undefined)
    sbp('okTurtles.data/delete', 'testCollection')
    assert.equal(sbp('okTurtles.data/get', 'testCollection'), undefined)
  })

  it('should add and remove fn from collection', (t) => {
    const testFn = t.mock.fn()
    sbp('okTurtles.data/add', 'fnTestCollection', 1)
    sbp('okTurtles.data/add', 'fnTestCollection', testFn)
    assert.equal(testFn.mock.callCount(), 0)
    sbp('okTurtles.data/get', 'fnTestCollection')[1]()
    assert.equal(testFn.mock.callCount(), 1)
    sbp('okTurtles.data/remove', 'fnTestCollection', testFn)
    assert.deepEqual(sbp('okTurtles.data/get', 'fnTestCollection'), [1])
  })

  it('should apply String fn to key "test"', () => {
    assert.equal(typeof sbp('okTurtles.data/apply', 'test', String), 'string')
    assert.equal(sbp('okTurtles.data/apply', 'test', String), '1')
  })
})

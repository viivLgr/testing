const { should, expect, assert } = require('chai')
const { add, mul, cover } = require('../src/math')

describe('#math', () => {
    describe('add', () => {
        // skip 跳过
        it('should return 5 when 2 + 3', () => {
            expect(add(2, 3)).to.equal(5)
        })
        // only 只执行
        it('should return -1 when 2 + -3', () => {
            expect(add(2, -3)).to.equal(-1)
        })
    })
    describe('mul', () => {
        it('should return 6 when 2 * 3', () => {
            expect(mul(2, 3)).to.equal(6)
        })
    })
    describe('cover', () => {
        it('should return 3 when 2,3', () => {
            expect(cover(2, 3)).to.equal(3)
        })
        it('should return 1 when 3,2', () => {
            expect(cover(3, 2)).to.equal(1)
        })
        it('should return 6 when 2,3', () => {
            expect(cover(3,3)).to.equal(6)
        })
    })
})
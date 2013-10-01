var own = require('../')
var should = require('should')

var test = Object.create({}, own.readonly({ foo: 'foo' }))

console.log(Object.getOwnPropertyDescriptor(test, 'foo'))

describe('own', function(){

    it('should create an enumerable and writable object', function(){
        own({ foo: 'foo' }).should.eql({
            foo: {
                value: 'foo',
                writable: true,
                enumerable: true,
                configurable: true
            }
        })
    })

    it('should return null for undefined', function(){
        should.equal(own(), undefined)
    })

    it('should return null for non-objects', function(){
        should.equal(own('blerg'), undefined)
    })

    it('should not throw on Object.create when undefined', function(){
        Object.create({}, own(undefined)).should.be.object
    })

    describe('readonly', function(){

        it('should create an enumerable object', function(){
            own.readonly({ foo: 'foo' }).should.eql({
                foo: {
                    value: 'foo',
                    writable: false,
                    enumerable: true,
                    configurable: false
                }
            })
        })

        it('should return null for undefined', function(){
            should.equal(own.readonly(), undefined)
        })

        it('should return null for non-objects', function(){
            should.equal(own.readonly('blerg'), undefined)
        })

        it('should not throw on Object.create when undefined', function(){
            Object.create({}, own.readonly(null)).should.be.object
        })

    })

})



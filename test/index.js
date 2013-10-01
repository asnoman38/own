var own = require('../')
var should = require('should')

describe('own', function(){

    it('should create an enumerable and writable object', function(){
        own({
            foo: 'bar'
        }).should.eql({
            foo: {
                value: 'bar',
                enumerable: true,
                writable: true
            }
        })
    })

    it('should return null for undefined', function(){
        should.equal(own(), null)
    })

    it('should return null for non-objects', function(){
        should.equal(own('blerg'), null)
    })

    describe('readonly', function(){

        it('should create an enumerable object', function(){
            own.readonly({
                foo: 'bar'
            }).should.eql({
                foo: {
                    value: 'bar',
                    enumerable: true,
                    writable: false
                }
            })
        })

        it('should return null for undefined', function(){
            should.equal(own.readonly(), null)
        })

        it('should return null for non-objects', function(){
            should.equal(own.readonly('blerg'), null)
        })

    })

})



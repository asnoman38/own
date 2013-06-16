var should = require('should'),
    own = require('../');

describe('own', function(){
    
    it('should create an own properties object', function(){
        own({
            foo: 'foo'
        }).should.eql({
            foo: {
                value: 'foo',
                enumerable: true
            }
        });
    });
    
});
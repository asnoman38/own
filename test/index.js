var should = require('should'),
    own = require('../');

describe('own', function(){
    
    it('should create an own properties object', function(){
        own({
            foo: 'bar'
        }).should.eql({
            foo: {
                value: 'bar',
                enumerable: true
            }
        });
    });
    
});
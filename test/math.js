//comment for jenkins test
import { subtract, add, isInteger } from '../math.js';
import assert from 'assert';
describe('rest', function(){
    it('retorna 1', function() {
        assert.equal(subtract(3,2),1);
    })
});
describe('add', function() {
    it('suma 4', function() {
        assert.equal(add(2,2),4);
    })
});
describe('es numero', function() {
    it('es numero', function() {
        assert.equal(isInteger('f'), false);
    })
})
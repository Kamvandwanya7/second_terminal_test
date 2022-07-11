import assert from "assert";
import isFromBellvile from "../isFromBellvile.js";

describe('test my isFromBellvile function', function () {
    it('it should return "true" when registration number starts with CY', function () {
        assert.equal(true, isFromBellvile("CY 26478"));
    });
    it('it should return "false" when registration number starts with CX', function () {
        assert.equal(false, isFromBellvile("CX 123456"));
    });
    
    it('it should return "false" when registration number starts with CV', function () {
        assert.equal(false, isFromBellvile("CV 453628"));

});
});
import assert from "assert";
import countAllPaarl from "../countAllPaarl.js";


describe('test my function countAllPaarl', function () {
    it('it should return 1 when there is 1 registration number from paarl in a string', function (){
        assert.equal(1, countAllPaarl("CL 124,CY 567,CL 345, CJ 456,CL 341, CL"));
    });
    it('it should return 0 when there is no registration number from paarl in a string', function(){
        assert.equal(0, countAllPaarl("CH 4673, WEG7579"));
    });
    it('it should return 3 when there are 3 registration numbers from paarl in a string', function(){
        assert.equal(3, countAllPaarl("CJ 4673, CJ G7579, CJ 564"));
    });
});
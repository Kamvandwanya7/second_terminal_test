import assert from "assert";
import transportFee from "../transportFee.js"

describe('test my function transportFee', function(){
    it('it should return "R20" when "morning" is inserted', function(){
        assert.equal("R20", transportFee("morning"))
    });
    it('it should return "R10" when "afternoon" is inserted', function(){
        assert.equal("R10", transportFee("afternoon"))
    });
    it('it should return "free" when "nightshift" is inserted', function(){
        assert.equal("free", transportFee("nightshift"))
    });
    });
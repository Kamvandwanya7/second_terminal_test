import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js"

describe('test my function totalPhoneBill', function(){
    it('it should return "R6.15" when called with "call, call, sms"', function(){
        assert.equal("R6.15", totalPhoneBill("call, call, sms"))
    })
    it('it should return "R3.40" when called with "call, sms"', function(){
        assert.equal("R3.40", totalPhoneBill("call, sms"))
    })
    it('it should return "R0.65" when called with "sms"', function(){
        assert.equal("R0.65", totalPhoneBill("sms"))
    })
})
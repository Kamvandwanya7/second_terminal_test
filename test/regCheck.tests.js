import assert from "assert";
import regCheck from "../regCheck.js";



describe('test my regCheck function', function () {
    it('it should return "true" when registration number ends with location', function () {
        assert.equal(true, regCheck("RG45 HN GP", "GP"));
    });
    it('it should return "true" when registration number ends with location', function () {
        assert.equal(true, regCheck("FGT 491 L", "L"));
    });
    // it('it should return "true" when registration number ends with location', function () {
    //     assert.equal(true, regCheck("FGT 491 L", "EC"));
    // });
    it('it should return "false" when registration number does not end with location', function () {
        assert.equal(false, regCheck("ND 123-456", "L"));
    });

    it('it should return "false" when registration number does not end with location', function () {
        assert.equal(false, regCheck("CY 678-453", "GP"));
    });

});
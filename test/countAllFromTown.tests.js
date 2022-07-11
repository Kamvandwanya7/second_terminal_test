import assert from "assert"
import countAllFromTown from "../countAllFromTown.js";

describe('test my function countAllFromTown', function () {
    it('it should return 1 when called with ("CJ 124,CY 567,CL 345, CF 456, CL 341","CF")', function () {
        assert.equal(1, countAllFromTown("CJ 124,CY 567,CL 345, CF 456, CL 341", "CF"));
    })
    it('it should return 0 when called with ("CL 124,CY 567,CL 345, CJ 456,CL 341","CF")', function () {
        assert.equal(0, countAllFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341", "CF"));
    });
    it('it should return 2 when called with ("CF 124,CY 567,CF 345, CJ 456,CL 341","CF")', function () {
        assert.equal(2, countAllFromTown("CF 124,CY 567,CF 345, CJ 456,CL 341", "CF"));
    });
})
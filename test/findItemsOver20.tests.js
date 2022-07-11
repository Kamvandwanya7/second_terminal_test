import assert from "assert";
import findItemsOver20 from "../findItemsOver20.js"


describe('test my function findItemsOver20', function(){
    it("it should  return 2 items with quantity over 20" , function(){
        assert.deepEqual([{name : 'apples', qty : 40}, {name : 'apples', qty : 37}] ,findItemsOver20([{name : 'apples', qty : 40}, {name : 'pears', qty : 10}, {name : 'bananas', qty : 13}, {name : 'apples', qty : 37}]));
    });
    it("it should return no items", function(){
        assert.deepEqual( [],findItemsOver20([{name : 'apples', qty : 10}, {name : 'pears', qty : 11}, {name : 'bananas', qty : 13}, {name : 'apples', qty : 17}]));
    });
    it("it should return 1 item with quanity over 20", function(){
        assert.deepEqual([{name : 'apples', qty : 40}] ,findItemsOver20([{name : 'apples', qty : 40}, {name : 'pears', qty : 10}, {name : 'bananas', qty : 13}]));
    });
});
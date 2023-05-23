const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
let translator = new Translator();

suite("Unit Tests", () => {
    test("Translate Mangoes are my favorite fruit. to British English", function (done) {
        assert.equal(
            translator.translate("Mangoes are my favorite fruit."),
            "Mangoes are my favourite fruit."
        );
        done();
    });

    test("Translate No Mr. Bond, I expect you to die. to British English", function (done) {
        assert.equal(
            translator.translate("No Mr. Bond, I expect you to die."),
            "No Mr Bond, I expect you to die."
        );
        done();
    });
});

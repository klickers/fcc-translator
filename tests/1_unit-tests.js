const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
let translator = new Translator();

suite("Unit Tests", () => {
    test("Translate Mangoes are my favorite fruit. to British English", function (done) {
        assert.equal(
            translator.translateToBritish("Mangoes are my favorite fruit."),
            "Mangoes are my favourite fruit."
        );
        done();
    });

    test("Translate I ate yogurt for breakfast. to British English", function (done) {
        assert.equal(
            translator.translateToBritish("I ate yogurt for breakfast."),
            "I ate yoghurt for breakfast."
        );
        done();
    });

    test("Translate No Mr. Bond, I expect you to die. to British English", function (done) {
        assert.equal(
            translator.translateToBritish("No Mr. Bond, I expect you to die."),
            "No Mr Bond, I expect you to die."
        );
        done();
    });
});

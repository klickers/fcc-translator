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

    test("Translate We had a party at my friend's condo. to British English", function (done) {
        assert.equal(
            translator.translateToBritish(
                "We had a party at my friend's condo."
            ),
            "We had a party at my friend's flat."
        );
        done();
    });

    test("Translate Can you toss this in the trashcan for me? to British English", function (done) {
        assert.equal(
            translator.translateToBritish(
                "Can you toss this in the trashcan for me?"
            ),
            "Can you toss this in the bin for me?"
        );
        done();
    });

    test("Translate The parking lot was full. to British English", function (done) {
        assert.equal(
            translator.translateToBritish("The parking lot was full."),
            "The car park was full."
        );
        done();
    });

    test("Translate Like a high tech Rube Goldberg machine. to British English", function (done) {
        assert.equal(
            translator.translateToBritish(
                "Like a high tech Rube Goldberg machine."
            ),
            "Like a high tech Heath Robinson device."
        );
        done();
    });

    test("Translate To play hooky means to skip class or work. to British English", function (done) {
        assert.equal(
            translator.translateToBritish(
                "To play hooky means to skip class or work."
            ),
            "To bunk off means to skip class or work."
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

    test("Translate Dr. Grosh will see you now. to British English", function (done) {
        assert.equal(
            translator.translateToBritish("Dr. Grosh will see you now."),
            "Dr Grosh will see you now."
        );
        done();
    });
});

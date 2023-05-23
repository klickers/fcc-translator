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

    test("Translate Lunch is at 12:15 today. to British English", function (done) {
        assert.equal(
            translator.translateToBritish("Lunch is at 12:15 today."),
            "Lunch is at 12.15 today."
        );
        done();
    });

    test("Translate We watched the footie match for a while. to American English", function (done) {
        assert.equal(
            translator.translateToAmerican(
                "We watched the footie match for a while."
            ),
            "We watched the soccer match for a while."
        );
        done();
    });

    test("Translate Paracetamol takes up to an hour to work. to American English", function (done) {
        assert.equal(
            translator.translateToAmerican(
                "Paracetamol takes up to an hour to work."
            ),
            "Tylenol takes up to an hour to work."
        );
        done();
    });

    test("Translate First, caramelise the onions. to American English", function (done) {
        assert.equal(
            translator.translateToAmerican("First, caramelise the onions."),
            "First, caramelize the onions."
        );
        done();
    });

    test("Translate I spent the bank holiday at the funfair. to American English", function (done) {
        assert.equal(
            translator.translateToAmerican(
                "I spent the bank holiday at the funfair."
            ),
            "I spent the public holiday at the carnival."
        );
        done();
    });

    test("Translate I had a bicky then went to the chippy. to American English", function (done) {
        assert.equal(
            translator.translateToAmerican(
                "I had a bicky then went to the chippy."
            ),
            "I had a cookie then went to the fish-and-chip shop."
        );
        done();
    });

    test("Translate I've just got bits and bobs in my bum bag. to American English", function (done) {
        assert.equal(
            translator.translateToAmerican(
                "I've just got bits and bobs in my bum bag."
            ),
            "I've just got odds and ends in my fanny pack."
        );
        done();
    });

    test("Translate The car boot sale at Boxted Airfield was called off. to American English", function (done) {
        assert.equal(
            translator.translateToAmerican(
                "The car boot sale at Boxted Airfield was called off."
            ),
            "The swap meet at Boxted Airfield was called off."
        );
        done();
    });

    test("Translate Have you met Mrs Kalyani? to American English", function (done) {
        assert.equal(
            translator.translateToAmerican("Have you met Mrs Kalyani?"),
            "Have you met Mrs. Kalyani?"
        );
        done();
    });

    test("Translate Prof Joyner of King's College, London. to American English", function (done) {
        assert.equal(
            translator.translateToAmerican(
                "Prof Joyner of King's College, London."
            ),
            "Prof. Joyner of King's College, London."
        );
        done();
    });

    test("Translate Tea time is usually around 4 or 4.30. to American English", function (done) {
        assert.equal(
            translator.translateToAmerican(
                "Tea time is usually around 4 or 4.30."
            ),
            "Tea time is usually around 4 or 4:30."
        );
        done();
    });

    //test("Highlight translation in Mangoes are my favorite fruit.");
});

const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

let Translator = require("../components/translator.js");
let translator = new Translator();

suite("Functional Tests", () => {
    let url = "/api/translate";

    test("Translation with text and locale fields: POST request to /api/translate", function (done) {
        chai.request(server)
            .post(url)
            .send({
                text: "Mangoes are my favorite fruit.",
                locale: "american-to-british",
            })
            .end(function (err, res) {
                assert.equal(res.status, 200);
                assert.isObject(res.body);
                assert.property(res.body, "text");
                assert.property(res.body, "translation");
                done();
            });
    });

    test("Translation with text and invalid locale field: POST request to /api/translate", function (done) {
        chai.request(server)
            .post(url)
            .send({
                text: "Mangoes are my favorite fruit.",
                locale: "american-to",
            })
            .end(function (err, res) {
                assert.isObject(res.body);
                assert.equal(res.body.error, "Invalid value for locale field");
                done();
            });
    });

    test("Translation with missing text field: POST request to /api/translate", function (done) {
        chai.request(server)
            .post(url)
            .send({
                locale: "american-to-british",
            })
            .end(function (err, res) {
                assert.isObject(res.body);
                assert.equal(res.body.error, "Required field(s) missing");
                done();
            });
    });

    test("Translation with missing locale field: POST request to /api/translate", function (done) {
        chai.request(server)
            .post(url)
            .send({
                text: "Mangoes are my favorite fruit.",
            })
            .end(function (err, res) {
                assert.isObject(res.body);
                assert.equal(res.body.error, "Required field(s) missing");
                done();
            });
    });

    test("Translation with empty text: POST request to /api/translate", function (done) {
        chai.request(server)
            .post(url)
            .send({
                text: "",
            })
            .end(function (err, res) {
                assert.isObject(res.body);
                assert.equal(res.body.error, "No text to translate");
                done();
            });
    });

    test("Translation with text and locale fields: POST request to /api/translate", function (done) {
        chai.request(server)
            .post(url)
            .send({
                text: "Mangoes are my favourite fruit.",
                locale: "american-to-british",
            })
            .end(function (err, res) {
                assert.equal(res.status, 200);
                assert.isObject(res.body);
                assert.property(res.body, "text");
                assert.property(res.body, "translation");
                assert.equal(
                    res.body.translation,
                    "Everything looks good to me!"
                );
                done();
            });
    });
});

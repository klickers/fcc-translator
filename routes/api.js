"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
    const translator = new Translator();

    app.route("/api/translate").post((req, res) => {
        const { text, locale } = req.body;
        const AMTOBRIT = "american-to-british",
            BRITTOAM = "british-to-american";

        if (text === "") res.send({ error: "No text to translate" });
        else if (locale && locale != AMTOBRIT && locale != BRITTOAM)
            res.send({ error: "Invalid value for locale field" });
        else if (!locale || !text)
            res.send({ error: "Required field(s) missing" });

        let translation = "";
        locale == AMTOBRIT
            ? (translation = translator.translateToBritish(text))
            : (translation = translator.translateToAmerican(text));

        translation =
            translation == text ? "Everything looks good to me!" : translation;

        res.status(200).json({ text, translation });
    });
};

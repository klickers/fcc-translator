const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
    translate(text) {
        text = this.amToBritSpelling(text);
        return text;
    }

    amToBritSpelling(text) {
        let str = text.split(" ");
        for (let i = 0; i < str.length; i++) {
            let spelling = americanToBritishSpelling[str[i].toLowerCase()];
            if (spelling) {
                if (str[i] != str[i].toLowerCase())
                    str[i] =
                        spelling.charAt(0).toUpperCase() + spelling.slice(1);
                else str[i] = spelling;
            }
        }
        return str.join(" ");
    }
}

module.exports = Translator;

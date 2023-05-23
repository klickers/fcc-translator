const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
    translateToBritish(text) {
        if (text.includes(".")) text = this.amToBritTitles(text);
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

    amToBritTitles(text) {
        let str = text.split(" ");
        for (let i = 0; i < str.length; i++) {
            let title = americanToBritishTitles[str[i].toLowerCase()];
            if (title) str[i] = title.charAt(0).toUpperCase() + title.slice(1);
        }
        return str.join(" ");
    }
}

module.exports = Translator;

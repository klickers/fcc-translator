const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
    translateToAmerican(text) {
        if (/[\d]+.[\d]+/.test(text)) text = this.translateTime(text);
        text = this.britToAm(text);
        return text;
    }

    translateToBritish(text) {
        if (/[\d]+:[\d]+/.test(text)) text = this.translateTime(text);
        text = this.amToBrit(text);
        return text;
    }

    replaceWordInText(text, oldWord, newWord) {
        if (!text.includes(oldWord))
            text = text.replace(
                oldWord.charAt(0).toUpperCase() + oldWord.slice(1),
                newWord.charAt(0).toUpperCase() + newWord.slice(1)
            );
        else text = text.replace(oldWord, newWord);
        return text;
    }

    keySearch(obj, lowercaseText, text) {
        for (const [key, value] of Object.entries(obj))
            if (
                lowercaseText.includes(key) &&
                /[^a-zA-Z0-9]/.test(
                    lowercaseText.charAt(lowercaseText.search(key) + key.length)
                )
            )
                text = this.replaceWordInText(text, key, value);
        return text;
    }

    valueSearch(obj, lowercaseText, text) {
        for (const [key, value] of Object.entries(obj))
            if (
                lowercaseText.includes(value) &&
                /[^a-zA-Z0-9]/.test(
                    lowercaseText.charAt(
                        lowercaseText.search(value) + value.length
                    )
                )
            )
                text = this.replaceWordInText(text, value, key);
        return text;
    }

    amToBrit(text) {
        let lowercaseText = text.toLowerCase();

        // american only
        for (const [key, value] of Object.entries(americanOnly)) {
            if (
                lowercaseText.includes(key) &&
                /[^a-zA-Z0-9]/.test(
                    lowercaseText.charAt(lowercaseText.search(key) + key.length)
                )
            ) {
                if (key.includes("rube goldberg"))
                    text = text.replace(
                        text.substring(
                            lowercaseText.search(key),
                            lowercaseText.search(key) + key.length
                        ),
                        value
                    );
                else text = this.replaceWordInText(text, key, value);
            }
        }

        // spelling
        text = this.keySearch(americanToBritishSpelling, lowercaseText, text);
        text = this.keySearch(americanToBritishTitles, lowercaseText, text);

        return text;
    }

    britToAm(text) {
        let lowercaseText = text.toLowerCase();

        text = this.keySearch(britishOnly, lowercaseText, text);
        text = this.valueSearch(americanToBritishSpelling, lowercaseText, text);
        text = this.valueSearch(americanToBritishTitles, lowercaseText, text);

        return text;
    }

    translateTime(text, oldChar, newChar) {
        let oldTime = text.match(/[\d]+[:.][\d]+/)[0];
        let newTime = oldTime.replace(oldChar, newChar);
        return text.replace(oldTime, newTime);
    }
}

module.exports = Translator;

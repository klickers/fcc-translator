const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
    translateToBritish(text) {
        if (text.includes(".")) text = this.amToBritTitles(text);
        if (/[\d]+:[\d]+/.test(text)) text = this.amToBritTime(text);
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
        for (const [key, value] of Object.entries(americanToBritishSpelling))
            if (
                lowercaseText.includes(key) &&
                /[^a-zA-Z0-9]/.test(
                    lowercaseText.charAt(lowercaseText.search(key) + key.length)
                )
            )
                text = this.replaceWordInText(text, key, value);

        return text;
    }

    amToBritTime(text) {
        let americanTime = text.match(/[\d]+:[\d]+/)[0];
        let britishTime = americanTime.replace(":", ".");
        return text.replace(americanTime, britishTime);
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

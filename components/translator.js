const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
    translateToBritish(text) {
        if (text.includes(".")) text = this.amToBritTitles(text);
        text = this.amToBrit(text);
        return text;
    }

    replaceCapitalizedWord(oldWord, newWord) {
        if (oldWord != oldWord.toLowerCase())
            oldWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
        else oldWord = newWord;
        return oldWord;
    }

    amToBrit(text) {
        let str = text.split(" ");

        for (let i = 0; i < str.length; i++) {
            let hanging = "";
            if (str[i].match(/\W$/)) {
                hanging = str[i].match(/\W$/)[0];
                str[i] = str[i].substring(str[i], str[i].length - 1);
            }

            let word = americanOnly[str[i].toLowerCase()];
            let spelling = americanToBritishSpelling[str[i].toLowerCase()];
            if (word) str[i] = this.replaceCapitalizedWord(str[i], word);
            else if (spelling)
                str[i] = this.replaceCapitalizedWord(str[i], spelling);

            str[i] += hanging;
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

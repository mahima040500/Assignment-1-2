function splitStringIntoWords(str) {
    return str.split(" ").filter(word => word !== '');
    }
    const sentence = "you can do it.";
    console.log(splitStringIntoWords(sentence))
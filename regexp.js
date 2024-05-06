function isRegExp(value) {
    return value instanceof RegExp;
    }
    const value1 = /test/;
    const value2 = "fail or pass";
    console.log("Is value1 a RegExp?", isRegExp(value1));
    console.log("Is value2 a RegExp?", isRegExp(value2));
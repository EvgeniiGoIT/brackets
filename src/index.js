module.exports = function check(str, bracketsConfig) {
    // your solution
    if (str.length % 2 !== 0) {
        return false;
    }
    str = str.split("");
    let result = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (
                str[i] === bracketsConfig[j][1] &&
                bracketsConfig[j][0] === result[result.length - 1]
            ) {
                result.pop();
            } else if (
                str[i] === bracketsConfig[j][0] ||
                str[i] === bracketsConfig[j][1]
            ) {
                result.push(str[i]);
            }
        }
    }
    return result.length === 0;
};

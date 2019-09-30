const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let result='';
    for(let count = 0; count < expr.length; count = count + 10) {
        let daChar = expr.substr(count, 10);
        if (daChar === '**********') {
            result += ' ';
            continue;
        }
        let findChar='';
        for (let i = 0; i < daChar.length; i = i + 2) {
            let j = daChar[i]+daChar[i+1];
            if(j === '10'){
                findChar +='.'}
            if(j === '11'){
                findChar +='-'}
        }
        result += MORSE_TABLE[findChar];
    }
    return result;
}

module.exports = {
    decode
}
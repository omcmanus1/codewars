// Remove all vowels from string (both cases)
// Filter for each vowel
// Can also use str.replace() with regex

function disemvowel(str) {
    return str.split('')
        .filter(x => x != 'a' && x != 'A')
        .filter(x => x != 'e' && x != 'E')
        .filter(x => x != 'i' && x != 'I')
        .filter(x => x != 'o' && x != 'O')
        .filter(x => x != 'u' && x != 'U')
        .join('')

    //return str.replace(/[aeiou]/gi, '')
}

const str = "This website is for losers LOL!"
console.log(disemvowel(str))
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const str1Letters = countLetters(str1);
  const str2Letters = countLetters(str2);
  for (letter in str1Letters) {
    if (!str2Letters[letter]) {
      return false;
    }
    if (str1Letters[letter] !== str2Letters[letter]) {
      return false;
    }
  }
  return true;
}

function countLetters(str) {
  const letters = {};
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (!letters[letter]) {
      letters[letter] = 1;
    } else {
      letters[letter] += 1;
    }
  }
  return letters;
}

console.log("", "", isAnagram("", "")); // true
console.log("aaz", "zza", isAnagram("aaz", "zza")); // false
console.log("anagram", "nagaram", isAnagram("anagram", "nagaram")); // true
console.log("rat", "car", isAnagram("rat", "car")); // false
console.log("awesome", "awesom", isAnagram("awesome", "awesom")); // false
console.log("qwerty", "qeywrt", isAnagram("qwerty", "qeywrt")); // true
console.log("texttwisttime", "timetwisttext", isAnagram("texttwisttime", "timetwisttext")); // true

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

function betterIsAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const lookup = countLetters(str1);
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
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

console.log("", "", betterIsAnagram("", "")); // true
console.log("aaz", "zza", betterIsAnagram("aaz", "zza")); // false
console.log("anagram", "nagaram", betterIsAnagram("anagram", "nagaram")); // true
console.log("rat", "car", betterIsAnagram("rat", "car")); // false
console.log("awesome", "awesom", betterIsAnagram("awesome", "awesom")); // false
console.log("qwerty", "qeywrt", betterIsAnagram("qwerty", "qeywrt")); // true
console.log("texttwisttime", "timetwisttext", betterIsAnagram("texttwisttime", "timetwisttext")); // true

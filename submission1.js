const findSum = function (array) {
    var totalSum = 0;
    for (let i = 0; i < array.length; i++) {
        totalSum += array[i];
    }
    return(totalSum);
  };


  const findFrequency = function (array) {
    const frequencyMap = {};
    let maxElement = array[0];
    let maxCount = 1;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (frequencyMap[element]) {
            frequencyMap[element]++;
        } else {
            frequencyMap[element] = 1;
        }
        if (frequencyMap > maxCount) {
            maxElement = element;
            maxCount = frequencyMap[element];
        }
    }
    return maxElement;

    let minElement = array[0];
    let minCount = 1;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (frequencyMap[element]) {
            frequencyMap[element]++;
        } else {
            frequencyMap[element] = 1;
        }
        if (frequencyMap < minCount) {
            minElement = element;
            minCount = frequencyMap[element];
        }
    }
    return minElement;
  }
 


  const isPalindrome = function(str) {
    const arrayValues = string.split('');
    const reverseArrayValues = arrayValues.reverse('');
    if (string == reverseString) {
        return 'True';
    } else {
        return 'False';
    }
  };

  
  const largestPair = function (array) {
    let x = 0;
    let y = 0;
    let p = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < array.length; i++) {
        x = array[i];
        y = array[i + 1];
        if (x * y > p) {
            p = x * y;
        };
    };
    return p;
  };


  const removeParenth = function(str) {
    str.setText(str.getText().replaceAll(/\[.+?\]/, ""));
    return str
  };
  

  SCORES = {"a": 1, "c": 3, "b": 3, "e": 1, "d": 2, "g": 2, 
  "f": 4, "i": 1, "h": 4, "k": 5, "j": 8, "m": 3, 
  "l": 1, "o": 1, "n": 1, "q": 10, "p": 3, "s": 1, 
  "r": 1, "u": 1, "t": 1, "w": 4, "v": 4, "y": 4, 
  "x": 8, "z": 10}
  
  const scoreScrabble = function(str) {
    totalScore = 0;
    for (let i = 0; i < str.length; i++) {
        totalScore += str[i];
    }
    return totalScore
  };

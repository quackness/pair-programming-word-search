const wordSearch = (letters, word) => {
    if (letters.length === 0) {
      return false;
    }
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    const horizontalJoin = letters.map(ls => ls.join(''));
    // console.log(letters.length)
    for (let l of horizontalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
    for (let v of verticalJoin) {
      if (v.includes(word)) {
        return true;
      }
    }
    return false;
  };
  
  const transpose = function(matrix) {
    let results = [];
    for (let i = 0; i < matrix[0].length; i++) {
      results.push([]);
      for (let j = 0; j < matrix.length; j++) {
        results[i].push(matrix[j][i]);
      }
    }
    return results;
  };
  
  module.exports = wordSearch;
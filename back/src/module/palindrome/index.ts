const palindrome = (numInitial, numFinally) => {
  const listPalindrome = []
  for(let i = numInitial; i <= numFinally; i++) {
    if (String(i) === String(i).split('').reverse().join('')) {
      listPalindrome.push(i)
    }
  }
  
  return listPalindrome
}

export default palindrome
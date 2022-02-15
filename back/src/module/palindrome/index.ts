const palindrome = (str: string) => {
  return str === str.split('').reverse().join('')
}

export default palindrome
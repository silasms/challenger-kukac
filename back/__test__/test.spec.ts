import palindrome from "../src/module/palindrome"
import changedMoney from "../src/module/change-money"


describe("Testing modules", () => {
  test("Calcule change", () => {
    const testChangedMoney = changedMoney(245, 100)
    expect(testChangedMoney).toEqual({"100": "1", "10": "4", "1": "5"})
  })
  
  test("Test palindrome" , () => {
    const testPalindrome = palindrome(10, 100)
    expect(testPalindrome).toEqual([11, 22, 33, 44, 55, 66, 77, 88, 99])
  })

})
const inputElement = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultElement = document.getElementById('result');

function isPalindrome(str) {
  const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}

checkButton.addEventListener('click', function() {
  const inputValue = inputElement.value.trim();
  if (!inputValue) {
    alert('Please input a value');
    return;
  }
  
  const isPalin = isPalindrome(inputValue);
  resultElement.textContent = isPalin ? `${inputValue} is a palindrome` : `${inputValue} is not a palindrome`;
});

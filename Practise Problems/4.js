function checkLenght(password) {
  return password.length >= 8;
}

function checkUpper(password) {
  for (let i = 0; i < password.length; i++) {
    if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
      return true;
    }
  }
  return false;
}

function checkLower(password) {
  for (let i = 0; i < password.length; i++) {
    if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
      return true;
    }
  }
  return false;
}

function checkDigit(password) {
  const hasNumber = /\d/.test(password);
  return hasNumber;
}

function checkPassword(password) {
  if (
    checkLenght(password) &&
    checkLower(password) &&
    checkUpper(password) &&
    checkDigit(password)
  ) {
    // console.log(checkLenght());
    return true;
  }
  return false;
}

function main() {
  let password = "ai this 2is my assword ";
  console.log(checkPassword(password));
}

main();

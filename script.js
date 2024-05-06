const password = document.getElementById("pass");
const Cpass = document.getElementById("pass2");
const submit = document.getElementById("submit");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const num = document.getElementById("num");
const sp = document.getElementById("sp");
const minimum = document.getElementById("minimum");

let enabled = false;

function validation() {
  hasUpper = upperCase(password.value);
  hasLower = lowerCase(password.value);
  hasNumber = numbers(password.value);
  hasSpecialChar = spChar(password.value);
  hasSixChar = length(password.value);

  if (hasUpper) {
    if (hasLower) {
      if (hasNumber) {
        if (hasSpecialChar) {
          if (hasSixChar) {
            submit.disabled = false;
            submit.style.opacity = 1;
          } else {
            submit.disabled = true;
            submit.style.opacity = 0.5;
          }
        } else {
          submit.disabled = true;
          submit.style.opacity = 0.5;
        }
      } else {
        submit.disabled = true;
        submit.style.opacity = 0.5;
      }
    } else {
      submit.disabled = true;
      submit.style.opacity = 0.5;
    }
  } else {
    submit.disabled = true;
    submit.style.opacity = 0.5;
  }
}

function isMatching() {
  if (Cpass.value === password.value) {
    submit.disabled = false;
    submit.innerText = "SIGN UP!";
    submit.style.opacity = 1;
  } else {
    submit.innerText = "Both Passwords Must Match";
    submit.style.opacity = 0.5;
    submit.disabled = true;
  }
}

function upperCase(pass) {
  if (pass.match(/[A-Z]/g)) {
    upper.style.color = "green";
    return true;
  } else {
    upper.style.color = "red";
    return false;
  }
}

function lowerCase(pass) {
  if (pass.match(/[a-z]/g)) {
    lower.style.color = "green";
    return true;
  } else {
    lower.style.color = "red";
    return false;
  }
}

function numbers(pass) {
  if (pass.match(/[0-9]/g)) {
    num.style.color = "green";
    return true;
  } else {
    num.style.color = "red";
    return false;
  }
}

function spChar(pass) {
  if (pass.match(/[!\@\#\$\%\^\&\&\*\(\)?\.\<\,]/g)) {
    sp.style.color = "green";
    return true;
  } else {
    sp.style.color = "red";
    return false;
  }
}

function length(pass) {
  if (pass.length > 5) {
    minimum.style.color = "green";
    return true;
  } else {
    minimum.style.color = "red";
    return false;
  }
}

function validate() {
  showExclamationusername();
  showExclamationemail();
  showExclamationphone();
  showExclamationpassword();
  showExclamationconfirmpassword();
  if (isFormValid()) {
    storeData();
    clearForm();
  }
}

function isFormValid() {
  let icons = document.querySelectorAll(".fa-solid");
  for (let icon of icons) {
    if (icon.getAttribute("data") === "true") {
      return false;
    }
  }
  return true;
}

function storeData() {
  const userInput = document.getElementById("usernameid").value;
  const userEmail = document.getElementById("emailid").value;
  const userPhone = document.getElementById("phoneid").value;
  const userPassword = document.getElementById("passid").value;

  const userData = {
    username: userInput,
    email: userEmail,
    phone: userPhone,
    password: userPassword,
  };

  let storedData = JSON.parse(localStorage.getItem("formData")) || [];

  storedData.push(userData);

  localStorage.setItem("formData", JSON.stringify(storedData));

  console.log("Data stored in localStorage:", storedData);
}

function clearForm() {
  document.getElementById("usernameid").value = "";
  document.getElementById("emailid").value = "";
  document.getElementById("phoneid").value = "";
  document.getElementById("passid").value = "";
  document.getElementById("confirmpassid").value = "";
}

function showExclamationusername() {
  let userInput = document.getElementById("usernameid");
  let userinputphone = document.getElementById("phoneid");
  let userinputpassword = document.getElementById("passid");
  let userinputconfirmpassword = document.getElementById("confirmpassid");

  let icon = document.querySelector(".fa-solid");
  let container = document.querySelector(".anothercontainer");
  let message = document.querySelector(".usernamediv");
  let firstmessage = message.querySelector("span");

  let thirdmessage = document.querySelector(".phonediv");
  let fourthmessage = document.querySelector(".passwordiv");
  let fifthmessage = document.querySelector(".confirmpasswordiv");

  if (userInput.value.length < 4 || userInput.value.length > 8) {
    icon.setAttribute("data", "true");
    userInput.classList.add("usernameclass");
    container.classList.add("anotherclass");
    if (!firstmessage) {
      let messagediv = document.createElement("span");
      messagediv.textContent = "*Username should be according to the rule";
      messagediv.style.color = "white";
      messagediv.style.fontSize = "small";
      messagediv.style.marginTop = "8px";
      message.appendChild(messagediv);
    }
    message.style.backgroundColor = "black";
  } else {
    icon.setAttribute("data", "false");
    userInput.classList.remove("usernameclass");
    container.classList.remove("anotherclass");

    if (message.querySelector("span")) {
      message.querySelector("span").remove();
    }
    message.style.backgroundColor = "transparent";
  }
}

function showExclamationemail() {
  let userinputemail = document.getElementById("emailid");
  let icon = document.querySelector(".emaildiv .fa-solid"); // Target icon within email div
  let container = document.querySelector(".anothercontainer");
  let secondmessage = document.querySelector(".emaildiv");

  let existingMessage = secondmessage.querySelector("span");

  if (userinputemail.value.length < 8) {
    icon.setAttribute("data", "true");
    userinputemail.classList.add("usernameclass");
    container.classList.add("anotherclass");

    if (!existingMessage) {
      let messagediv = document.createElement("span");
      messagediv.textContent = "*Email should be at least 8 characters";
      messagediv.style.color = "white";
      messagediv.style.fontSize = "small";
      messagediv.style.marginTop = "8px";
      secondmessage.appendChild(messagediv);
    }
    secondmessage.style.backgroundColor = "black";
  } else {
    icon.setAttribute("data", "false");
    userinputemail.classList.remove("usernameclass");

    if (existingMessage) {
      existingMessage.remove();
    }
    secondmessage.style.backgroundColor = "transparent";
  }
}

function showExclamationphone() {
  let userinputphone = document.getElementById("phoneid");
  let icon = document.querySelector(".phonediv .fa-solid"); // Target icon within phone div
  let container = document.querySelector(".anothercontainer");
  let thirdmessage = document.querySelector(".phonediv");

  let existingMessage = thirdmessage.querySelector("span");

  // Check if the input is not exactly 10 digits or contains non-numeric characters
  if (
    userinputphone.value.length !== 10 ||
    !/^\d+$/.test(userinputphone.value)
  ) {
    icon.setAttribute("data", "true");
    userinputphone.classList.add("usernameclass");
    container.classList.add("anotherclass");

    if (!existingMessage) {
      let messagediv = document.createElement("span");
      messagediv.textContent = "*Phone number must be exactly 10 digits";
      messagediv.style.color = "white";
      messagediv.style.fontSize = "small";
      messagediv.style.marginTop = "8px";
      thirdmessage.appendChild(messagediv);
    }
    thirdmessage.style.backgroundColor = "black";
  } else {
    icon.setAttribute("data", "false");
    userinputphone.classList.remove("usernameclass");

    if (existingMessage) {
      existingMessage.remove();
    }
    thirdmessage.style.backgroundColor = "transparent";
  }
}

function showExclamationpassword() {
  let userinputpassword = document.getElementById("passid");
  let icon = document.querySelector(".passwordiv .fa-solid"); // Target icon within password div
  let container = document.querySelector(".anothercontainer");
  let fourthmessage = document.querySelector(".passwordiv");

  let existingMessage = fourthmessage.querySelector("span");

  // Check if password is less than 4 characters
  if (userinputpassword.value.length < 4) {
    icon.setAttribute("data", "true");
    userinputpassword.classList.add("usernameclass");
    container.classList.add("anotherclass");

    if (!existingMessage) {
      let messagediv = document.createElement("span");
      messagediv.textContent = "*Password must be at least 4 characters";
      messagediv.style.color = "white";
      messagediv.style.fontSize = "small";
      messagediv.style.marginTop = "8px";
      fourthmessage.appendChild(messagediv);
    }
    fourthmessage.style.backgroundColor = "black";
  } else {
    icon.setAttribute("data", "false");
    userinputpassword.classList.remove("usernameclass");

    if (existingMessage) {
      existingMessage.remove();
    }
    fourthmessage.style.backgroundColor = "transparent";
  }
}

function showExclamationconfirmpassword() {
  let userinputpassword = document.getElementById("passid");
  let userinputconfirmpassword = document.getElementById("confirmpassid");
  let icon = document.querySelector(".confirmpasswordiv .fa-solid"); // Target icon within confirm password div
  let container = document.querySelector(".anothercontainer");
  let fifthmessage = document.querySelector(".confirmpasswordiv");

  let existingMessage = fifthmessage.querySelector("span");

  if (
    userinputconfirmpassword.value !== userinputpassword.value ||
    userinputconfirmpassword.value === ""
  ) {
    icon.setAttribute("data", "true");
    userinputconfirmpassword.classList.add("usernameclass");
    container.classList.add("anotherclass");

    if (!existingMessage) {
      let messagediv = document.createElement("span");
      messagediv.textContent = "*Passwords do not match";
      messagediv.style.color = "white";
      messagediv.style.fontSize = "small";
      messagediv.style.marginTop = "8px";
      fifthmessage.appendChild(messagediv);
    }
    fifthmessage.style.backgroundColor = "black";
  } else {
    icon.setAttribute("data", "false");
    userinputconfirmpassword.classList.remove("usernameclass");

    if (existingMessage) {
      existingMessage.remove();
    }
    fifthmessage.style.backgroundColor = "transparent";
  }
}

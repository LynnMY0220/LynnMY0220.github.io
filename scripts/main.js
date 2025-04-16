const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/dida.jpeg") {
    myImage.setAttribute("src", "images/dida2.jpg");
  } else {
    myImage.setAttribute("src", "images/dida.jpeg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("#huanying");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Wellcome, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Wellcome, ${storedName}`;
}

myButton.onclick = function () {
  setUserName();
};

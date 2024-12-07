const email = document.getElementById("email");
const password = document.getElementById("password");
const signInButton = document.getElementById("sign-in");

signInButton.addEventListener("click", function () {
  const emailVal = email.value.replace(/\s+/g, "").trim();
  const passwordVal = password.value;
  //   cek jika user memasukkan email yang benar
  if (emailVal.slice(emailVal.indexOf("@")) !== "@gmail.com") {
    email.style.borderColor = "red";
    alert("anda memasukkan email yang salah");
    return;
  }
  email.style.borderColor = "rgb(175, 175, 175)";
  //   cek jika user memasukkan password yang benar
  const unallowedChar = ["!", "%", "#", ")"];
  const hasUnallowedChar = unallowedChar.some((char) => passwordVal.includes(char));
  //   cek jika password memiliki karakter terlarang
  if (hasUnallowedChar) {
    alert("password harus terdiri dari angka dan huruf");
    password.style.borderColor = "red";
    return;
  }
  //   cek jika password memiliki panjang kurang dari 8
  else if (passwordVal.length < 8) {
    alert("password harus lebih dari 8 karakter");
    password.style.borderColor = "red";
    return;
  }

  password.style.borderColor = "rgb(175, 175, 175)";
  alert("Anda berhasil login");
});

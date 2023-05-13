
const btnDark = document.querySelector("#dark");
const body = document.querySelector("body");

const setStorage = (value) => {
  localStorage.setItem("darkMode", value);
};

btnDark.addEventListener("click", (e) => {
  body.classList.toggle("darkMode");
  setStorage(body.classList.contains("darkMode"));
});

const getStorage = () => {
  return localStorage.getItem("darkMode");
};

getStorage() === "true"
  ? body.classList.add("darkMode")
  : body.classList.remove("darkMode");


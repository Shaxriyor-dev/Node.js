const a = "23";
console.log("Ben oddiy man", a);
console.log(Number(a));
console.log(a + 1);
console.log(Number(a) + 1);

const Str = 2024;
console.log(Str);
console.log("String o'tkizish", String(Str));
console.log("30" - "10" - 3);
console.log("Salom" + " " + 2008 + " " + "Yilman va men hizirda dasturchiman.");

// Falsy
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(0n));

// Truthy
console.log(Boolean("Shaxriyor"));
console.log(Boolean(23));
console.log(Boolean({}));
console.log(Boolean("0"));
console.log(Boolean("false"));

let h = "Salom";
if (h === "Salom") {
  console.log("Salom bu soz bir xil 🤐");
} else {
  console.log("Bu so'z hato 🤪");
}

window.localStorage.setItem("key", "value");
console.log(window.localStorage.getItem("key"));

const h1 = document.querySelector("h1");

const password = 12345678;

h1.addEventListener("click", () => {
  if (password === 12345678) {
      
  } else {
  }
});



app.get("/", (req, res) => {
  res.send("Salom, dunyo! Bu backend server.");
});


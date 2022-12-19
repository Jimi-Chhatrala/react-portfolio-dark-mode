// // Dark light theme

// const themeButton = document.getElementById("theme-button");

// const darkTheme = "dark-theme";

// const iconTheme = "uil-sun";
// // const iconTheme = "bx-sun";

// // Previously selected topic (if user selected)

// const selectedTheme = localStorage.getItem("selected-theme");

// const selectedIcon = localStorage.getItem("selected-icon");

// // We obtain the current theme that the interface has by validating the dark-theme class

// const getCurrentTheme = () =>
//   document.body.classList.contains(darkTheme) ? "dark" : "light";

// const getCurrentIcon = () =>
//   themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";
// // themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

// // We validate if the user previously choose a topic

// if (selectedTheme) {
//   // if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark

//   document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
//     darkTheme
//   );

//   themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
//     iconTheme
//   );
// }

// // Activate / deactivation the theme manually with the button

// themeButton.addEventListener("click", () => {
//   // Add or remove the dark / icon theme

//   document.body.classList.toggle(darkTheme);

//   themeButton.classList.toggle(iconTheme);

//   // We save the theme and the current icon that the user choose

//   localStorage.setItem("selected-theme", getCurrentTheme());

//   localStorage.setItem("selected-icon", getCurrentIcon());
// });

// // ************************************************************************************

// const themeButton = document.getElementById("theme-button");

// const darkTheme = "dark-theme";

// const iconTheme = "uil-sun";

// // function darkFunction() {
// //   var element = document.body;
// //   element.classList.toggle("dark-theme");
// // }

// themeButton.addEventListener("click", () => {
//   // Add or remove the dark / icon theme

//   document.body.classList.toggle("dark-theme");

//   themeButton.classList.toggle(iconTheme);
// });

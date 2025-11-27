// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Tabs 
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Sidebar JS
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-300px";
}




// Form Submission
const form = document.forms["submit-to-google-sheet"];
const popup = document.getElementById("popup");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop page reload

    // Show popup
    popup.classList.add("show");

    // Clear form fields
    form.reset();

    // Hide popup after 3 seconds
    setTimeout(() => {
        popup.classList.remove("show");
    }, 1500);
});

// Go to Top
const goTopBtn = document.getElementById("go-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 800) {
        goTopBtn.classList.add("show");
    } else {
        goTopBtn.classList.remove("show");
    }
});

// Smooth scroll to top when clicked
goTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


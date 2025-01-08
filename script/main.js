const mobileNav = document.querySelector(".mobile-nav")
const mobileNavButton = document.querySelector(".mobile-nav-button")

mobileNav.addEventListener("click", MobileNavToggle)
mobileNavButton.addEventListener("click", MobileNavToggle)

function MobileNavToggle() {
    if (mobileNav.style.display === "block"){
        mobileNav.style.display = "none"
    } else {
        mobileNav.style.display = "block"
    }
}
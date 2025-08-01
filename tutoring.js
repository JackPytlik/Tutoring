window.addEventListener("scroll", () => {
    const box = document.getElementById("contactbox");
    const boxTitle = document.getElementById("contacttitle");
    const boxText = document.getElementById("contacttext");
    const scrollY = window.scrollY;
    const scrollHeight = document.body.scrollHeight;
    const viewportHeight = window.innerHeight;

  // Check if user is near the bottom
    if (scrollY + viewportHeight >= scrollHeight - 10) {
       box.classList.add("expanded");
       boxTitle.classList.add("expanded");
       boxText.classList.add("expanded");
    } else {
       box.classList.remove("expanded");
       boxTitle.classList.remove("expanded");
       boxText.classList.remove("expanded");
    }
    });

if(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {

} else {

}

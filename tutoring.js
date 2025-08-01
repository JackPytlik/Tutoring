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
    document.getElementById("topbar").classList.add("mobile");
    document.getElementsByClassName("title").classList.add("mobile");
    document.getElementsByClassName("spacer").classList.add("mobile");
    document.getElementById("tagline").classList.add("mobile");
    document.getElementById("contactbox").classList.add("mobile");
    document.getElementById("contacttitle").classList.add("mobile");
    document.getElementById("contacttext").classList.add("mobile");
    document.getElementsByClassName("heading").classList.add("mobile");
    document.getElementsByClassName("bodytext").classList.add("mobile");
    document.querySelectorAll("li").forEach(item => {
        item.classList.add("mobile");
    });
    document.getElementsByClassName("leftcontain").classList.add("mobile");
    document.getElementsByClassName("bottompad").classList.add("mobile");
} else {
    document.getElementById("topbar").classList.remove("mobile");
    document.getElementsByClassName("title").classList.remove("mobile");
    document.getElementsByClassName("spacer").classList.remove("mobile");
    document.getElementById("tagline").classList.remove("mobile");
    document.getElementById("contactbox").classList.remove("mobile");
    document.getElementById("contacttitle").classList.remove("mobile");
    document.getElementById("contacttext").classList.remove("mobile");
    document.getElementsByClassName("heading").classList.remove("mobile");
    document.getElementsByClassName("bodytext").classList.remove("mobile");
    document.querySelectorAll("li").forEach(item => {
        item.classList.remove("mobile");
    });
    document.getElementsByClassName("leftcontain").classList.remove("mobile");
    document.getElementsByClassName("bottompad").classList.remove("mobile");
}

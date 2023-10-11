let container = document.querySelector(".container")
let homeBtn = document.querySelector(".home-btn")
let menuBtn = document.querySelector(".menu-btn")


homeBtn.addEventListener("click", () => {
let content = document.createElement("div")
content.classList.add("content")
content.innerHTML = `<div class="info">
Chill cafe specializes in delicious food featuring fresh ingredients and masterful preparation by our culinary team. Whether you’re ordering a multi-course meal or grabbing a drink and pizza at the bar, our lively, casual yet upscale atmosphere makes it perfect for dining with friends, family, clients and business associates.
</div>


<div class="timing">
<ul>
    <li><h2>Timings</h2></li>
    <li>Sunday: 8am - 8pm</li>
    <li>Monday: 6am - 6pm</li>
    <li>Tuesday: 6am - 6pm</li>
    <li>Wednesday: 6am - 6pm</li>
    <li>Thursday: 6am - 10pm</li>
    <li>Friday: 6am - 10pm</li>
    <li>Saturday: 8am - 10pm</li>
</ul>

</div>

<div class="contact">
<ul>
<li><h2>Contact</h2></li>

<li>Boss Chef</li>
<li>555-555-5554</li>
<li>totallyRealEmail@notFake.com</li>
</ul>

</div> `



container.appendChild(content)
})

menuBtn.addEventListener("click", () => {

}) 
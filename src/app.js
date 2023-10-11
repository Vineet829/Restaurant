import './style.css'
import { values } from 'lodash'
import img1 from "./images/item-1.jpeg"
import img2 from "./images/item-2.jpeg"
import img3 from "./images/item-3.jpeg"
import img4 from "./images/item-4.jpeg"
import img5 from "./images/item-5.jpeg"
import img6 from "./images/item-6.jpeg"
import img7 from "./images/item-7.jpeg"
import img8 from "./images/item-8.jpeg"
import img9 from "./images/item-9.jpeg"
import img10 from "./images/item-10.jpeg"
import img11 from "./images/background.jpg"


export default function () {
const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: img1,
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: img2,
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: img3,
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: img4,
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: img5,
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: img6,
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: img7,
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: img8,
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: img9,
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: img10,
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  

  
  ]


  
  
  const container = document.querySelector(".container")
const homeBtn = document.querySelector(".home-btn")
const menuBtn = document.querySelector(".menu-btn")
  
homeBtn.addEventListener("click", () => {
  
  container.innerHTML = `
  <div class="box">
  <div class="info">
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
  
  </div> 
  </div>
  `
  
  
  
  })
  
  menuBtn.addEventListener("click", () => {
    
    container.innerHTML = ` <section class="menu">
    
    <div class="btn-container">
      <button type="button" class="filter-btn" data-id="all">all</button>
      <button type="button" class="filter-btn" data-id="breakfast">
        breakfast
      </button>
      <button type="button" class="filter-btn" data-id="lunch">lunch</button>
      <button type="button" class="filter-btn" data-id="shakes">
        shakes
      </button>
    </div>
    
    <div class="section-center"></div> `
      
  
  
  
   
  
     const btnContainer = document.querySelector(".btn-container") 
     const sectionCenter = document.querySelector(".section-center") 
   



   

  
  function displayMenuButtons(){
    const uniqueCategory = menu.reduce((values, menuItems) =>{
    if(!values.includes(menuItems.category)){
      values.push(menuItems.category)
    }
    return values
    
  }, ["all"])
  

  

 
  
  
    const uniqueButtons = uniqueCategory.map((item) =>`<button class="filter-btn" type="button" data-id=${item}>${item}</button>`).join("")
    
  btnContainer.innerHTML = uniqueButtons
  


  
  const filterBtns = document.querySelectorAll(".filter-btn")  
  
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
    const category = e.currentTarget.dataset.id;
   const menuCategory = menu.filter((menuItem) => {
    if(menuItem.category === category){
     return menuItem
    }});
     
      
   if(category === 'all'){
     displayMenuItems(menu)
   } 
 else{
   displayMenuItems(menuCategory)
 }  
    })
   })



  }

  
  
 
   
  
  
   
let displayMenuItems = function (menuItems){
  let displayMenu = menuItems.map((item) => `<article class="menu-item"><img src=${item.img} class ="photo" alt="menu-item">
   <div class="item-info">
       <header>
           <h4>${item.title}</h4>
           <h4 class="price">$${item.price}</h4>
       </header>
   <p class="class-text">${item.desc}</p>
   </div>
   </article> `
  )
  displayMenu = displayMenu.join("");

 sectionCenter.innerHTML = displayMenu 
}

displayMenuItems(menu);
displayMenuButtons();   


  })

}



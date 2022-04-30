const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Texas steak",
        category: "dinner",
        price: 25.99,
        img: "./images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      }
  ];

  const all=document.getElementById("all");
  const breakfast=document.getElementById("breakfast");
  const lunch=document.getElementById("lunch");
  const shakes=document.getElementById("shakes");
  const dinner=document.getElementById("dinner");
  const container=document.getElementById("item-container");

  window.addEventListener('DOMContentLoaded',()=>{
    const items=menu.map(val=>{
        return `<div class="item">
        <div class="image-container">
          <img src=${val.img} alt="" class="item-image" />
        </div>
        <div class="item-text">
          <div class="item-title">
            <h4 class="title">${val.title}</h4>
            <h4 class="price">$${val.price}</h4>
          </div>
          <div class="item-description">
            <p class="description">
              ${val.desc}
            </p>
          </div>
        </div>
      </div>`
    })
    let item=items.join('');
    container.innerHTML=item;
  })
  all.addEventListener('click',()=>{
    const items=menu.map(val=>{
        return `<div class="item">
        <div class="image-container">
          <img src=${val.img} alt="" class="item-image" />
        </div>
        <div class="item-text">
          <div class="item-title">
            <h4 class="title">${val.title}</h4>
            <h4 class="price">$${val.price}</h4>
          </div>
          <div class="item-description">
            <p class="description">
              ${val.desc}
            </p>
          </div>
        </div>
      </div>`
    })
    let item=items.join('');
    container.innerHTML=item;
  })
    breakfast.addEventListener('click',()=>{
    const breakfast=menu.filter(val=>{
       return val.category==="breakfast";
    })
    const items=breakfast.map(val=>{
        return `<div class="item">
        <div class="image-container">
          <img src=${val.img} alt="" class="item-image" />
        </div>
        <div class="item-text">
          <div class="item-title">
            <h4 class="title">${val.title}</h4>
            <h4 class="price">$${val.price}</h4>
          </div>
          <div class="item-description">
            <p class="description">
              ${val.desc}
            </p>
          </div>
        </div>
      </div>`
    })
    let item=items.join('');
    container.innerHTML=item;
  })
  lunch.addEventListener('click',()=>{
    const lunch=menu.filter(val=>{
       return val.category==="lunch";
    })
    const items=lunch.map(val=>{
        return `<div class="item">
        <div class="image-container">
          <img src=${val.img} alt="" class="item-image" />
        </div>
        <div class="item-text">
          <div class="item-title">
            <h4 class="title">${val.title}</h4>
            <h4 class="price">$${val.price}</h4>
          </div>
          <div class="item-description">
            <p class="description">
              ${val.desc}
            </p>
          </div>
        </div>
      </div>`
    })
    let item=items.join('');
    container.innerHTML=item;
  })
  shakes.addEventListener('click',()=>{
    const shakes=menu.filter(val=>{
       return val.category==="shakes";
    })
    const items=shakes.map(val=>{
        return `<div class="item">
        <div class="image-container">
          <img src=${val.img} alt="" class="item-image" />
        </div>
        <div class="item-text">
          <div class="item-title">
            <h4 class="title">${val.title}</h4>
            <h4 class="price">$${val.price}</h4>
          </div>
          <div class="item-description">
            <p class="description">
              ${val.desc}
            </p>
          </div>
        </div>
      </div>`
    })
    let item=items.join('');
    container.innerHTML=item;
  })
  dinner.addEventListener('click',()=>{
    const dinner=menu.filter(val=>{
       return val.category==="dinner";
    })
    const items=dinner.map(val=>{
        return `<div class="item">
        <div class="image-container">
          <img src=${val.img} alt="" class="item-image" />
        </div>
        <div class="item-text">
          <div class="item-title">
            <h4 class="title">${val.title}</h4>
            <h4 class="price">$${val.price}</h4>
          </div>
          <div class="item-description">
            <p class="description">
              ${val.desc}
            </p>
          </div>
        </div>
      </div>`
    })
    let item=items.join('');
    container.innerHTML=item;
  })


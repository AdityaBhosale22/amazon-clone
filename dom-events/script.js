let body = document.getElementById("my-body");

let arr=[
    {
        heading:"Heading 1",
        content:"This is the content for heading 1."
    }
    ,{
        heading:"Heading 2",
        content:"This is the content for heading 2."
    }
    ,{
        heading:"Heading 3",
        content:"This is the content for heading 3."
    }
    ,{
        heading:"Heading 4",
        content:"This is the content for heading 4."
    }
    ,{
        heading:"Heading 5",
        content:"This is the content for heading 5."
    },
    {
        heading:"Heading 6",
        content:"This is the content for heading 6."
    }
]

arr.forEach((item,i)=>{
    // body.innerHTML+=`<div class="card">
    // <h2 id="heading-${i}">${item.heading}</h2>
    // <p id="content-${i}" style="display:none;">${item.content}</p>
    // </div>`;
    let card=document.createElement("div");
    card.className="card";
    card.id=`card-${i}`;
    let heading=document.createElement("h2");
    heading.textContent=item.heading;
    let content=document.createElement("p");
    content.textContent=item.content;

    card.appendChild(heading);
    card.appendChild(content);
    body.appendChild(card);

    heading.addEventListener("click",()=>{
        toggleContent(item.heading,i);
    })
})

function toggleContent(event,i){
    console.log(`the element ${event} was clicked`);
    let cardNew = document.getElementById(`card-${i}`);
    cardNew.style.backgroundColor="lightblue";
}
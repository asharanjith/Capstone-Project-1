
const speakerArray=[
    {
        name: 'John Doe',
        title: 'CEO of Company',
        image: './Assets/model1.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
        name: 'Jane Doe',  
        title: 'CEO of Company',
        image: './Assets/model2.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {   
        name: 'John Doe',
        title: 'CEO of Company',
        image: './Assets/model3.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
        name: 'Jane Doe',
        title: 'CEO of Company',
        image: './Assets/model4.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
        name: 'John Doe',
        title: 'CEO of Company',
        image: './Assets/model5.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
        name: 'Jane Doe',
        title: 'CEO of Company',
        image: './Assets/model6.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    }, 
];

// Create a function to create a card

const speakerSection = document.querySelector('#jsSection');
const button= document.querySelector('.moreButton');
let x=window.innerWidth;
let num=2;
if(x>768){
    num=6;
}
else{
    num=2;
}
for(let i=0;i<num;i+=1){
   speakerSection.innerHTML += `
   <div class="speaker">        
        <img src="${speakerArray[i].image}" alt="speaker1">
        <div class="speakerInfo">
            <h3>${speakerArray[i].name}</h3>
            <p class="position">${speakerArray[i].title}</p>
            <p>${speakerArray[i].text}</p>
        </div>      
        
    </div>   
   `
}

button.addEventListener('click',()=>{
    num+=4;
    if(num>6){
        num=6;
    }
    speakerSection.innerHTML='';
    for(let i=0;i<num;i+=1){
        speakerSection.innerHTML += `
        <div class="speaker">        
             <img src="${speakerArray[i].image}" alt="speaker1">
             <div class="speakerInfo">
                 <h3>${speakerArray[i].name}</h3>
                 <p class="position">${speakerArray[i].title}</p>
                 <p>${speakerArray[i].text}</p>
             </div>      
             
         </div>   
        `
     }
     if(num===6){         
         button.innerHTML='Less<i class="fas fa-chevron-up"></i>';
         button.addEventListener('click', ()=>{
             num=2;
             speakerSection.innerHTML='';
             for(let i=0;i<num;i+=1){
                speakerSection.innerHTML += `
                <div class="speaker">        
                     <img src="${speakerArray[i].image}" alt="speaker1">
                     <div class="speakerInfo">
                         <h3>${speakerArray[i].name}</h3>
                         <p class="position">${speakerArray[i].title}</p>
                         <p>${speakerArray[i].text}</p>
                     </div>      
                     
                 </div>   
                `
             }
             button.innerHTML='More<i class="fas fa-chevron-down"></i>';
             
         });
     }
});
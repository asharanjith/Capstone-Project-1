
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

for(let i=0;i<speakerArray.length;i+=1){
   speakerSection.innerHTML += `
   <div class="speaker">        
        <img src="${speakerArray[i].image}" alt="speaker1">
        <div class="speakerInfo">
            <h3>${speakerArray[i].name}</h3>
            <p>${speakerArray[i].title}</p>
            <p>${speakerArray[i].text}</p>
        </div>
                           
        
    </div>
   
   `
}

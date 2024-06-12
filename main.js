const usresLimit = document.querySelector(".users");
const limitAge = document.querySelector(".limitAge");
const btn = document.querySelector(".btn");
const cards = document.querySelector(".cards");
const cardWrapper = document.querySelector(".cardWrapper");
const sortedCards = document.querySelector(".sortedCards");

btn.addEventListener("click", (e) => {
    e.preventDefault()
    fetch('https://dummyjson.com/users')
        .then(response => response.json())
        .then(data => createCards(data.users.slice(0, limitAge.value)))
        .catch(error => console.error('Error fetching data:', error));

    function createCards(data) {
       
        const container = document.querySelector('.cards');

        data.forEach(user => {
            const card = document.createElement('div');
            card.className = 'card';

            const id = document.createElement('h1');
            id.classList.add("id")
            id.textContent = `Id: ${user.id}`;

            const name = document.createElement('h2');
            name.textContent = `First name: ${user.firstName}`;

            const lName = document.createElement('h2');
            lName.textContent = `Last name: ${user.lastName}`;

            const age = document.createElement('h3');
            age.textContent = `Body: ${user.age}`;

            card.append(id, name, lName, age);

            container.appendChild(card);



            
        });


        data.forEach(user2 =>{
            if(user2.age > limitAge.value){
                const card = document.createElement('div');
                card.className = 'card';
    
                const id = document.createElement('h1');
                id.classList.add("id")
                id.textContent = `Id: ${user2.id}`;
    
                const name = document.createElement('h2');
                name.textContent = `First name: ${user2.firstName}`;
    
                const lName = document.createElement('h2');
                lName.textContent = `Last name: ${user2.lastName}`;
    
                const age = document.createElement('h3');
                age.textContent = `Body: ${user2.age}`;
    
                card.append(id, name, lName, age);
    
                cardWrapper.appendChild(card);
                sortedCards.appendChild(cardWrapper)
            }
        })
    }

    
    
})
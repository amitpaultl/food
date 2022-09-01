const dataUrl = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => dispalyData(data))
}

// display 

const dispalyData = (data) =>{
    const preantData = document.getElementById('cardId');
    data.forEach(element => {
        console.log(element);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
            
            <div class="card-body">
                <h5 class="card-title">Card Id ${element.id}</h5>
                <p class="card-text">${element.title}</p>
                <button onclick="modal(${element.id}, '${element.thumbnailUrl}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Ditels
                </button>
            </div>
            </div>
        `
        preantData.appendChild(div)
    });
}

//  modal 

const modal = (id, il) => {
    const url = `https://jsonplaceholder.typicode.com/albums/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => modalDispaly(data , il))
}

//  modal dispaly

const modalDispaly = (data, il) =>{
    console.log(il);
    const modalTital = document.getElementById('exampleModalLabel');
    modalTital.innerText = `${data.title}`
    const modalId = document.getElementById('modial-id');
    modalId.innerHTML = `
                <img src=${il} alt="">
                <p>${data.id}</p>
    
    
    
    `;

}

dataUrl();
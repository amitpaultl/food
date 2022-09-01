const cocakeurl = ()=>{
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`;
    fetch(url)
    .then(res => res.json())
    .then(data => dispalyCocak(data.drinks))
};
const dispalyCocak = (data) =>{
    const cocak = document.getElementById('cocak');
    data.forEach(element => {
        const div = document.createElement('div');
        console.log(div);
        div.classList.add("col-md-3","col-sm-6");
        div.innerHTML = `
       
        <div class="single-food text-center">
        <div class="img-card">
          <img class="w-100" src=${element.strDrinkThumb} alt="">
        </div>
        <p>${element.strIngredient2}</p>
      </div>
        
        `
        cocak.appendChild(div)
    });

}

cocakeurl();
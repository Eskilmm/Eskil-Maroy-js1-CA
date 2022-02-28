fetch("https://fakestoreapi.com/products")
.then((data)=>{
    console.log(data);
    return data.json();
})
.then ((completedata)=> {
    console.log(completedata);
    let data2="";
    completedata.map((values)=>{


        data2=`
        <div id="slot">
            <div class="slot">
            <h2 class="title">${values.title}</h2>
            <img src=${values.image} alt="img" class="images">
            <p>${values.description}</p>
            <p class="category">${values.category}</p>
            <p class="price">${values.price}</p>
        </div>
        </div>`
    })
    document.getElementById("slot").innerHTML= data2

})
.catch((err)=>{
    console.log(err);
})

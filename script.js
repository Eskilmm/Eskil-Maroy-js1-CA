fetch("https://fakestoreapi.com/products")
.then((data)=>{
    console.log(data);
    return data.json();
})
.then ((completedata)=> {
    console.log(completedata);
    let data1="";
    completedata.map((values)=>{
        data1=`
        <div id="slot">
            <div class="slot">
            <h1 class="title">${values.title}</h1>
            <img src=${values.image} alt="img">
            <p>${values.description}</p>
            <p class="category">${values.category}</p>
            <p class="price">${values.price}</p>
        </div>`
    })
    document.getElementById("cards").innerHTML= data1

})
.catch((err)=>{
    console.log(err);
})

fetch("https://fakestoreapi.com/products")
.then((data)=>{
    console.log(data);
    return data.json();
})
.then((completedata)=>{
    console.log(completedata);
    let data1 = "";
    completedata.map((values)=>{
        data1=`
        <div id= index>
        <h1 class="title">${values.title}>
        </div>`

})
document.getElementById("index").innerHTML= data1
})
.catch((err)=>{
    console.log(err)
})


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
        <div id= "index">
        <div class "index-yes">
        <h1 class="title">${values.title}>
        </div>
        </div>`

})
document.getElementById("index").innerHTML= data1
})
.catch((err)=>{
    console.log(err)
})


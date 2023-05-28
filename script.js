let xhr;
let obj;
var datalist;
let selectdata;
let endpoint="https://restcountries.com/v2/all";
function connect(){
    xhr=new XMLHttpRequest();
    xhr.onreadystatechange=process;
    xhr.open('get',endpoint,true);
    xhr.send(null);
}
function process(){
    if(xhr.readyState===4 && xhr.status===200){
        let txt=xhr.responseText;
        obj=JSON.parse(txt);
        let str="";
        for(countryarry of obj){
            str+=`<option>${countryarry.name}</option>`;
        }
        datalist=document.getElementById('select');
        datalist.innerHTML=str;
        datalist.addEventListener('change',datashow);
        console.log(datalist);
    }
}
function datashow(){
    selectdata=document.getElementById('select');
    value=selectdata.value;
    console.log(value);
    let data="";
    for(let i in obj){
        if((obj[i]).name===value){
            data=obj[i];
        }
    }
    console.log(data);
    let container=document.getElementById('container');
    let image=document.createElement('img');
    let flag=data.flags['png'];
    image.src=flag;

    let p1=document.createElement('p');
    p1.innerHTML=data.name;

    let p2=document.createElement('p');
    p2.innerHTML=data.region;

    population=`👨‍👨‍👧‍👧<span>${(data.population/1000000).toFixed(2)}million</span><br><br>`;
    language=`🗣️<span>${data.languages[0].name}</span><br><br>`;
    currency=`💰<span>${data.currencies[0].name}</span>`;
    container.innerHTML=`<img src=${flag} id='image'>`;
    container.innerHTML+=`<p id='name'>${data.name}</p>`;
    container.innerHTML+=`<p id='region'>${data.region}</p>`;
    container.innerHTML+=`<hr>`;
    container.innerHTML+=`<p id='population'>👨‍👨‍👧‍👧&nbsp<span>${(data.population/1000000).toFixed(2)}&nbspmillion</span></p>`;
    container.innerHTML+=`<p id='language'>🗣️&nbsp<span>${data.languages[0].name}</span></p>`;
    container.innerHTML+=`<p id='currency'>💰&nbsp<span>${data.currencies[0].name}</span></p>`;
}

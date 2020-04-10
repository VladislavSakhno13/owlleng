const manyData = [];
localStorage.setItem("data",JSON.stringify(manyData))
document.getElementById('show').onclick = function(){
    let show = JSON.parse(localStorage.getItem("data"));
   for(let i = 0;i<show.length;i++){
        renderdata(show[i]);
   }
  
}
document.getElementById('new').onclick = function(){
    dataJSON = {
        name:"",
        adress:"",
        phone:""
    };
    dataJSON.name = document.getElementById('name').value;
    dataJSON.adress = document.getElementById('adress').value;
    dataJSON.phone = document.getElementById('phone').value;
    let setdata = JSON.parse(localStorage.getItem("data"));
    console.log(setdata);
    setdata.push(dataJSON);
    let jsonData = JSON.stringify(setdata);
    localStorage.setItem("data", jsonData);
    
}
document.getElementById('delet').onclick = function(){
    let namedel = document.getElementById('name').value;
    let dataOndel = JSON.parse(localStorage.getItem('data'));
    for(let i=0;i<dataOndel.length;i++){
        if(namedel == dataOndel[i].name){
            dataOndel.splice(i,1);
            localStorage.setItem("data",JSON.stringify(dataOndel));
        }
    }
}

document.getElementById('change').onclick = function(){
    dataJSON = {
        name:"",
        adress:"",
        phone:""
    };
    dataJSON.name = document.getElementById('name').value;
    dataJSON.adress = document.getElementById('adress').value;
    dataJSON.phone = document.getElementById('phone').value;
    let namedel = document.getElementById('name').value;
    let dataOndel = JSON.parse(localStorage.getItem('data'));
    for(let i=0;i<dataOndel.length;i++){
        if(namedel == dataOndel[i].name){
            delete dataOndel[i];
            dataOndel[i] = dataJSON;
            localStorage.setItem("data",JSON.stringify(dataOndel));
        }
    }
   
    
}

function renderdata(datadb){
   let div1 =  document.createElement('div');
   let span1 = document.createElement('span');
   span1.innerHTML = datadb.name;

   let div2 =  document.createElement('div');
   let span2 = document.createElement('span');
   span2.innerHTML = datadb.adress;

   let div3 =  document.createElement('div');
   let span3 = document.createElement('span');
   span3.innerHTML = datadb.phone;

   div1.appendChild(span1);
   div2.appendChild(span2);
   div3.appendChild(span3);

   document.getElementById('d1').appendChild(div1);
   document.getElementById('d2').appendChild(div2);
   document.getElementById('d3').appendChild(div3);
}
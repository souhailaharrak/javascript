


//var number=prompt('entre un number');
//var double=number*2;
//console.log(double);

//let arr =[20,15,14,10];
//arr.forEach((iteme,arr)=>console.log(arr));


//  var notes =prompt('entre son notes');
//  if (notes>=15){
//              alert('trés bien');
//  }
//  else if (notes<15 && notes>=13){
//     alert('bien');
//  }else if (notes<13 && notes>=10){
//     alert('assez bien');
//  }else{
//     alert('redoublant');
//  }

// const maynum=(age,naum)=>{
//          age: 22,


// }
// console.log(maynum(22,souha));

// const sayhello =()=> ({
//      age : 22,
//      fullname : 'souhaila'

// })

// console.log(sayhello());
// var nomber,fact=2,i;
// nomber=prompt('entre un nomber');
// for(i=1;i<=nomber ;i++){
//      fact=(fact*i);
// }
// alert(fact);
// var notes =0,sum,i;

// for(i=0;i<10;i++){
//        notes=prompt('entre son note'+   i+1)*1;
// }
//  sum =notes/10;
// alert(sum);

// var i;

//  i=prompt('entre un number');
// if(i==0){

//      console.log('is number null');
// }
// else if (i % 2==0){
//     console.log('is number zawji hh');
// }else {
//     console.log('fardi ');
// }
// var x=4;
// var a=10;
// var w=10;
// if(x>0 && a>0 && w>0){
//      console.log('positive');
// }else if(x>0 && a<0 && w<0){
//        console.log('positive');
// }else if(x>0 && a<0 && w>0){
//       console.log('negative');
// }else if (x<0 && a<0 && w<0){
//            console.log('negative');
// }
// var x=4;
// var a=0;
// var w=10;
//   if (x>a && x>w){  if (a>w){
//            console.log(x +' ,'+ a +' ,'+ w);
//   }else if (x>w && x>a){
//     console.log(x +' ,'+ w +' ,'+ a);
//   }else{
//       console.log(error);
//   }

// // }
// var x= 0;
// var y=-1;
// var z= 4;
// if (x>y && x>z)
// {
//         if (y>z)
//         {
//             console.log(x + ", " + y + ", " +z);
//         }
//         else
//         {
//             console.log(x + ", " + z + ", " +y);
//         }
// }
// else if (y>x && y >z)
// {
//         if (x>z)
//         {
//              console.log(y + ", " + x + ", " +z);
//         }
//         else
//         {
//              console.log(y + ", " + z + ", " +x);
//         }
// }
// else if (z>x && z>y)
// {
//         if (x>y)
//         {
//             console.log(z + ", " + x + ", " +y);
//         }
//         else
//         {
//             console.log(z + ", " + y + ", " +x);
//         }
// // }   
//  التمرين الاول من الجدول 
// var arr=[];
// var i;
// var nb;
// nb=prompt('entre la taille de tableau');
// for(i=1;i<=nb;i++){
//     arr.push(prompt('entre la valeur N°'+i));

// }
// alert(arr.reverse());
// var array = [5, 5, 2, 2, 2];
// var moyen = 1;
// var sum = 0;
// for (var i=0; i<array.length; i++) {
//     sum +=array[i];
// }
// moyen =(sum/array.length);
// console.log(moyen);
// var en;
// var sum=0;
// var j=1;
// en=prompt('entre un number')
// for(let i=1;i<=en;i++){
//     sum=sum+(j*j);
//     j=j+2;
// }
// alert(sum);

// const test = document.querySelector('.salma');
// console.log(test.outerHTML='<q>cv</q>');

// console.log(test.innerHTML= '<i>ghxgf xhxh ry ghdxruyxyjux jsruyuj</i>');

// console.log(test.innerHTML +='<h1>dyabla<h1>');
// console.log(test.innerHTML +='<a href="#">js</a>');  
//   exrcise dom
// const sr=document.querySelector('.article')
// const tags=document.querySelector('.article h1')
//  console.log(tags.innerHTML ='HELLO DIV FROM JAVASCRIPT DOM');
//  const link=document.querySelector('.article a')
//  console.log(link.innerHTML =' GET STARTED');

//  console.log(sr.outerHTML);
const btn = document.querySelector(".ajouter");
const mod = document.querySelector(".modifier");
var table = document.getElementById('table');
var titre = document.getElementById('titre');
var auteur = document.getElementById('auteur');
var prix = document.getElementById('prix');
var t = document.querySelector("input[name='fav_language']");
var langue = document.getElementById('langue');
var date = document.getElementById('date');
btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (auteur.value == "") {
        auteur.style.border = '2px solid red';
    } else {
        auteur.style.border = '2px solid green';
    } if (prix.value == "") {
        prix.style.border = '2px solid red';
    } else {
        prix.style.border = '2px solid green';
    }
    if (date.value === "") {
        date.style.border = '2px solid red';
    } else {
        date.style.border = '2px solid green';
    }
    if (titre.value.length > 30 || titre.value == "") {
        titre.style.border = '2px solid red';

    } else {
        if (parseInt(titre.value)) {
            titre.style.border = '2px solid red';
        } else {
            titre.style.border = '2px solid green';
        }
    }
});


const btnn = document.querySelector(".ajouter");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    var type = document.querySelector("input[name='fav_language']:checked");
    var get = table.rows.length;
    let row = table.insertRow(get);
    row.insertCell(0).innerHTML = titre.value;
    row.insertCell(1).innerHTML = auteur.value;
    row.insertCell(2).innerHTML = prix.value;
    row.insertCell(3).innerHTML = date.value;
    row.insertCell(4).innerHTML = langue.value;
    row.insertCell(5).innerHTML = type.value;
    row.insertCell(6).innerHTML =
        `<button type="button" value="edit"  ><i class="fas fa-edit"></i></button>
<button type="button" value="delete"  ><i class="fas fa-trash"></i></button>`

    titre.value="";
    auteur.value="";
    prix.value="";
});

table.addEventListener('click', (event) => {
    if (event.target.parentElement.value === 'delete' || event.target.value === 'delete') {
        if (confirm('voulez-vous supprimer l\'ouvrage?')) {
            // supprimer confirmation!
            event.target.closest('tr').remove();
        }
        
    }
});

table.addEventListener('click', (event) => {
    if (event.target.parentElement.value === 'edit' || event.target.value === 'edit') {
      titre.value = event.target.closest('tr').cells[0].innerHTML;
      auteur.value = event.target.closest('tr').cells[1].innerHTML;
      prix.value = event.target.closest('tr').cells[2].innerHTML;
      date.value = event.target.closest('tr').cells[3].innerHTML;
      langue.value = event.target.closest('tr').cells[4].innerHTML;
      
      btn.style.display = "none";
      mod.style.display = "block";

      mod.addEventListener("click", (e) => {
        e.preventDefault();
        var type = document.querySelector("input[name='fav_language']:checked");
        var get = table.rows.length;
        let row = event.target.closest('tr');
        row.cells[0].innerHTML = titre.value;
        row.cells[1].innerHTML = auteur.value;
        row.cells[2].innerHTML = prix.value;
        row.cells[3].innerHTML = date.value;
        row.cells[4].innerHTML = langue.value;
        row.cells[5].innerHTML = type.value;
        row.cells[6].innerHTML =
            `<button type="button" value="edit"  ><i class="fas fa-edit"></i></button>
    <button type="button" value="delete"  ><i class="fas fa-trash"></i></button>`;


    
        titre.value="";
        auteur.value="";
        prix.value="";

        btn.style.display = "block";
      mod.style.display = "none";
    });

    }
});
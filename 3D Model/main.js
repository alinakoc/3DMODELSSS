const toggle = document.querySelector('.toggle input')

toggle.addEventListener('click',()  => {
const onoff = toggle.parentNode.querySelector('.onoff')
onoff.textContent=toggle.checked ? 'ARKA':'ÖN'
})


const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

const ctx =document.getElementById("myChart").getContext("2d");
//Gradient Fill 
let gradient = ctx.createLinearGradient(0,0,0,400);
gradient.addColorStop(0,"rgba(58,123,213,1)");
gradient.addColorStop(1,"rgba(0,210,255,0.3)");

const labels = [
   "2022/05/01 15:03:51",
   "2022/05/08 14:51:26",
   "2022/06/22 14:34:00",

];

const data= {
    labels,
    datasets: [
{
    data:[34.0, 33.5, 33.0, 32.5, 32.0, 31.5, 30.5, 30,0],
    label:"sol",
    fill:true,
    backgroundColor: gradient,
    borderColor:"#fff"
    },
],
};

const config = {
    type:'line',
    data: data,
    options:{
        responsive:true,
        scales:{
          y:{
            ticks:{
              callback:function(value){
                return  +value+ ".5";
              }
              }
            }
          }
        },
};

const myChart = new Chart(ctx, config);





const cta =document.getElementById("myChart2").getContext("2d");
//Gradient Fill 
let color2 = cta.createLinearGradient(0,0,0,400);
gradient.addColorStop(0,"rgba(58,123,213,1)");
gradient.addColorStop(1,"rgba(0,210,255,0.3)");

const labels2 = [
   "2022/05/01 15:03:51",
   "2022/05/08 14:51:26",
   "2022/06/22 14:34:00",

];

const data2= {
    labels2,
    datasets2: [
{
    data2:[34.0, 33.5, 33.0, 32.5, 32.0, 31.5, 30.5, 30,0],
    label2:"sağ",
    fill2:true,
    backgroundColor2: gradient,
    borderColor2:"#fff"
    },
],
};

const config2 = {
    type2:'line',
    data2: data,
    options2:{
        responsive2:true,
        scales2:{
          y2:{
            ticks2:{
              callback2:function(value){
                return  +value+ ".5";
              }
              }
            }
          }
        },
};

const myChart2 = new Chart(cta, config);



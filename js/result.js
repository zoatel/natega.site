let st_name = document.getElementById('st_name');
let st_stn = document.getElementById('st_stn');
let sub_1_d = document.getElementById('sub_1_d');
let sub_1_r = document.getElementById('sub_1_r');
let sub_2_d = document.getElementById('sub_2_d');
let sub_2_r = document.getElementById('sub_2_r');
let sub_3_d = document.getElementById('sub_3_d');
let sub_3_r = document.getElementById('sub_3_r');
let sub_4_d = document.getElementById('sub_4_d');
let sub_4_r = document.getElementById('sub_4_r');
let sub_5_d = document.getElementById('sub_5_d');
let sub_5_r = document.getElementById('sub_5_r');
let sub_6_d = document.getElementById('sub_6_d');
let sub_6_r = document.getElementById('sub_6_r');
let fm_id = document.getElementById('fm_id');
let fm_ps_id = document.getElementById('fm_ps_id');
let rank_id = document.getElementById('rank_id');

var status1 = null;
var status2 = null;
var result = null;
var ranking = null;
window.onload = function(){
    CheckStatus();
    result = JSON.parse(localStorage.getItem('stn_natega'));
    ranking = JSON.parse(localStorage.getItem('stn_ranking'));
    st_name.innerText = result.S_N;
    st_stn.innerText = result.Se_Nu;
    sub_1_d.innerText = result.Subject_1;
    sub_1_r.innerText = ranking.Subject_1_Rank;
    sub_2_d.innerText = result.Subject_2;
    sub_2_r.innerText = ranking.Subject_2_Rank;
    sub_3_d.innerText = result.Subject_3;
    sub_3_r.innerText = ranking.Subject_3_Rank;
    sub_4_d.innerText = result.Subject_4;
    sub_4_r.innerText = ranking.Subject_4_Rank;
    sub_5_d.innerText = result.Subject_5;
    sub_5_r.innerText = ranking.Subject_5_Rank;
    sub_6_d.innerText = result.Subject_6;
    sub_6_r.innerText = ranking.Subject_6_Rank;
    fm_id.innerText = result.fullGrade;
    rank_id.innerText = ranking.fullGrade_Rank;
    fm_ps_id.innerText = Math.round(((result.fullGrade/750)*100) * 100)/100;

    var sub1p = (result.Subject_1/100)*100;
    var sub2p = (result.Subject_2/150)*100;
    var sub3p = (result.Subject_3/150)*100;
    var sub4p = (result.Subject_4/150)*100;
    var sub5p = (result.Subject_5/150)*100;
    var sub6p = (result.Subject_6/50)*100;

    const ctx = document.getElementById('barChart');

  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['التحليل العددى', 'الدوائر والأنظمة الالكترونية', 'هيكلة وتنظيم الحاسب', 'الاشارات والانظمة', 'هيكلة البيانات والخوارزميات', 'التفكير الابداعي'],
      datasets: [{
        label: 'Score in %',
        data: [sub1p, sub2p, sub3p, sub4p, sub5p, sub6p],
        borderWidth: 1
      }]
    },
    options: {
        scales: {
          r: {
            min: 0,
            max: 100,
            beginAtZero: true,
            angleLines: {
              display: true
            },
            ticks: {
              display: true,
              stepSize: 20
            }
          }
        }
      }
  });


  if(result.Subject_1 < 50){
    sub_1_d.style.color = "red";
  }
  if(result.Subject_2 < 75){
    sub_2_d.style.color = "red";
  }
  if(result.Subject_3 < 75){
    sub_3_d.style.color = "red";
  }
  if(result.Subject_4 < 75){
    sub_4_d.style.color = "red";
  }
  if(result.Subject_5 < 75){
    sub_5_d.style.color = "red";
  }
  if(result.Subject_6 < 25){
    sub_6_d.style.color = "red";
  }
}
function CheckStatus(){
    status1 = localStorage.getItem('stn_natega');
    status2 = localStorage.getItem('stn_ranking');
    if(status1 == null || status2 == null){
        window.location.href = "index.html";
    }
}




import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
      

const firebaseConfig = {
  apiKey: "AIzaSyDJVSI2k2wWdvIh0Lrk1X9JhBjZtqGadaA",
  authDomain: "result-9aa90.firebaseapp.com",
  projectId: "result-9aa90",
  storageBucket: "result-9aa90.appspot.com",
  messagingSenderId: "298390810001",
  appId: "1:298390810001:web:f88a8f1e9771800c227e30",
  measurementId: "G-8PPK5GM3EQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";

const db = getDatabase();
let top = null; 


function update(){
  const dbRef = ref(db);
  get(child(dbRef, "comp/top")).then((snapshot)=>{
        if(snapshot.exists()){
          top_compute(snapshot);
        }
        else{
          $.bootstrapGrowl("Error.",{
              type: "danger",
              offset: {from:"top",amount:70},
              align: "center",
              delay: 2500,
              allow_dismiss: false,
              stackup_spacing: 10
            });
        }
      });

}
function top_compute(x){
  var first = 1;
  var second = 1;
  var third = 1;
  var rest_rank = 0;
  for (var i = 1; x.child(i.toString()).child('fullGrade_Rank').val() <= 3; i++) {
    var t = x.child(i.toString()).child('fullGrade_Rank').val();
    if(t == '1'){
      var temp_row = 'rank_'+t+'_'+first+'_'+'row';
      var temp_name = 'rank_'+t+'_'+first+'_'+'name';
      var temp_grade = 'rank_'+t+'_'+first+'_'+'grade';
      first += 1;
      document.getElementById(temp_name).innerText = x.child(i.toString()).child('S_N').val();
      document.getElementById(temp_grade).innerText = x.child(i.toString()).child('fullGrade').val();
      document.getElementById(temp_row).style.display = "flex";
    }else if(t == '2'){
      var temp_row = 'rank_'+t+'_'+second+'_'+'row';
      var temp_name = 'rank_'+t+'_'+second+'_'+'name';
      var temp_grade = 'rank_'+t+'_'+second+'_'+'grade';
      second += 1;
      document.getElementById(temp_name).innerText = x.child(i.toString()).child('S_N').val();
      document.getElementById(temp_grade).innerText = x.child(i.toString()).child('fullGrade').val();
      document.getElementById(temp_row).style.display = "flex";
    }else if(t == '3'){
      var temp_row = 'rank_'+t+'_'+third+'_'+'row';
      var temp_name = 'rank_'+t+'_'+third+'_'+'name';
      var temp_grade = 'rank_'+t+'_'+third+'_'+'grade';
      third += 1;
      document.getElementById(temp_name).innerText = x.child(i.toString()).child('S_N').val();
      document.getElementById(temp_grade).innerText = x.child(i.toString()).child('fullGrade').val();
      document.getElementById(temp_row).style.display = "flex";
    }
  }
  for (var i = first; i <= 3; i++) {
    var temp_row = 'rank_'+1+'_'+i+'_'+'row';
    document.getElementById(temp_row).remove();
  }
  for (var i = second; i <= 3; i++) {
    var temp_row = 'rank_'+2+'_'+i+'_'+'row';
    document.getElementById(temp_row).remove();
  }
  for (var i = third; i <= 3; i++) {
    var temp_row = 'rank_'+3+'_'+i+'_'+'row';
    document.getElementById(temp_row).remove();
  }
  for (var i = 4; x.child(i.toString()).child('fullGrade_Rank').val() <= 50; i++) {
    var temp_row = 'rank_'+i+'_'+'row';
    var temp_id = 'rank_'+i+'_'+'id';
    var temp_name = 'rank_'+i+'_'+'name';
    var temp_grade = 'rank_'+i+'_'+'grade';
    rest_rank = i;
    document.getElementById(temp_id).innerText = x.child(i.toString()).child('fullGrade_Rank').val();
    document.getElementById(temp_name).innerText = x.child(i.toString()).child('S_N').val();
    document.getElementById(temp_grade).innerText = x.child(i.toString()).child('fullGrade').val();
    document.getElementById(temp_row).style.display = "flex";
  }
  for (var i = rest_rank + 1; i <= 100; i++) {
    var temp_row = 'rank_'+i+'_'+'row';
    document.getElementById(temp_row).remove();
  }
}


window.onload = function(){
  update();
}

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





const stat_btn = document.getElementById('stat_btn');
const st_n = document.getElementById('st_id');
const search = document.getElementById('search_btn');
const rank = document.getElementById('rank_btn');

window.onload = function(){
    localStorage.removeItem('stn_natega');
    localStorage.removeItem('stn_ranking');
}


function set_st(st){
    localStorage.setItem('stn_natega', JSON.stringify(st));
}
function set_rank(st){
    localStorage.setItem('stn_ranking', JSON.stringify(st));
}

function show_stat(){
    window.location.href = "statistics.html"
}
function show_rank(){
    window.location.href = "ranking.html"
}
function get_res(){
    const dbRef = ref(db);


    get(child(dbRef, "comp/result/"+ st_n.value)).then((snapshot)=>{
          if(snapshot.exists()){
            set_st(snapshot.val());
            get(child(dbRef, "comp/ranking/"+ st_n.value)).then((snapshot)=>{
                if(snapshot.exists()){
                    set_rank(snapshot.val());
                }else{
                    $.bootstrapGrowl("Error",{
                        type: "danger",
                        offset: {from:"top",amount:70},
                        align: "center",
                        delay: 2500,
                        allow_dismiss: false,
                        stackup_spacing: 10
                      });
                  }
            });
            $.bootstrapGrowl("Hold on, we are getting your Natega!",{
                type: "success",
                offset: {from:"top",amount:70},
                align: "center",
                delay: 1300,
                allow_dismiss: false,
                stackup_spacing: 10
            });
            setTimeout(() => {  window.location.href = "result.html" }, 1500);
          }
          else{
            $.bootstrapGrowl("The seating No. is incorrect or the result is blocked",{
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

search.addEventListener('click',get_res);
stat_btn.addEventListener('click',show_stat);
rank.addEventListener('click',show_rank);

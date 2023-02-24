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
function update(){
    const dbRef = ref(db);
    get(child(dbRef, "comp/statistics")).then((snapshot)=>{
          if(snapshot.exists()){
              project_1(snapshot.val().G);
              project_2(snapshot.val().A);
              project_3(snapshot.val().B);
              project_4(snapshot.val().C);
              project_5(snapshot.val().D);
              project_6(snapshot.val().E);
              project_7(snapshot.val().F); 
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

function project_1(x){
  const fm = document.getElementById('fm');
  new Chart(fm, {
    type: 'bar',
    data: {
      labels: ['0->50', '50->65', '65->75', '75->85', '85->100'],
      datasets: [{
        label: 'No. of students',
        data: [x.F,x.D,x.C,x.B,x.A],
        borderWidth: 1
      }, {
          type: 'line',
          label: 'No. of students',
          data: [x.F,x.D,x.C,x.B,x.A],
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
function project_2(x){
  const nu = document.getElementById('nu');
  new Chart(nu, {
    type: 'bar',
    data: {
      labels: ['0->50', '50->65', '65->75', '75->85', '85->100'],
      datasets: [{
        label: 'No. of students',
        data: [x.F,x.D,x.C,x.B,x.A],
        borderWidth: 1
      }, {
          type: 'line',
          label: 'No. of students',
          data: [x.F,x.D,x.C,x.B,x.A],
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
function project_3(x){
  const dsp = document.getElementById('dsp');
  new Chart(dsp, {
    type: 'bar',
    data: {
      labels: ['0->50', '50->65', '65->75', '75->85', '85->100'],
      datasets: [{
        label: 'No. of students',
        data: [x.F,x.D,x.C,x.B,x.A],
        borderWidth: 1
      }, {
          type: 'line',
          label: 'No. of students',
          data: [x.F,x.D,x.C,x.B,x.A],
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
function project_4(x){
  const ec = document.getElementById('ec');
  new Chart(ec, {
    type: 'bar',
    data: {
      labels: ['0->50', '50->65', '65->75', '75->85', '85->100'],
      datasets: [{
        label: 'No. of students',
        data: [x.F,x.D,x.C,x.B,x.A],
        borderWidth: 1
      }, {
          type: 'line',
          label: 'No. of students',
          data: [x.F,x.D,x.C,x.B,x.A],
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
function project_5(x){
  const ft = document.getElementById('ft');
  new Chart(ft, {
    type: 'bar',
    data: {
      labels: ['0->50', '50->65', '65->75', '75->85', '85->100'],
      datasets: [{
        label: 'No. of students',
        data: [x.F,x.D,x.C,x.B,x.A],
        borderWidth: 1
      }, {
          type: 'line',
          label: 'No. of students',
          data: [x.F,x.D,x.C,x.B,x.A],
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
function project_6(x){
  const ct = document.getElementById('ct');
  
  new Chart(ct, {
    type: 'bar',
    data: {
      labels: ['0->50', '50->65', '65->75', '75->85', '85->100'],
      datasets: [{
        label: 'No. of students',
        data: [x.F,x.D,x.C,x.B,x.A],
        borderWidth: 1
      }, {
          type: 'line',
          label: 'No. of students',
          data: [x.F,x.D,x.C,x.B,x.A],
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
function project_7(x){
  const ffe = document.getElementById('ffe');
  new Chart(ffe, {
    type: 'bar',
    data: {
      labels: ['0->50', '50->65', '65->75', '75->85', '85->100'],
      datasets: [{
        label: 'No. of students',
        data: [x.F,x.D,x.C,x.B,x.A],
        borderWidth: 1
      }, {
          type: 'line',
          label: 'No. of students',
          data: [x.F,x.D,x.C,x.B,x.A],
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}


window.onload = function(){
  update();
}











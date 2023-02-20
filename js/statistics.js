const fm = document.getElementById('fm');

new Chart(fm, {
  type: 'bar',
  data: {
    labels: ['0->50', '50->65', '65->75', '75->85', '85->100'],
    datasets: [{
      label: 'No. of students',
      data: [3,39,77,68,17],
      borderWidth: 1
    }, {
        type: 'line',
        label: 'No. of students',
        data: [3,39,77,68,17],
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
const nu = document.getElementById('nu');

new Chart(nu, {
  type: 'bar',
  data: {
    labels: ['0->50', '50->65', '65->75', '75->85', '85->100'],
    datasets: [{
      label: 'No. of students',
      data: [0,35,97,57,15],
      borderWidth: 1
    }, {
        type: 'line',
        label: 'No. of students',
        data: [0,35,97,57,15],
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
const dsp = document.getElementById('dsp');

new Chart(dsp, {
  type: 'bar',
  data: {
    labels: ['0->50', '50->65', '65->75', '75->85', '85->100'],
    datasets: [{
      label: 'No. of students',
      data: [0,5,15,44,140],
      borderWidth: 1
    }, {
        type: 'line',
        label: 'No. of students',
        data: [0,5,15,44,140],
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
const ec = document.getElementById('ec');

new Chart(ec, {
  type: 'bar',
  data: {
    labels: ['0->50', '50->65', '65->75', '75->85', '85->100'],
    datasets: [{
      label: 'No. of students',
      data: [39,107,40,15,3],
      borderWidth: 1
    }, {
        type: 'line',
        label: 'No. of students',
        data: [39,107,40,15,3],
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
const ft = document.getElementById('ft');

new Chart(ft, {
  type: 'bar',
  data: {
    labels: ['0->50', '50->65', '65->75', '75->85', '85->100'],
    datasets: [{
      label: 'No. of students',
      data: [6,16,41,57,84],
      borderWidth: 1
    }, {
        type: 'line',
        label: 'No. of students',
        data: [6,16,41,57,84],
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
const ct = document.getElementById('ct');

new Chart(ct, {
  type: 'bar',
  data: {
    labels: ['0->50', '50->65', '65->75', '75->85', '85->100'],
    datasets: [{
      label: 'No. of students',
      data: [44,87,52,17,4],
      borderWidth: 1
    }, {
        type: 'line',
        label: 'No. of students',
        data: [44,87,52,17,4],
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
const ffe = document.getElementById('ffe');

new Chart(ffe, {
  type: 'bar',
  data: {
    labels: ['0->50', '50->65', '65->75', '75->85', '85->100'],
    datasets: [{
      label: 'No. of students',
      data: [9,24,33,80,58],
      borderWidth: 1
    }, {
        type: 'line',
        label: 'No. of students',
        data: [9,24,33,80,58],
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
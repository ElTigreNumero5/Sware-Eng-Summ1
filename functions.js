export function getAttendData (url, userTarget) {
// this function fetches the (for now) hardcoded attendance data 
    return fetch(url) // return needed to allow chaining this and the chart build function
        .then(response => response.text())  // when fetch completes convert response to text
        .then(text => {  // using that text
            // strip wspace, split into array of rows, ignore first row col headings
            const rows = text.trim().split('\n').slice(1);  
            // empty arrays for each col, 
            const labels = [];
            const targets = [];
            const attends = [];
            // loop each row, split on commas, get each value and assign to array
            rows.forEach(row => {
                const [label, target, attend] = row.split(',');
                labels.push(label);
                // for targets, use the user entered value if it exists, else hardcoded val
                targets.push(userTarget ?? +target);
                attends.push(+attend);
            });
            // output the resulting data structure
            return {labels, targets, attends};
        });
};




export function buildChart ({labels, targets, attends}) {
    // this function builds the chart using the data output from getAttendData()
    const ctx = document.getElementById('historic_attend_chart');  
    // create a new chart
    new Chart(ctx, {
        type: 'bar',  // a bar chart
        data: {
            labels: labels,  // y-axis is the labels data
            datasets: [
                {label: 'Attendance %', 
                data: attends,  // attendance data
                borderWidth: 1,
                backgroundColor: '#773D98'
                },
                {label: 'Target %',
                data: targets,  // target data
                type: 'line',
                borderColor: '#AEA4B2',
                backgroundColor: 'transparent',
                borderWidth: 2,
                pointRadius: 0
                }
            ]
        },
        options: {  // here's where all the chart options are set
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                customCanvasBackgroundColor: {
                    color: '#404040'
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#AEA4B2',
                        font: {
                            family: 'KodeMono',
                            size: 10
                        }
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#AEA4B2',
                        font: {
                            family: 'KodeMono',
                            size: 10
                        }
                    }
                }
            }
        }
    })
};




const ctx = document.getElementById('ecgChart').getContext('2d');

const data = {
    labels: [],
    datasets: [{
        label: 'ECG Signal',
        data: [],
    }]
};

const chart = new Chart(ctx, {
    type: 'line',
    data: data,
});

async function fetchData() {

    const response = await fetch('/ecg-data');
    const result = await response.json();

    if(data.labels.length > 50){
        data.labels.shift();
        data.datasets[0].data.shift();
    }

    data.labels.push('');
    data.datasets[0].data.push(result.value);

    chart.update();
}

setInterval(fetchData, 100);
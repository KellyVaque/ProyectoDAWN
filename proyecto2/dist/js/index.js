

generarOfertasOrigin();
generarOfertasSteam();



async function generarOfertasSteam() {
    const response = await fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1");
    console.log(response);
    const data = await response.json();
    console.log(data);
    var result = [];


    labels = [];
    values = [];
    for (var i in data) {
        labels.push(data[i].title);
        values.push(data[i].salePrice);
    }

    console.log(labels);
    console.log(values);


    new Chart(document.getElementById("line-chart-steam"), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Precio (dolares)",
                    data: values
                }
            ]
        },
        options: {
            legend: { display: false },

        }
    });

}






async function generarOfertasOrigin() {
    const response = await fetch("https://www.cheapshark.com/api/1.0/deals?storeID=8");
    console.log(response);
    const data = await response.json();
    console.log(data);
    var result = [];


    labels = [];
    values = [];
    for (var i in data) {
        labels.push(data[i].title);
        values.push(data[i].salePrice);
    }

    console.log(labels);
    console.log(values);


    new Chart(document.getElementById("line-chart"), {
        type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Precio (dolares)",
                        data: values
                    }
                ]
            },
            options: {
                legend: { display: false },

            }
        });

    }


    
    

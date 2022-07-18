

loadTable();
//getgamesstore();

var tabla = document.getElementById('data');


async function loadTable() {
    const response = await fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1");
    console.log(response);
    const data = await response.json();
    console.log(data);

    var temp = "";
    for (var i in data) {
        temp += "<tr>";
        temp += "<td>" + data[i].title + "</td>";
        temp += "<td>" + data[i].salePrice + "</td>";
        temp += "<td>" + data[i].steamRatingPercent + "</td>";
        temp += "<td>" + data[i].metacriticScore + "</td>";
        temp += `<td></tr>`;

        
    }
    return tabla.innerHTML = temp;




}



var select = document.getElementById('games');

select.addEventListener('change', () => {
    console.log(select.options[select.selectedIndex].value)
})




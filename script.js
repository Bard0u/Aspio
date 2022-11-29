google.charts.load('current', {
    'packages': ['geochart'],
  });
google.charts.setOnLoadCallback(drawRegionMap);


async function drawRegionMap(){
var json = await obter_inf();
var data = google.visualization.arrayToDataTable(json);

var options = {
    backgroundColor: "none",
    dataMode:'regions',
    colorAxis: {colors: ['#F7988F','#F55345','#D64F44','#EB5042','#C24236']}
};

var place = document.getElementById('meu-mapa');

var chart = new google.visualization.GeoChart(place);

chart.draw(data, options);
}

async function obter_inf(){
var inf= await fetch('https://covid19-brazil-api.vercel.app/api/report/v1/countries')
var data= await inf.json();

console.log(data);

var response = [];
response.push(['Country','Confirmed', 'Deaths']);

for(let i=0;i<data.data.length;i++){
    response.push(
        [
            data.data[i].country,
            data.data[i].confirmed,
            data.data[i].deaths
        ]
    );
 
}
console.log(response);
return response;

}

//grafico de pizza

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

async function drawChart(){
    var json= await pie();
    var data = google.visualization.arrayToDataTable(json);

    var options = {
        backgroundColor: 'none',
        is3D:true,
        colors:['#EFF5F5','#EB6541']
        
    };
    var chart = new google.visualization.PieChart(document.getElementById("grafico-pizza"));
    chart.draw(data,options);
}

async function pie(){
    var inf= await fetch('https://covid19-brazil-api.now.sh/api/report/v1/countries');
    var data = await inf.json();
    console.log(data);
    var response=[];
    var deaths=0;
    var confirmed=0;
    var recovered=0;

    for(let i=0;i<data.data.length; i++){
        deaths += data.data[i].deaths,
        confirmed += data.data[i].confirmed,
        recovered += data.data[i].recovered
    }

    response =
    [
        ['Status','Total'],
        ['Mortes',deaths],
        ['Confirmados',confirmed],
        ['Recuperados',recovered]
    ];
    console.log(response);
    return response;
}


//tabela grafica

async function carregarDados() {
    // Escondendo a div de erro, caso ela esteja visível
    const divErro = document.getElementById('div-erro');
    divErro.style.display = 'none';

    // Chamando a API para obter os dados
    await fetch('https://covid19-brazil-api.now.sh/api/report/v1')     // Endpoint da API
        .then(response => response.json())                    // Obtendo a resposta da API
        .then(dados => prepararDados(dados))                  // Obtendo os dados
        .catch(e => exibirErro(e.message));                   // Obtendo o erro (se der erro)
}

// Função para mostrar mensagens de erro ao usuário
function exibirErro(mensagem) {
    // Mostrando a div de erro, caso ela esteja invisível
    const divErro = document.getElementById('div-erro');
    divErro.style.display = 'block';
    divErro.innerHTML = '<b>Erro ao acessar a API</b><br />' + mensagem;
}

// Função para preparar e exibir os dados
function prepararDados(dados) {
    if (dados != null) {
        // Limpando o HTML do elemento "linhas" (tbody da tabela)
        let linhas = document.getElementById('linhas');
        linhas.innerHTML = '';

        // Percorrendo todos os dados obtidos e inserindo o HTML da linha na tabela
        for (let i=0; i<dados['data'].length; i++) {
            let auxLinha = '';

            // Alterando as cores de fundo das linhas ímpares
            if (i%2 != 0)
                auxLinha = '<tr class="listra">';
            else
                auxLinha = '<tr>';

            auxLinha = auxLinha +   '<td>'+ dados['data'][i].uf + '</td>'+
            '<td>'+ dados['data'][i].state + '</td>'+
            '<td>'+ dados['data'][i].cases + '</td>'+
            '<td>'+ dados['data'][i].deaths + '</td>'+
            '<td>'+ dados['data'][i].suspects + '</td>'+
            '<td>'+ dados['data'][i].refuses + '</td>'+
            '</tr>',
             
            linhas.innerHTML = linhas.innerHTML + auxLinha;            
        }
    }
}







// mudar icones para branco
function muda() {
    let imagem = document.getElementById('casa1');
    imagem.src='imgs/casa-branca.png';
}

function volta() {
    let imagem = document.getElementById('casa1');
    imagem.src='imgs/casa.png';
}

function muda2() {
    let imagem = document.getElementById('info1');
    imagem.src='imgs/info-branco.png';
}
function volta2() {
    let imagem = document.getElementById('info1');
    imagem.src='imgs/info.png';
}

function muda3() {
    let imagem = document.getElementById('grupo1');
    imagem.src='imgs/grupo-branco.png';

}   
function volta3() {
    let imagem = document.getElementById('grupo1');
    imagem.src='imgs/grupo.png';
}

/////////////////////////////////////////////////////////////////////////////////////
function muda4() {
    let imagem = document.getElementById('casa2');
    imagem.src='imgs/casa-branca.png';
}

function volta4() {
    let imagem = document.getElementById('casa2');
    imagem.src='imgs/casa.png';
}

function muda5() {
    let imagem = document.getElementById('info2');
    imagem.src='imgs/info-branco.png';
}
function volta5() {
    let imagem = document.getElementById('info2');
    imagem.src='imgs/info.png';
}

function muda6() {
    let imagem = document.getElementById('grupo2');
    imagem.src='imgs/grupo-branco.png';

}   
function volta6() {
    let imagem = document.getElementById('grupo2');
    imagem.src='imgs/grupo.png';
}
///////////////////////////////////////////////////////////////////////////////////////
function muda7() {
    let imagem = document.getElementById('casa3');
    imagem.src='imgs/casa-branca.png';
}

function volta7() {
    let imagem = document.getElementById('casa3');
    imagem.src='imgs/casa.png';
}

function muda8() {
    let imagem = document.getElementById('info3');
    imagem.src='imgs/info-branco.png';
}
function volta8() {
    let imagem = document.getElementById('info3');
    imagem.src='imgs/info.png';
}

function muda9() {
    let imagem = document.getElementById('grupo3');
    imagem.src='imgs/grupo-branco.png';

}   
function volta9() {
    let imagem = document.getElementById('grupo3');
    imagem.src='imgs/grupo.png';
}
////////////////////////////////////////////////////////////////////////////////////////////

/* Como neste exercicio preciso puxar uma listagem de repositorios do github. vou criar uma variavel de pedido associada
ao objeto xmlhttprequest */

var pedido = new XMLHttpRequest();

/*Abri uma conexão usando o get com o URL da api. */
pedido.open('GET', 'https://api.github.com/repositories',true);

/*E acessei com JSON os dados que estão sendo "puxados" */
pedido.onload = function () {
    var data = JSON.parse(this.responseText);
    var statusHTML = '';
    $.each(data, function(i, status){
        statusHTML += '<tr>';
        statusHTML += '<td>' + status.id + '</td>';
        statusHTML += '<td>' + status.name + '</td>';
        statusHTML += '<td>' + status.html_url + '</td>';
        statusHTML += '<tr>';
    });
    $('tbody').html(statusHTML);
};
/* Mandando o pedido */
pedido.send();
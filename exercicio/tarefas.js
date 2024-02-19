$(document).ready(function() {

    let tarefas = []


    function adicionarTarefa(tarefa) {
        if (tarefas.includes(tarefa)) {
            return;
        }

        tarefas.push(tarefa);
        atualizaTarefas(tarefa);
    }

    function atualizaTarefas(tarefa) {
        $('.msg-tarefas').remove();
        const tarefaId = tarefas.indexOf(tarefa);
        const tarefaHTML = $(`
            <li id="${tarefaId}" title="Marcar como concluída">
                ${tarefa}
            </li>
        `)

        $(tarefaHTML).appendTo('ul')
        $(tarefaHTML).fadeIn(250);        
    }

    $('form').on('submit', function(e) {
        e.preventDefault(); 

        const novaTarefa = $('#nova-tarefa').val();
        adicionarTarefa(novaTarefa);

        $('#nova-tarefa').val('');
    });

        
    $(document).on('click', 'li', function(e) {
        const tarefaConcluida = $(`#${e.target.id}`);
        $(tarefaConcluida).addClass('tarefa-concluida');
    })
});



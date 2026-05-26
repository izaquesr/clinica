document.getElementById('scheduleForm').addEventListener('submit', function (e) {

    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const especialidade = document.getElementById('especialidade').value;
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;

    // NUMERO DA CLINICA
    const numeroWhats = '5511959105383';

    // FORMATAR DATA
    const dataObj = new Date(data + 'T00:00:00');

    const diasSemana = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
    ];

    const diaSemana = diasSemana[dataObj.getDay()];

    const dia = String(dataObj.getDate()).padStart(2, '0');
    const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
    const ano = dataObj.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;

    // MENSAGEM
    let mensagem =
`*Nova solicitação de agendamento*

👤 Nome: ${nome}
📞 WhatsApp: ${telefone}`;

    // ESPECIALIDADE OPCIONAL
    if (especialidade !== '') {
        mensagem += `\n🦷 Especialidade: ${especialidade}`;
    }

    mensagem += `

📅 Data: ${dataFormatada} (${diaSemana})
⏰ Horário: ${horario}`;

    const url = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');

    // MOSTRAR MENSAGEM DE SUCESSO
    this.style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';

});



// DATA MINIMA
const today = new Date().toISOString().split('T')[0];

const dateInput = document.querySelector('#data');

if (dateInput) {
    dateInput.setAttribute('min', today);
}



// MASCARA TELEFONE
const tel = document.querySelector('#telefone');

if (tel) {

    tel.addEventListener('input', function () {

        let v = this.value.replace(/\D/g, '').substring(0, 11);

        if (v.length > 2) {
            v = '(' + v.substring(0, 2) + ') ' + v.substring(2);
        }

        if (v.length > 10) {
            v = v.substring(0, 10) + '-' + v.substring(10);
        }

        this.value = v;

    });

}
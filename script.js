
// Hamburger menu
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.add('open');
});
document.getElementById('closeMenu').addEventListener('click', closeMobile);
function closeMobile() {
    document.getElementById('mobileMenu').classList.remove('open');
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => observer.observe(el));

// Set min date for datepicker
const dateInput = document.getElementById('data');
if (dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;
}

// WhatsApp form submit
function enviarAgendamento() {
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const endereco = document.getElementById('endereco').value.trim();
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;

    if (!nome || !telefone || !endereco || !data || !horario) {
        alert('Por favor, preencha todos os campos obrigatórios (*).');
        return;
    }

    const servico = document.getElementById('servico').value;
    const mensagem = document.getElementById('mensagem').value.trim();

    const dataFormatada = data ? new Date(data + 'T00:00:00').toLocaleDateString('pt-BR') : '';
    const horarioFormatado = horario || '';

    let msg = `Olá! Gostaria de agendar uma consulta na Clínica Lumina. 🌿\n\n`;
    msg += `*Nome:* ${nome}\n`;
    msg += `*Telefone:* ${telefone}\n`;
    msg += `*Endereço:* ${endereco}\n`;
    if (servico) msg += `*Serviço:* ${servico}\n`;
    msg += `*Data desejada:* ${dataFormatada}\n`;
    msg += `*Horário desejado:* ${horarioFormatado}\n`;
    if (mensagem) msg += `*Observações:* ${mensagem}\n`;
    msg += `\n_Aguardo a confirmação do horário. Obrigado(a)!_ 😊`;

    const numero = '5511959105383'; // ← Substitua pelo número real da clínica
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
}

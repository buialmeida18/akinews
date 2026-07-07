 document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleção dos elementos
    const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('sidebarMenu');
    const overlay = document.getElementById('sidebarOverlay');
    const searchBtn = document.getElementById('searchBtn');
    const searchBarContainer = document.getElementById('searchBarContainer');
    const searchInput = document.getElementById('searchInput');

    // 2. Lógica do Menu Hambúrguer
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            sidebar.classList.add('open');
            overlay.classList.add('active');
        });
    }

    const fecharMenu = () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    };

    if (overlay) overlay.addEventListener('click', fecharMenu);
    document.getElementById('closeBtn')?.addEventListener('click', fecharMenu);

    // 3. CENTRAL DE BUSCA (Busca na Internet)
    // Quando clicar na lupa, mostra/esconde a barra
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            searchBarContainer.classList.toggle('active');
            if (searchBarContainer.classList.contains('active')) {
                searchInput.focus();
            }
        });
    }

    // Função que envia o que foi digitado para o Google
    function enviarBusca() {
        const termo = searchInput.value;
        if (termo.trim() !== "") {
            // Esta URL faz a busca no Google focada no seu termo
            const urlGoogle = `https://www.google.com/search?q=${encodeURIComponent(termo)}`;
            window.open(urlGoogle, '_blank');
        }
    }

    // Dispara a busca ao clicar no botão ou apertar Enter
    document.getElementById('searchSubmit')?.addEventListener('click', enviarBusca);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') enviarBusca();
    });
});

// --- FUNÇÃO PARA MANIPULAR O TÍTULO DA PÁGINA (Exemplo) ---
function mudarTituloPagina(novoTitulo) {
    document.title = novoTitulo + " | AKINews";
    document.querySelector('.article-title').innerText = novoTitulo;
}
const meusVideos = [
    { titulo: "Giro de Notícias - 06/07", arquivo: "assets/videos/giro_julho.mp4" },
    { titulo: "Entrevista Exclusiva", arquivo: "assets/videos/entrevista.mp4" }
];

function carregarVideos() {
    const container = document.getElementById('video-container');
    meusVideos.forEach(v => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>${v.titulo}</h3>
            <video controls width="100%" src="${v.arquivo}"></video>
        `;
        container.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', carregarVideos);

 
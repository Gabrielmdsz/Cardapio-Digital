// Base de dados estruturada a partir do PDF fornecido
const menuData = [
    {
        id: "tapiocas-salgadas",
        title: "Tapiocas Salgadas",
        image: "https://i.pinimg.com/736x/a1/77/22/a177220e5c19d1e3adcf1047022f5964.jpg",
        items: [
            { name: "Coco", price: "R$ 8,00", rendada: "R$ 10,00" },
            { name: "Queijo Coalho", price: "R$ 9,00", rendada: "R$ 11,00" },
            { name: "Coco C/ Queijo", price: "R$ 10,00", rendada: "R$ 13,00" },
            { name: "Pizza", desc: "Queijo Coalho, Tomate e Orégano", price: "R$ 10,00", rendada: "R$ 13,00" },
            { name: "Charque", price: "R$ 15,00", rendada: "R$ 17,00" },
            { name: "Charque C/ Catupiry", price: "R$ 17,00", rendada: "R$ 20,00" },
            { name: "Frango", price: "R$ 10,00", rendada: "R$ 13,00" },
            { name: "Frango C/ Queijo", price: "R$ 13,00", rendada: "R$ 16,00" },
            { name: "Frango C/ Catupiry", price: "R$ 14,00", rendada: "R$ 16,00" },
            { name: "Calabresa", price: "R$ 10,00", rendada: "R$ 15,00" },
            { name: "Calabresa C/ Queijo", price: "R$ 12,00", rendada: "R$ 16,00" },
            { name: "Carne de sol", price: "R$ 15,00", rendada: "R$ 17,00" },
            { name: "Carne de sol C/ Queijo", price: "R$ 17,00", rendada: "R$ 20,00" }
        ]
    },
    {
        id: "tapiocas-doces",
        title: "Tapiocas Doces",
        image: "https://img77.uenicdn.com/image/upload/v1571244008/service_images/shutterstock_1151228951.jpg",
        items: [
            { name: "Beijinho", desc: "Coco C/ leite condensado", price: "R$ 12,00", rendada: "R$ 13,00" },
            { name: "Sensação", desc: "Coco e doce de leite", price: "R$ 10,00", rendada: "R$ 13,00" },
            { name: "Prestígio", desc: "Coco C/ chocolate", price: "R$ 10,00", rendada: "R$ 15,00" },
            { name: "Nutella C/ Coco", price: "R$ 10,00", rendada: "R$ 15,00" },
            { name: "Nutella C/ Banana", price: "R$ 12,00", rendada: "R$ 17,00" },
            { name: "Cartola", desc: "Banana, Canela e Queijo Coalho", price: "R$ 10,00", rendada: "R$ 17,00" },
            { name: "Romeu e Julieta", price: "R$ 10,00", rendada: "R$ 15,00" },
            { name: "Queijo C/ Leite Condensado", price: "R$ 10,00", rendada: "R$ 15,00" }
        ]
    },
    {
        id: "salgados",
        title: "Salgados / Sanduíches",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        items: [
            { name: "Queijo Quente", price: "R$ 8,00" },
            { name: "Misto Quente", price: "R$ 10,00" },
            { name: "Coxinha", price: "R$ 8,00" },
            { name: "Empada de Frango", price: "R$ 8,00" },
            { name: "Empada de Bacalhau", price: "R$ 9,00" },
            { name: "Pastel de Forno (frango)", price: "R$ 6,00" },
            { name: "Pastel de Forno (queijo)", price: "R$ 6,00" },
            { name: "Croissant Frango", price: "R$ 6,00" },
            { name: "Croissant Queijo", price: "R$ 6,00" },
            { name: "Croissant Misto", price: "R$ 6,00" }
            
        ]
    },
    {
        id: "sopas",
        title: "Sopas (500g)",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        items: [
            { name: "Carne C/ Legumes", price: "R$ 14,00" },
            { name: "Canja de Galinha", price: "R$ 14,00" },
            { name: "Feijão", price: "R$ 14,00" },
            { name: "Creme de Abóbora C/ Frango", price: "R$ 14,00" },
            { name: "Creme de Alho-Poró", price: "R$ 15,00" },
            { name: "Creme de Cebola", price: "R$ 14,00" },
            { name: "Caldo de Quenga", price: "R$ 14,00" },
            { name: "Caldo Verde", price: "R$ 15,00" },
            { name: "Milho de Xerém C/ Frango", price: "R$ 14,00" }
        ]
    },
    {
        id: "refeicoes",
        title: "Refeições Prontas",
        image: "https://images.unsplash.com/photo-1619895092538-128341789043?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        items: [
            { name: "Lasanha de Carne (500g)", price: "R$ 22,00" },
            { name: "Lasanha de Frango (500g)", price: "R$ 21,00" }
        ]
    },
    {
        id: "bebidas",
        title: "Bebidas",
        image: "https://img.magnific.com/fotos-gratis/refrigerante-colorido-bebe-tiro-macro_53876-32239.jpg?semt=ais_hybrid&w=740&q=80",
        items: [
            { name: "Água Mineral S/gás", price: "R$ 3,00" },
            { name: "Água Mineral C/gás", price: "R$ 4,50" },
            { name: "H2O", price: "R$ 8,00" },
            { name: "Sucos Polpa 350ml", price: "R$ 8,00" },
            { name: "Sucos Polpa c/leite 350ml", price: "R$ 10,00" },
            { name: "Refrigerante (Lata)", price: "R$ 8,00" },
            { name: "Refrigerante 250ml", price: "R$ 4,50" },
            { name: "Café Coado 75ml", price: "R$ 3,00" },
            { name: "Café Coado 120ml", price: "R$ 4,00" },
            { name: "Café Coado 180ml", price: "R$ 5,00" },
            { name: "Café C/Leite 180ml", price: "R$ 6,00" }
        ]
    }
];

const menuContainer = document.getElementById('menu-container');
const navContainer = document.getElementById('nav-container');

// Função para renderizar o menu
function renderMenu() {
    menuData.forEach((category) => {
        // Criar botão de navegação
        const navBtn = document.createElement('button');
        navBtn.className = 'nav-btn';
        navBtn.textContent = category.title;
        navBtn.onclick = () => {
            document.getElementById(category.id).scrollIntoView({ behavior: 'smooth' });
        };
        navContainer.appendChild(navBtn);

        // Criar estrutura da seção
        const section = document.createElement('section');
        section.className = 'category-section';
        section.id = category.id;

        // Criar cabeçalho da categoria com imagem genérica
        const headerHTML = `
            <div class="category-header">
                <img src="${category.image}" alt="${category.title}" class="category-image">
                <div class="category-overlay"></div>
                <h2 class="category-title">${category.title}</h2>
            </div>
        `;

        // Criar itens
        let itemsHTML = '<div class="items-grid">';
        category.items.forEach(item => {
            const descHTML = item.desc ? `<p class="item-desc">${item.desc}</p>` : '';
            const rendadaHTML = item.rendada ? `<span class="price-sub">Rendada: ${item.rendada}</span>` : '';
            
            // Para as tapiocas, mostra se o valor principal é da tradicional
            const mainPriceLabel = item.rendada ? `<span class="price-sub" style="color:var(--text-muted);">Tradicional:</span>` : '';

            itemsHTML += `
                <div class="item-card">
                    <div class="item-info">
                        <h3 class="item-name">${item.name}</h3>
                        ${descHTML}
                    </div>
                    <div class="item-price-container">
                        ${mainPriceLabel}
                        <span class="price-main">${item.price}</span>
                        ${rendadaHTML}
                    </div>
                </div>
            `;
        });
        itemsHTML += '</div>';

        // Anexar conteúdo na seção e a seção no main
        section.innerHTML = headerHTML + itemsHTML;
        menuContainer.appendChild(section);
    });
}

// Inicializar renderização
renderMenu();
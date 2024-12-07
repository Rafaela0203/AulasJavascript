// Selecionar todos os botões de adicionar ao carrinho
const botoesAdicionar = document.querySelectorAll(".adicionar-btn");

// Selecionar elementos do carrinho e total
const listaCarrinho = document.getElementById("lista-carrinho");
const totalElemento = document.getElementById("total");
const finalizarCompra = document.getElementById("finalizar-compra");

let total = 0; // Total inicial

// Adicionar evento a cada botão
botoesAdicionar.forEach((botao) => {
  botao.addEventListener("click", () => {
    const produto = botao.dataset.produto;
    const preco = parseFloat(botao.dataset.preco);

    // Criar o item do carrinho
    const item = document.createElement("li");
    item.textContent = `${produto} - R$ ${preco.toFixed(2)}`;

    // Criar o botão de remover
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.addEventListener("click", () => {
      listaCarrinho.removeChild(item); // Remover o item do carrinho
      total -= preco; // Atualizar o total
      totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
    });

    item.appendChild(botaoRemover); // Adicionar o botão ao item
    listaCarrinho.appendChild(item); // Adicionar o item ao carrinho

    // Atualizar o total
    total += preco;
    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
  });
});

// Finalizar compra
finalizarCompra.addEventListener("click", () => {
  if (total === 0) {
    alert("Seu carrinho está vazio!");
  } else {
    alert(`Compra finalizada! Total: R$ ${total.toFixed(2)}`);
    listaCarrinho.innerHTML = ""; // Limpar carrinho
    total = 0; // Resetar total
    totalElemento.textContent = `Total: R$ 0,00`;
  }
});

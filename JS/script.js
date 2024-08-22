document.getElementById('introducao').addEventListener('click', () => {
 window.location.href = '../index.html';
});

const container = document.querySelector('.container')
const littleCarContainer = document.querySelector('.littleCar-Container');

const finalizarCompra = document.createElement('button');
finalizarCompra.id = 'finalizarCompra';
finalizarCompra.innerHTML = 'Finalizar compra';
littleCarContainer.appendChild(finalizarCompra);

document.querySelector('.nav-Icon').addEventListener('click', () => {
 littleCarContainer.classList.toggle('disabled');
 container.classList.toggle('blur')
});

xiaomiPhones.map((item, index) => {
 const shopCard = document.querySelector('.shop-Container .shop').cloneNode(true);

 shopCard.querySelector('#shop-Image').src = item.image;
 shopCard.querySelector('#phoneID').innerHTML = item.model;
 shopCard.querySelector('span').innerHTML = `R$ ${item.fakePrice}`;
 shopCard.querySelector('#price').innerHTML = `R$ ${item.averagePrice}`;

 document.querySelector('.shop-Container').append(shopCard);

 shopCard.querySelector('button').addEventListener('click', function () {
  const shopButton = this
  const adicionado = shopCard.querySelector('.adicionado')

  const maxNumeros = littleCarContainer.querySelectorAll('.littleCar-Card').length;
  if (maxNumeros < 10) {

   if (shopButton.style.display = 'none') {
    adicionado.innerHTML = 'Já adicionado ao carrinho'
   }

   // criando os itens
   const littleCarCard = document.createElement('div');
   littleCarCard.classList.add('littleCar-Card');

   const produtoImage = document.createElement('img');
   produtoImage.id = 'produto-Image';
   produtoImage.src = item.image;

   const sellDiv = document.createElement('div');
   sellDiv.classList.add('sell');

   const h2Sell = document.createElement('h2');
   h2Sell.innerHTML = `${item.model}`;

   const h3Sell = document.createElement('h3');
   h3Sell.innerHTML = `R$ ${item.averagePrice}`;

   const excluirCompra = document.createElement('button');
   excluirCompra.id = 'excluirCompra';
   excluirCompra.innerHTML = 'X';

   littleCarCard.appendChild(produtoImage);
   littleCarCard.appendChild(sellDiv);
   sellDiv.appendChild(h2Sell);
   sellDiv.appendChild(h3Sell);
   sellDiv.appendChild(excluirCompra);

   littleCarContainer.insertBefore(littleCarCard, finalizarCompra);

   littleCarCard.querySelector('#excluirCompra').addEventListener('click', function () {
    littleCarCard.remove();
    shopButton.style.display = 'flex'
    adicionado.innerHTML = ''
   });
  } else {
   alert("Limite de 10 produtos no carrinho")
  }
 });
});

container.addEventListener('click', () => {
 littleCarContainer.classList.add('disabled');
 container.classList.remove('blur')
});

finalizarCompra.addEventListener('click', () => {
 let total = 0;
 let mensagem = "*Resumo da Compra:*\n\n";
 let pix = "\n\n*Pix:* ";
 const pixKey = 'andreluigi477@gmail.com'

 const itens = littleCarContainer.querySelectorAll('.littleCar-Card');
 if (itens.length > 0) {

  const itens = littleCarContainer.querySelectorAll('.littleCar-Card');
  itens.forEach(item => {
   const modelo = item.querySelector('h2').innerText;
   const preco = parseFloat(item.querySelector('h3').innerText.replace('R$', '').replace(',', '.'));
   total += preco;
   mensagem += `*${modelo}* - R$ ${preco.toFixed(2)}\n`;
  });

  mensagem += `\n*Total:* R$ ${total.toFixed(2)}`;
  pix += `${pixKey}`
  mensagem += pix

  const mensagemCodificada = encodeURIComponent(mensagem);

  window.open(`https://wa.me/5541999067307?text=${mensagemCodificada}`, '_blank');
 }
});

document.querySelector('.shop-Container .shop').remove();
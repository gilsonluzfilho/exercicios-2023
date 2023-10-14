const discussoesConteudo = document.querySelector(".discussions .content");
const h1Element = document.querySelector(".content h1");
const h2Element = document.querySelector(".content h2");
const buttonEnviar = document.createElement("button");
const iconeDeCriarElement = document.querySelector(".content .create-icon");
const createTopicButton = document.querySelector(".content .btn-create-topic");
const linhaDivisoriaElement = document.querySelector(".content .dividing-line");
const linhaDivisoria = document.createElement("img");
const buttonCriarNovoTopico = document.createElement("a");
const textoSecundario = document.createElement("p");
const secondCard = document.getElementById("second-card");

function expandSummary() {
  const conteudoOculto = document.querySelector(".summary-hidden");
  conteudoOculto.classList.toggle("hidden");

  if (conteudoOculto.classList.contains("hidden")) {
    this.textContent = "ver mais";
  } else {
    this.textContent = "ver menos";
  }
}

let isExpanded = false;
function expandTopic() {
  const hiddenCardContent = document.querySelectorAll(".hidden-card-content");
  const cards = document.querySelector(".cards");
  const cardFooter = secondCard.querySelector(".card-footer");
  const spans = cardFooter.querySelectorAll(".quantity-like-and-response");
  const buttonImage = cardFooter.querySelector(
    'img[src="assets/button-bg.svg"]'
  );

  if (isExpanded) {
    // Reverter as alterações quando já está expandido
    hiddenCardContent.forEach(function (element) {
      element.style.display = "none";
    });
    cards.style.gap = "1rem"; // Defina o valor de gap conforme necessário
    secondCard.style.marginTop = "0";
    spans[0].textContent = "1 like";
    spans[1].textContent = "1 resposta";
    buttonImage.style.marginLeft = "0"; // Defina o valor de marginLeft conforme necessário
  } else {
    // Fazer alterações quando não está expandido
    hiddenCardContent.forEach(function (element) {
      element.style.display = "block";
    });
    cards.style.gap = "0";
    secondCard.style.marginTop = "1.5rem";
    spans[0].textContent = "4 likes";
    spans[1].textContent = "4 respostas";
    buttonImage.style.marginLeft = "0.9rem"; // Defina o valor de marginLeft conforme necessário
  }

  // Alternar o estado de expansão
  isExpanded = !isExpanded;
}

function createTopic() {
  /* Selecionando elementos existentes */
  const iconsElement = document.querySelector(".content .icons");

  /* Escondendo elementos e alterando o h2 existente */
  iconsElement.style.display = "none";
  h1Element.style.display = "none";
  h2Element.textContent =
    "Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!";
  h2Element.style.marginTop = "1rem";
  iconeDeCriarElement.style.display = "none";
  createTopicButton.style.display = "none";

  if (!document.querySelector(".fill-topic")) {
    /* Criando novos elementos */
    const preencherTopicoDiv = document.createElement("form");
    preencherTopicoDiv.classList.add("fill-topic");

    const h3Elemento = document.createElement("h3");
    h3Elemento.textContent = "Assunto";

    const inputAssunto = document.createElement("input");
    inputAssunto.setAttribute("type", "text");
    inputAssunto.setAttribute(
      "placeholder",
      "Defina um tópico sucinto para notificar os autores..."
    );
    inputAssunto.classList.add("subject");

    const h4Elemento = document.createElement("h4");
    h4Elemento.textContent = "Conteúdo";

    const inputConteudo = document.createElement("input");
    inputConteudo.setAttribute("type", "text");
    inputConteudo.classList.add("input-conteudo");

    const barraInput = document.createElement("input");
    inputConteudo.setAttribute("type", "text");
    barraInput.id = "barra-input";

    buttonEnviar.textContent = "Enviar";
    buttonEnviar.id = "button-enviar";

    /* Adicionando novos elementos */
    preencherTopicoDiv.appendChild(h3Elemento);
    preencherTopicoDiv.appendChild(inputAssunto);
    preencherTopicoDiv.appendChild(h4Elemento);
    preencherTopicoDiv.appendChild(inputConteudo);
    preencherTopicoDiv.appendChild(barraInput);
    preencherTopicoDiv.appendChild(buttonEnviar);

    discussoesConteudo.appendChild(preencherTopicoDiv);
    discussoesConteudo.appendChild(linhaDivisoriaElement);
  }
}

function sendForm(event) {
  event.preventDefault();
  /* Selecionando elementos existentes */
  const preencherTopicoDiv = document.querySelector(".fill-topic");

  /* Escondendo elementos */
  preencherTopicoDiv.remove();
  linhaDivisoriaElement.style.display = "none";

  /* Criando novos elementos*/
  textoSecundario.textContent = "Descubra outros trabalhos!";
  textoSecundario.style.color = "#F48F44";
  textoSecundario.style.textAlign = "center";
  textoSecundario.style.fontFamily = "Quicksand";
  textoSecundario.style.fontSize = "1.4rem";
  textoSecundario.style.fontWeight = "500";
  textoSecundario.style.textDecorationLine = "underline";

  linhaDivisoria.src = "assets/dividing.svg";
  linhaDivisoria.style.width = "102rem";
  linhaDivisoria.style.margin = "7rem 1.4rem 0";
  linhaDivisoria.style.position = "relative";

  buttonCriarNovoTopico.classList.add("button-new-topic");
  buttonCriarNovoTopico.textContent = "criar novo tópico";

  /* Adicionando elementos a tela */
  h1Element.style.display = "block";
  h1Element.textContent = "Seu tópico foi enviado com sucesso! :D";

  h2Element.style.display = "block";
  h2Element.textContent =
    "Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!";
  h2Element.style.width = "80.5246rem";

  const divFeedback = document.createElement("div");
  divFeedback.classList.add("feedback-authors");
  const iconFeedback = document.createElement("img");
  iconFeedback.src = "assets/feedback.svg";
  iconFeedback.classList.add("img-feedback");
  const textFeedback = document.createElement("p");
  textFeedback.textContent = "Aguardando feedback dos autores";
  textFeedback.classList.add("text-feedback");
  const editarTopico = document.createElement("p");
  editarTopico.textContent = "Editar tópico";
  editarTopico.classList.add("edit-topic");

  divFeedback.appendChild(iconFeedback);
  divFeedback.appendChild(textFeedback);
  divFeedback.appendChild(editarTopico);

  discussoesConteudo.appendChild(textoSecundario);
  discussoesConteudo.appendChild(linhaDivisoria);
  discussoesConteudo.appendChild(buttonCriarNovoTopico);
  discussoesConteudo.appendChild(divFeedback);

  const cardClone = document.querySelector(".answered-topic").cloneNode(true);
  document.querySelector(".cards").appendChild(cardClone);
}

function criarNovoTopico() {
  buttonCriarNovoTopico.remove();
  linhaDivisoria.remove();
  linhaDivisoriaElement.remove();
  textoSecundario.remove();
  document.querySelector(".feedback-authors").remove();
  createTopic();
}

// Events
document
  .querySelector(".btn-create-topic")
  .addEventListener("click", createTopic);

document
  .querySelector("a.btn-show-more")
  .addEventListener("click", expandSummary);

document
  .querySelector(".answered-topic")
  .addEventListener("click", expandTopic);

buttonEnviar.addEventListener("click", sendForm);

buttonCriarNovoTopico.addEventListener("click", criarNovoTopico);

function uploadImage(event, inputElement) {
    const file = event.target.files[0];
    const card = inputElement.closest('.col-12'); 
    const imgElement = card.querySelector('img'); 

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imgElement.src = e.target.result; 
        };
        reader.readAsDataURL(file);
    }
}

function saveCardChanges(button) {
    const card = button.closest('.col-12'); // Encontra o card pai
    const imgElement = card.querySelector('img'); // Encontra a imagem dentro do card
    const titleElement = card.querySelector('.card-title'); // Encontra o título editado
    const textElement = card.querySelector('.card-text'); // Encontra o texto editado

    const imgSrc = imgElement.src; // Obtém o src da imagem
    const titleText = titleElement.innerText; // Obtém o título editado
    const cardText = textElement.innerText; // Obtém o texto editado

   
    console.log('Imagem:', imgSrc);
    console.log('Título:', titleText);
    console.log('Texto:', cardText);

    alert('Alterações salvas com sucesso!');
}





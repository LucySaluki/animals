document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-species');
  form.addEventListener('submit', handleFormSumbit);

  const deleteAll = document.querySelector('#delete-all');
  deleteAll.addEventListener('click', handleDeleteAll);

  const deleteItem = document.querySelector('#species');
  deleteItem.addEventListener('dblclick', handleDeleteOne);

  const imageItem = document.querySelector('#species');
  imageItem.addEventListener('mouseover', handleImage);

  const imageRemove = document.querySelector('#species');
  imageRemove.addEventListener('mouseout', handleRemoveImage);
});

const handleFormSumbit = function(event) {
    event.preventDefault();

    const speciesList = document.createElement('li');
    speciesList.classList.add('species-item');
    
    const newCommon = document.createElement('h3');
    newCommon.textContent = `Species: ${event.target.common.value}`;
    speciesList.appendChild(newCommon);

    const newScientific = document.createElement('h4');
    newScientific.classList.add('species-italic');
    newScientificValue=event.target.scientific.value
    newScientific.textContent = newScientificValue;
    newScientific.value = newScientificValue.substring(newScientificValue.lastIndexOf(" ") + 1);
    speciesList.appendChild(newScientific);

    const newRange = document.createElement('p');
    newRange.textContent = `Geographical range: ${event.target.range.value}`;
    speciesList.appendChild(newRange);

    const newStatus = document.createElement('h4');
    newStatus.textContent = event.target.status.value; 
    speciesList.appendChild(newStatus);

    const species = document.querySelector('#species');
    species.appendChild(speciesList);

    event.target.reset();
};

const handleDeleteAll = function (event) {
    const speciesList = document.querySelector('#species');
    speciesList.innerHTML='';
};

const handleDeleteOne = function (event) {
    this.removeChild(event.target);
};

const handleImage = function (event){

    if (event.target.classList.value ==='species-italic') {
        const parentItem = event.target.parentNode;
        const newImage = document.createElement('img');
        newImage.setAttribute("src", `images/${event.target.value}.jpg`);
        newImage.id ='image';
        parentItem.appendChild(newImage);
        newImage.addEventListener('error',handleErrorImage);
    };
};
const handleErrorImage= function(event){   
    const parentItem = event.target.parentNode;
    parentItem.removeChild(event.target);
    const newText = document.createElement('p');
    newText.classList.add('no-image');
    newText.id = 'image';
    newText.textContent="There is no image";
    parentItem.appendChild(newText);
};

const handleRemoveImage = function (event) {
    if (event.target.classList.value ==='species-italic') {
        const parentItem = event.target;
        const imageRemove = document.getElementById('image');
        imageRemove.remove();
    };
};

document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-species');
  form.addEventListener('submit', handleFormSumbit);

  const deleteAll = document.querySelector('#delete-all');
  deleteAll.addEventListener('click', handleDeleteAll);

  const deleteItem = document.querySelector('#species');
  deleteItem.addEventListener('dblclick', handleDeleteOne);
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
    newScientific.textContent = event.target.scientific.value;
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
document.addEventListener('DOMContentLoaded', () => {
  console.log("The page is loaded");

  const form = document.querySelector('#new-species');
  form.addEventListener('submit', handleFormSumbit);

  const deleteAll = document.querySelector('#delete-all');
  deleteAll.addEventListener('click', handleDeleteAll);
});

const handleFormSumbit = function(event) {
    event.preventDefault();
    const newCommon = event.target.common.value;
    const newScientific = event.target.scientific.value;
    const newRange = event.target.range.value;
    const newStatus = event.target.status.value;

    const newItem = document.createElement('li');
    newItem.textContent =`Common name: ${newCommon} Scientific name: ${newScientific} Range: ${newRange} IUCN Status: ${newStatus}.`;
    const speciesList=document.querySelector('ul');
    speciesList.appendChild(newItem);

    event.target.reset();
};

const handleDeleteAll = function (event) {
    const speciesList = document.querySelector('#species');
    speciesList.innerHTML='';
};
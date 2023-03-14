const { ipcRenderer } = require('electron');

const backButton = document.querySelector('#back-button');

backButton.addEventListener('click', () => {
  ipcRenderer.send('back-to-first-page');
});

ipcRenderer.on('form-data', (event, formData) => {
  const { idNumber, name, datuName, mobileNumber, address, contactPerson, contactNumber, imagePath } = formData;

  document.querySelector('#id-number').value = idNumber;
  document.querySelector('#name').value = name;
  document.querySelector('#datu-name').value = datuName;
  document.querySelector('#mobile-number').value = mobileNumber;
  document.querySelector('#address').value = address;
  document.querySelector('#contact-person').value = contactPerson;
  document.querySelector('#contact-number').value = contactNumber;
  document.querySelector('#uploaded-image').src = `file://${imagePath}`;
});

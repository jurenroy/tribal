const myForm = document.getElementById('my-form');
myForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the values of the form inputs and encode them for the URL
  const idNumber = encodeURIComponent(myForm.elements['id-number'].value);
  const name = encodeURIComponent(myForm.elements['name'].value);
  const datuName = encodeURIComponent(myForm.elements['datu-name'].value);
  const mobileNumber = encodeURIComponent(myForm.elements['mobile-number'].value);
  const address = encodeURIComponent(myForm.elements['address'].value);
  const contactPerson = encodeURIComponent(myForm.elements['contact-person'].value);
  const contactNumber = encodeURIComponent(myForm.elements['contact-number'].value);

  // Get the image file from the input element
  const imageFile = myForm.elements['image-file'].files[0];
  const reader = new FileReader();

  // When the image is loaded, encode it as a data URL and add it to the URL string
  reader.onload = function(event) {
    const imageUrl = encodeURIComponent(event.target.result);
    const url = `second.html?id-number=${idNumber}&name=${name}&datu-name=${datuName}&mobile-number=${mobileNumber}&address=${address}&contact-person=${contactPerson}&contact-number=${contactNumber}&image-file=${imageFile}`;
    window.location.href = url;
  };

  // Read the image file as a data URL
  reader.readAsDataURL(imageFile);
});

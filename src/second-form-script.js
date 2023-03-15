// Get the query string from the URL
const queryString = window.location.search;
// Parse the query string into a URLSearchParams object
const params = new URLSearchParams(queryString);

// Get the form data from the query string using the names of the form fields
const idNumber = params.get("id-number");
const name = params.get("name");
const datuName = params.get("datu-name");
const mobileNumber = params.get("mobile-number");
const address = params.get("address");
const contactPerson = params.get("contact-person");
const contactNumber = params.get("contact-number");
const imageFile = params.get("image-file");

// Set the form data to the HTML elements on the page
document.getElementById("id-number").textContent = idNumber;
document.getElementById("name").textContent = name;
document.getElementById("datu-name").textContent = datuName;
document.getElementById("mobile-number").textContent = mobileNumber;
document.getElementById("address").textContent = address;
document.getElementById("contact-person").textContent = contactPerson;
document.getElementById("contact-number").textContent = contactNumber;

// Set the image file to the image element on the page
const imgElement = document.getElementById('image-file');
imgElement.src = imageFile;

// Add a click event listener to the back button to navigate back to the first page
document.getElementById("back-button").addEventListener("click", () => {
  window.history.back();
});

const selectImg = document.querySelector("#select-img")
const uploadImg = document.querySelector("#upload-img")
const img = document.querySelector("img")

function uploadPic(){
  selectImg.click();
}

selectImg.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    img.src = reader.result;
  };
});

// Add a click event listener to the download button
document.getElementById("download-button").addEventListener("click", () => {
  // Trigger the click event of the hidden upload button to get the latest image data
  uploadImg.click();
});

// Add a change event listener to the hidden upload button
uploadImg.addEventListener("change", () => {
  // Get the latest image data from the image element
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  context.drawImage(img, 0, 0);
  imageData = canvas.toDataURL('image/png');
});

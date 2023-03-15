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

// Add a change event listener to the image upload input to read and display the selected image
document.getElementById("upload-button").addEventListener("click", (event) => {
const input = document.createElement('input');
input.type = 'file';
input.accept = 'image/*';
input.onchange = (e) => {
const file = e.target.files[0];
const reader = new FileReader();
reader.readAsDataURL(file);
reader.onload = () => {
const image = new Image();
image.src = reader.result;
image.onload = () => {
  const cropper = new Cropper(image, {
    aspectRatio: 1 / 1,
    crop(event) {
      const canvas = cropper.getCroppedCanvas({width: 200, height: 200});
      imgElement.src = canvas.toDataURL();
    },
  });
};
};
};
input.click();
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

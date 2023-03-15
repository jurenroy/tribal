const downloadBtn = document.getElementById('download-button');

downloadBtn.addEventListener('click', () => {
    // Select the elements to be downloaded
    const idInfo = document.getElementById('id-info');
    const contactInfo = document.getElementById('contact-info');
  
    // Use HTML2Canvas to create a canvas from the elements
    html2canvas(idInfo).then(canvas1 => {
      html2canvas(contactInfo).then(canvas2 => {
        // Create a new canvas to combine the two canvases
        const finalCanvas = document.createElement('canvas');
        finalCanvas.width = canvas1.width + canvas2.width;
        finalCanvas.height = Math.max(canvas1.height, canvas2.height);
        const ctx = finalCanvas.getContext('2d');
        ctx.drawImage(canvas1, 0, 0);
        ctx.drawImage(canvas2, canvas1.width, 0);

        // Get the image element from the page
        const imgElement = document.querySelector("img");
        
        // If the image data exists, draw it on the final canvas
        if (imgElement.src !== "") {
          const image = new Image();
          image.src = imgElement.src;
          image.onload = () => {
            ctx.drawImage(image, canvas1.width / 2 - image.width / 4, finalCanvas.height / 2 - image.height / 4, image.width / 2, image.height / 2);
            // Convert the canvas data to an image
            const imgData = finalCanvas.toDataURL('image/png');
  
            // Create a new link and initiate the download
            const link = document.createElement('a');
            link.download = 'my-image.png';
            link.href = imgData;
            link.click();
          };
        } else {
          // If the image data does not exist, convert the canvas data to an image
          const imgData = finalCanvas.toDataURL('image/png');
  
          // Create a new link and initiate the download
          const link = document.createElement('a');
          link.download = 'my-image.png';
          link.href = imgData;
          link.click();
        }
      });
    });
  });

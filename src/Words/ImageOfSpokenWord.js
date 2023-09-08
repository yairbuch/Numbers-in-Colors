const images = [];
export function searchAndDisplayImages(query) {
  const apiKey = "AIzaSyDdgF_ATwZTbwOwS7Ys4P32E7TdDZO9HkE";
  const cx = "121570243da2a42d2";
  const searchUrl = `https://www.googleapis.com/customsearch/v1?q=${query}&searchType=image&key=${apiKey}&cx=${cx}`;
  const imageContainer = document.getElementById("image-container");
  fetch(searchUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.items && data.items.length > 0) {
        const firstImage = data.items[0].link;
        const secondImage = data.items[1].link;
        const thirdImage = data.items[2].link;
        if (firstImage || secondImage || thirdImage) {
          //   const imageUrl = firstImage.link;
          //   const image = new Image();
          //   image.src = imageUrl;
          //   image.style.width = "100px";
          //   image.style.height = "100px";
          //   image.style.borderRadius = "50%";

          //   const imageUrl2 = secondImage.link;
          //   const image2 = new Image();
          //   image2.src = imageUrl2;
          //   image2.style.width = "100px";
          //   image2.style.height = "100px";
          //   image2.style.borderRadius = "50%";

          //   const imageUrl3 = thirdImage.link;
          //   const image3 = new Image();
          //   image3.src = imageUrl3;
          //   image3.style.width = "100px";
          //   image3.style.height = "100px";
          //   image3.style.borderRadius = "50%";

          //   // Display the image in the DOM.
          //   const imageContainer = document.getElementById("image-container");
          //   imageContainer.innerHTML = "";
          //   imageContainer.appendChild(image);
          //   imageContainer.appendChild(image2);
          //   imageContainer.appendChild(image3);

          function createCircleImage(imageUrl) {
            const image = new Image();
            image.src = imageUrl;
            image.style.width = "100px";
            image.style.height = "100px";
            image.style.borderRadius = "50%";
            image.style.position = "absolute";
            image.style.transition = "transform 0.5s ease-in-out";
            // image.classList.add("circle"); // Add the 'circle' class to the image
            imageContainer.appendChild(image); // Append the image to the document
            return image;
          }

          images.push(createCircleImage(firstImage));
          images.push(createCircleImage(secondImage));
          images.push(createCircleImage(thirdImage));
        } else {
          console.log("No image found for:", query);
        }
      } else {
        console.log("No image results found for:", query);
      }
    })
    .catch((error) => {
      console.error("Error searching for images:", error);
    });
}

export function animateCircles() {
  images.forEach((image, index) => {
    setTimeout(() => {
      image.style.transform = "translateY(330px)";
      setTimeout(() => {
        image.style.transform = "translateY(100px)";
      }, 500);
    }, index * 100); // Delay each image animation
  });
}

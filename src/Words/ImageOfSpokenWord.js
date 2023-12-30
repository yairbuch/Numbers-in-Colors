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
          function createCircleImage(imageUrl) {
            const image = new Image();
            image.src = imageUrl;
            image.style.width = "100px";
            image.style.height = "100px";
            image.style.borderRadius = "50%";
            image.style.position = "absolute";
            image.style.transition = "transform 0.5s ease-in-out";
            const index = images.length;
            image.style.left = `${index * 100}px`;

            imageContainer.style.display = "block";

            const containerWidth = imageContainer.clientWidth;
            const imageWidth = 150; // Width of the image
            const totalImageWidth = images.length * imageWidth;
            const leftPosition = (containerWidth - totalImageWidth) / 2;

            image.style.left = `${leftPosition + images.length * imageWidth}px`;

            imageContainer.appendChild(image);
            return image;
          }

          function repositionImages() {
            images.forEach((image, index) => {
              const containerWidth = imageContainer.clientWidth;
              const imageWidth = 300;
              const totalImageWidth = images.length * imageWidth;
              const leftPosition = (containerWidth - totalImageWidth) / 2;
              image.style.left = `${leftPosition + index * imageWidth}px`;
            });
          }

          // Attach the repositionImages function to the window's resize event
          window.addEventListener("resize", repositionImages);

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
    }, index * 100);
  });
}

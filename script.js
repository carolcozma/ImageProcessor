const API_KEY = "yuFkBgWNNkWVGNXGzbc88W4XsWrXiuGLhFVk9cI9";

document.addEventListener("DOMContentLoaded", function () {
  function convertToGrayscale(img) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0, img.width, img.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    const sliceSize = data.length / 4;
    for (let slice = 0; slice < 4; slice++) {
      setTimeout(() => {
        for (let i = slice * sliceSize; i < (slice + 1) * sliceSize; i += 4) {
          if ((i / 4) % canvas.width < canvas.width / 2) {
            const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            data[i] = avg; // red
            data[i + 1] = avg; // green
            data[i + 2] = avg; // blue
          }
        }
        ctx.putImageData(imageData, 0, 0);
        img.src = canvas.toDataURL();
      }, slice * 1000);
    }
  }

  function normalizeColors(img) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0, img.width, img.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    const sliceSize = data.length / 4;
    for (let slice = 0; slice < 4; slice++) {
      setTimeout(() => {
        for (let i = slice * sliceSize; i < (slice + 1) * sliceSize; i += 4) {
          if ((i / 4) % canvas.width < canvas.width / 2) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const sum = r + g + b;
            data[i] = (r / sum) * 255;
            data[i + 1] = (g / sum) * 240;
            data[i + 2] = (b / sum) * 255;
          }
        }
        ctx.putImageData(imageData, 0, 0);
        img.src = canvas.toDataURL();
      }, slice * 1000);
    }
  }

  async function fetchDogImage() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();

    const imageContainer = document.querySelector(".image-container");
    const childElement = document.querySelector('img');
    if (childElement) {
      imageContainer.removeChild(childElement);
    }
    let img = document.createElement("img");
    img.crossOrigin = "anonymous";
    img.onload = function () {
      imageContainer.appendChild(img);
    };
    img.src = data.message;

    return data;
  }

  let data;
  fetchDogImage().then((responseData) => {
    data = responseData;
  });

  const resetButton = document.querySelector(".reset-button");

  resetButton.addEventListener("click", function () {
    const img = document.querySelector("img");
    img.src = data.message;
  });

  const applyButton = document.querySelector(".apply-button");

  applyButton.addEventListener("click", function () {
    const img = document.querySelector("img");
    img.crossOrigin = "anonymous";
    const selectElement = document.querySelector("select");
    if (selectElement.value === "Normalize") {
      img.src = data.message;
      normalizeColors(img);
    }
    if (selectElement.value === "Grayscale") {
      img.src = data.message;
      convertToGrayscale(img);
    }
    });
    const changeButton = document.querySelector(".change-image-button");
    changeButton.addEventListener("click", function () {
      fetchDogImage().then((responseData) => {
        data = responseData;
      });
  });
});

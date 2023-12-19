# ImageProcessor

ImageProcessor is a simple web application for manipulating images. It provides functionality for adjusting brightness, contrast, grayscale, and applying a sharpening filter to images.

## Features

- Adjust image brightness
- Adjust image contrast
- Sharpen image
- Grayscale

## Usage

Open `index.html` in your web browser to start using the application.

## Development

This project uses plain HTML, CSS, and JavaScript. To make changes, edit the files in your text editor of choice.

## How i made the filters

Grayscale: The grayscale operation works by converting each pixel of the image to a shade of gray that represents its luminance. This is typically done by taking a weighted average of the red, green, and blue values of the pixel, with the weights reflecting the different contributions of these colors to human perception of brightness.

Brightness Adjustment: The brightness adjustment operation works by increasing or decreasing the intensity of the colors in each pixel. This is done by adding (to increase brightness) or subtracting (to decrease brightness) a constant value from the red, green, and blue values of each pixel. The result is a brighter or darker image.

Sharpen Image: The sharpening filter enhances the edges and details in an image. It works by increasing the contrast between adjacent pixels, making the edges appear more pronounced. This is achieved by subtracting a weighted average of the neighboring pixels from the original pixel value. The weights used in the average determine the strength of the sharpening effect.

Image Contrast: The contrast adjustment operation works by stretching or compressing the range of pixel values in an image. This is done by mapping the original pixel values to new values using a contrast adjustment function. The function typically applies a non-linear transformation to the pixel values, increasing or decreasing the difference between adjacent values. The result is an image with enhanced or reduced contrast.

## Bibliography
https://www.w3schools.com/js/default.asp
https://javascript.info/
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial




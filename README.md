# The "As a user..." section:
## Set of Images that load quickly
I have three images that load quickly at their highest resolution, 2000x2000. I used Lighthouse to help me optimize them, used ezgif.com to convert jpegs to webps for them.

## Select a thumbnail to display a larger version, with a description
I do have thumbnails that can be used to display a larger version, however since the example site did not include a description I did not create any sort of thing using javascript, or css.

## Alt text, next & previous buttons via keyboard.
I do have alternative text, as well as title text for the images. Images can be loaded sequentially (next, prevous) using the keyboard (left and right arrows, "," and "." keys).

# Requirements met

### One page, with a set of thumbnail images, and a larger image
### Styled appropriately with CSS, and make use of media queries
### Use client-side JavaScript to display the larger image when a thumbnail is selected
### Use client-side JavaScript to navigate between images using the keyboard (tab, enter)

# Stretch Goals met

### Handle user interaction with keyboard only 
Does not use Tab and Enter as they have native functionality in most browsers, so used other keys instead.

### Use your operating system's voiceover tools or a Screen Reader to have the computer announce the alt text of the selected image.
Hidden <p> tag exists, is updated so narrator will say the name of the image when clicked.

# Difficulties

Getting efficient image loading was very difficult for me. I had to use mutliple different converters online to get my .jepg files to convert nicely into .webp files, as the filetype seems to have a lot of metadata that greatly alters the state of the image.
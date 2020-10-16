# react-image-gallery

A lightweight, virtualized image gallery. 

- Takes an array of image data as props,
- calculates their positions according the supported sizes,
- renders quickly in a nice masonry layout
- and loads the suitable sizes of the visible images.
- Offers full view as well.
- Customizable with CSS: overwriteable properties, reasonable class names.

## Installation

```shell
npm install https://github.com/balazsherczeg/react-image-gallery.git
```

## Basic usage

```js
import React from 'react'; 
import Gallery from 'react-image-gallery';

const items = [
  {
    id: 123, // Not used right now
    sources: { // The different sizes of the same image, indexed by their width
      150: {
        src: 'path/to/the/image/sunset-small.jpg',
        width: 150,
        height: 100,
      },
      300: {
        src: 'path/to/the/image/sunset-medium.jpg',
        width: 300,
        height: 200,
      },
      900: {
        src: 'path/to/the/image/sunset-large.jpg',
        width: 900,
        height: 600,
      },
    },
    meta: {
      color: '#EA574D', // A color to use as a placeholder for this image, till the image loads, defaults to null
      caption: 'A sunset', // Defaults to null
      date: '10/09/2020', // Any format, defaults tu null
      location: 'Balatonfenyves, Hungary', // defaults to null
    },
  },
  // ...
]

const App = () => (
  <Gallery items={items} />
);
```

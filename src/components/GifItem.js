import React from 'react';

//takes the image object passed as props from the 
//GifList and passes the URL into an image element

const GifItem = (image) => {
    return (
        <div className ="gif-item">
      <li>
      <img src={image.gif.images.downsized.url} />
      {/* //keeping control of my image size */}
      </li>
      </div>
    )
  };
  
  export default GifItem;
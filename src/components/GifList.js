import React from 'react';
import GifItem from './GifItem';

//this component will solely display data
//it'll accept gifs from my app component
//loop through them and render individual GifItems for
//each array object

const GifList = (props) => {
        //^my App component passes my GifList data
        //via props
  const gifItems = props.gifs.map((image) => {
    return <GifItem key={image.id} gif={image} />
            //^my key property for each GifItem
  });

  return (
    <div>
        <ul>{gifItems}</ul>
        <div className="gif-list">{gifItems}
        </div>
    </div>

  );
};

export default GifList;
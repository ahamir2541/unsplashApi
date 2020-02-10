import React from 'react';
import './ImageList.css'

const ImageLIst = (props) => {
    const images = props.images.map(img => {
        return <img 
        key={img.id} 
        src={img.urls.regular} 
        alt={img.alt_description} 
         />
    })
    
    return (
        <div className="image-list">
            {images}
        </div>
    );
};

export default ImageLIst;
import './ImageList.css';
import React from "react";
import ImageCard from './ImageCard';

const ImageList = (props) => {
    
    const slike = props.images.map((image) => {
        // key element uvek dodajemo na root od itema ovde je to img
        return <ImageCard key={image.id} image={image} />;
    });


    return <div className='image-list'>{slike}</div>;
};

export default ImageList;
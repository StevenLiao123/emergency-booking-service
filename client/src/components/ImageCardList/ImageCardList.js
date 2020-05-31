import React from 'react';
import { ImageCard } from '../ImageCard/ImageCard';
import Styles from './ImageCardList.module.css';
import Images from '../../utils/images';

export const ImageCardList = props => {
    return (
        <div className={Styles.container}>
            {
                Images.map((image, index) => (
                    <ImageCard key={`image-${index}`} src={image.src} alt={image.alt} level={image.level} callback={props.callback} imageIndex={index+1}/>
                ))
            }
        </div>
    )
}
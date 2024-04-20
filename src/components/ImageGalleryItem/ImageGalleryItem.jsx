import imageStyle from './style.module.css'


export const ImageGalleryItem = ({image, openModal}) => {
    return (
        <li className={imageStyle.galleryItem}>
            <img src={image.webformatURL}
                alt={image.tag}
                className={imageStyle.image}
                onClick={() => openModal(image.largeImageURL)}
            />
    </li>
    )
}
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import galleryStyle from './style.module.css'


export const ImageGallery = ({ images, openModal }) => {
    return (
        <ul className={galleryStyle.imageGallery}>
            {images.map((image, index) => (
                <ImageGalleryItem 
                    key={image.id + index}
                    image={image}
                    openModal={openModal}
                />
            )
            )}
        </ul>
    )
}
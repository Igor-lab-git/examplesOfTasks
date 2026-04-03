import { useRef, type JSX } from "react";
import btnTopPrev from "../../../shared/assets/icons/devicep-age/carousel-gallery/arrow-top-btn.svg"
import btnBottomNext from "../../../shared/assets/icons/devicep-age/carousel-gallery/arrow-bottom-next.svg"
import "../../../app/styles/main.scss";
import style from "./DevicePage.module.scss";

interface IDeviceGallery {
  images?: string[];
  mainImage?: string;
  nameDevice?: string;
};

const DeviceGallery = ({ images, mainImage, nameDevice }: IDeviceGallery): JSX.Element => {

  const refContainerImages = useRef(null);

 

  const handleScrollIgages = () => {
    if(!refContainerImages.current) return;
    const container = refContainerImages.current;
     if(refContainerImages) {
    console.log(container);
    container.scrollTop += 20
    // container.scrollTo({ top: -100, behavior: 'smooth' })
  }
  }

  
  const handleScrollIgagesTop = () => {
    if(!refContainerImages.current) return;
    const container = refContainerImages.current;
     if(refContainerImages) {
    console.log(container);
    container.scrollTop -= 20
    // container.scrollTo({ top: -100, behavior: 'smooth' })
  }
  }

  


  return (
    <div className={style.container_gallery}>
    <div >
      <button 
        onClick={handleScrollIgagesTop}
        className={style.btn_prev_slide}>
        <img src={btnTopPrev} alt="кнопка наверх" />
      </button>
      <ul 
        ref={refContainerImages}
        className={`list-reset ${style.list_dop_images}`}>
        {images && images.map((image, index) => (
          <li className={style.item_dop_image} key={index}>
            <img className={style.dot_image} src={image} alt={nameDevice || "Постер продукта"} />
          </li>
        ))}
      </ul>
      <button onClick={handleScrollIgages} className={style.btn_next_slide}>
        <img src={btnBottomNext} alt="кнопка вниз" />
      </button>
    </div>

    <div className={style.container_main_image}>
      <img className={style.main_image} src={mainImage} alt={nameDevice || "Постер продукта"} />
    </div>
    </div>
  );
};

export default DeviceGallery;

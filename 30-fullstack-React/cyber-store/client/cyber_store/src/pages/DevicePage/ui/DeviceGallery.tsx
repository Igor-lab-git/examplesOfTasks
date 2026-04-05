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

  const refContainerImages = useRef<HTMLUListElement>(null);

  const handleScrollDopImages = (direction: string) => {
    const container = refContainerImages.current;
    if(!container) return;

    const amount = 60;
    if(direction === "up") {
      if(container.scrollTop <= 0) {
        container.scrollTo({
          top: container.scrollHeight - container.clientHeight,
          behavior: 'smooth'
        });
      } else {
        container.scrollBy({ top: -amount, behavior: 'smooth' });
      }
    };

    if(direction === "down") {
      if(container.scrollTop >= container.scrollHeight - container.clientHeight) {
        container.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ top: amount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={style.container_gallery}>
      <div className={style.wrapper_slider}>
        <button
          onClick={() => handleScrollDopImages("up")}
          className={style.btn_prev_slide}>
          <img className={style.btn_icon} src={btnTopPrev} alt="кнопка наверх" />
        </button>
        <ul
          ref={refContainerImages}
          className={`list-reset ${style.list_dop_images}`}>
          {images && images.map((image, index) => (
            <li className={style.item_dop_image} key={index}>
              <img className={style.dop_image} src={image} alt={nameDevice || "Постер продукта"} />
            </li>
          ))}
        </ul>
        <button
            onClick={() => handleScrollDopImages("down")}
            className={style.btn_next_slide}>
          <img className={style.btn_icon} src={btnBottomNext} alt="кнопка вниз" />
        </button>
      </div>

      <div className={style.container_main_image}>
        <img className={style.main_image} src={mainImage} alt={nameDevice || "Постер продукта"} />
      </div>
    </div>
  );
};

export default DeviceGallery;

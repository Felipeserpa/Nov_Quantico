// components/ImageSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const ImageSlider = ({ images }) => {
  return (
    <div
      style={{
        /* Remova ou ajuste estilos de largura/altura excessivos */ width:
          '100%',
      }}
    >
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation={images && images.length > 1}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <img
              src={imageUrl}
              alt={`Imagem ${index + 1}`}
              style={{
                width: '100%', // Tente ocupar a largura total do SwiperSlide
                height: 'auto',
                maxHeight: '200px' /* Mantenha a altura máxima */,
                objectFit: 'cover',
                display: 'block', // Importante para evitar espaços extras abaixo da imagem
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;

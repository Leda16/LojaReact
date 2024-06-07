import React, { useState } from 'react';
import Modal from 'react-modal';
import {
  Container,
  ProductImage,
  ThumbnailContainer,
  Thumbnail,
  ModalContent,
  MainImage,
  ImageNav,
  CloseButton,
  ProductDescription,
  ViewImagesButton,
} from './ProductInfo.styles';

const ProductInfo = ({ product }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(product.imageExtra.split(';')[0]);

  const openModal = () => {
    setCurrentImage(product.imageExtra.split(';')[0]);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <Container>
      <ProductImage src={product.image} alt={product.name} />
      <ViewImagesButton onClick={openModal}>Ver Imagens</ViewImagesButton>
      <ProductDescription>{product.info}</ProductDescription>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Product Images"
        ariaHideApp={false}
        style={{
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: 0,
            border: 'none',
            borderRadius: '10px',
          },
        }}
      >
        <ModalContent>
          <CloseButton onClick={closeModal}>×</CloseButton>
          <MainImage src={currentImage} alt="Product Image" />
          <ImageNav>
            {product.imageExtra.split(';').map((thumb, index) => (
              <Thumbnail
                key={index}
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleThumbnailClick(thumb)}
              />
            ))}
          </ImageNav>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default ProductInfo;

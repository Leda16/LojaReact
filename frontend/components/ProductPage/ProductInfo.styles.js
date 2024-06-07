import styled from 'styled-components';

export const Container = styled.div`
  width: 550px;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const Thumbnail = styled.img`
  width: 70px;
  height: 70px;
  cursor: pointer;
  border: 2px solid transparent;
  &:hover {
    border-color: #007bff;
  }
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 1140px;
  max-height: 757px;
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #007bff;
`;

export const MainImage = styled.img`
  width: 100%;
  max-height: 600px;
  object-fit: contain;
  border-radius: 10px;
`;

export const ImageNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  background-color: #f8f9fa;
  padding: 0.5rem;
  border-radius: 10px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #007bff;
  &:hover {
    color: #ff0000;
  }
`;

export const ProductDescription = styled.div`
  margin-top: 1rem;
  white-space: pre-line;
`;

export const ViewImagesButton = styled.button`
  display: block;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;
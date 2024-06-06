import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  FaImage,
  FaTag,
  FaBox,
  FaInfo,
  FaStar,
  FaDollarSign,
  FaWarehouse,
} from 'react-icons/fa';
import {
  FormContainer,
  FormRow,
  FormGroup,
  Label,
  Input,
  TextArea,
  Select,
  Button,
  Title,
  IconWrapper,
} from './CreateProduct.styles';

const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    image: '',
    info: '',
    rating: '',
    price: '',
    stock: '',
  });
  const [categories, setCategories] = useState([]);
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${process.env.API_URL}/api/categories`);
        setCategories(res.data);
      } catch (err) {
        console.error('Erro ao buscar categorias:', err);
      }
    };

    const fetchCsrfToken = async () => {
      try {
        const res = await axios.get(`${process.env.API_URL}/api/csrf-token`, { withCredentials: true });
        setCsrfToken(res.data.csrfToken);
      } catch (err) {
        console.error('Erro ao buscar CSRF token:', err);
      }
    };

    fetchCategories();
    fetchCsrfToken();
  }, []);

  const formatPrice = (value) => {
    value = value.replace(/\D/g, '');
    value = (value / 100).toFixed(2) + '';
    value = value.replace('.', ',');
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    return value;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'price') {
      setProduct({
        ...product,
        [name]: formatPrice(value),
      });
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedPrice = parseFloat(product.price.replace('.', '').replace(',', '.'));

    const productToSubmit = {
      ...product,
      price: formattedPrice,
    };

    try {
      const response = await axios.post(
        `${process.env.API_URL}/api/products`,
        productToSubmit,
        {
          headers: {
            'csrf-token': csrfToken,
          },
          withCredentials: true,
        }
      );
      console.log('Resposta do servidor:', response.data);
      toast.success('Produto criado com sucesso!');
      setProduct({
        name: '',
        category: '',
        image: '',
        info: '',
        rating: '',
        price: '',
        stock: '',
      });
    } catch (err) {
      console.error('Erro ao criar produto:', err);
      toast.error('Erro ao criar produto. Tente novamente.');
    }
  };

  return (
    <FormContainer>
      <Title>Criar Produto</Title>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <FormGroup>
            <Label>
              <IconWrapper>
                <FaTag />
              </IconWrapper>
              Categoria
            </Label>
            <Select name="category" value={product.category} onChange={handleChange} required>
              <option value="" disabled hidden>
                Selecione uma categoria
              </option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </Select>
          </FormGroup>
          <FormGroup>
            <Label>
              <IconWrapper>
                <FaBox />
              </IconWrapper>
              Nome do produto
            </Label>
            <Input type="text" name="name" value={product.name} onChange={handleChange} required />
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label>
            <IconWrapper>
              <FaImage />
            </IconWrapper>
            Link para imagem
          </Label>
          <Input type="text" name="image" value={product.image} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label>
            <IconWrapper>
              <FaInfo />
            </IconWrapper>
            Informações do produto
          </Label>
          <TextArea name="info" value={product.info} onChange={handleChange} required />
        </FormGroup>
        <FormRow>
          <FormGroup>
            <Label>
              <IconWrapper>
                <FaStar />
              </IconWrapper>
              Avaliação de estrelas
            </Label>
            <Select name="rating" value={product.rating} onChange={handleChange} required>
              <option value="" disabled hidden>
                Selecione uma avaliação
              </option>
              {[0, 1, 2, 3, 4, 5].map((star) => (
                <option key={star} value={star}>
                  {star}
                </option>
              ))}
            </Select>
          </FormGroup>
          <FormGroup>
            <Label>
              <IconWrapper>
                <FaDollarSign />
              </IconWrapper>
              Preço
            </Label>
            <Input
              type="text"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
              placeholder="0,00"
            />
          </FormGroup>
          <FormGroup>
            <Label>
              <IconWrapper>
                <FaWarehouse />
              </IconWrapper>
              Estoque
            </Label>
            <Input type="number" name="stock" value={product.stock} onChange={handleChange} required />
          </FormGroup>
        </FormRow>
        <Button type="submit">Criar Produto</Button>
      </form>
    </FormContainer>
  );
};

export default CreateProduct;

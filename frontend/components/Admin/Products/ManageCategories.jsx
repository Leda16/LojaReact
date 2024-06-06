import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  Container,
  Section,
  Title,
  Form,
  Input,
  Button,
  Select,
  CreateButton,
  EditButton,
  DeleteButton
} from './ManageCategories.styles';

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({ name: '', icon: '' });
  const [editCategory, setEditCategory] = useState({ name: '', icon: '' });
  const [selectedCategory, setSelectedCategory] = useState('');
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

  const handleCreateCategory = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.API_URL}/api/categories`,
        newCategory,
        {
          headers: {
            'csrf-token': csrfToken,
          },
          withCredentials: true,
        }
      );
      toast.success('Categoria criada com sucesso!');
      setCategories([...categories, newCategory]);
      setNewCategory({ name: '', icon: '' });
    } catch (err) {
      toast.error('Erro ao criar categoria. Tente novamente.');
    }
  };

  const handleEditCategory = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${process.env.API_URL}/api/categories/${selectedCategory}`,
        editCategory,
        {
          headers: {
            'csrf-token': csrfToken,
          },
          withCredentials: true,
        }
      );
      toast.success('Categoria editada com sucesso!');
      setCategories(categories.map(cat => cat._id === selectedCategory ? { ...cat, ...editCategory } : cat));
      setEditCategory({ name: '', icon: '' });
      setSelectedCategory('');
    } catch (err) {
      toast.error('Erro ao editar categoria. Tente novamente.');
    }
  };

  const handleDeleteCategory = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(
        `${process.env.API_URL}/api/categories/${selectedCategory}`,
        {
          headers: {
            'csrf-token': csrfToken,
          },
          withCredentials: true,
        }
      );
      toast.success('Categoria deletada com sucesso!');
      setCategories(categories.filter(cat => cat._id !== selectedCategory));
      setSelectedCategory('');
    } catch (err) {
      toast.error('Erro ao deletar categoria. Tente novamente.');
    }
  };

  return (
    <Container>
      <Section>
        <Title>Criar Categoria</Title>
        <Form onSubmit={handleCreateCategory}>
          <Input
            type="text"
            placeholder="Nome da categoria"
            value={newCategory.name}
            onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
            required
          />
          <Input
            type="text"
            placeholder="Ícone (Emoji)"
            value={newCategory.icon}
            onChange={(e) => setNewCategory({ ...newCategory, icon: e.target.value })}
            required
          />
          <CreateButton type="submit">Criar</CreateButton>
        </Form>
      </Section>
      <Section>
        <Title>Editar Categoria</Title>
        <Form onSubmit={handleEditCategory}>
          <Select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              const category = categories.find(cat => cat._id === e.target.value);
              setEditCategory({ name: category.name, icon: category.icon });
            }}
            required
          >
            <option value="" disabled hidden>Selecione uma categoria</option>
            {categories.map(cat => (
              <option key={cat._id} value={cat._id}>{cat.name}</option>
            ))}
          </Select>
          <Input
            type="text"
            placeholder="Novo nome da categoria"
            value={editCategory.name}
            onChange={(e) => setEditCategory({ ...editCategory, name: e.target.value })}
            required
          />
          <Input
            type="text"
            placeholder="Novo ícone (Emoji)"
            value={editCategory.icon}
            onChange={(e) => setEditCategory({ ...editCategory, icon: e.target.value })}
            required
          />
          <EditButton type="submit">Editar</EditButton>
        </Form>
      </Section>
      <Section>
        <Title>Deletar Categoria</Title>
        <Form onSubmit={handleDeleteCategory}>
          <Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            required
          >
            <option value="" disabled hidden>Selecione uma categoria</option>
            {categories.map(cat => (
              <option key={cat._id} value={cat._id}>{cat.name}</option>
            ))}
          </Select>
          <DeleteButton type="submit">Deletar</DeleteButton>
        </Form>
      </Section>
    </Container>
  );
};

export default ManageCategories;

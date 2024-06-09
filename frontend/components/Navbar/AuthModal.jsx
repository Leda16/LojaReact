import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTimes, FaSpinner } from 'react-icons/fa';
import {
  ModalOverlay,
  ModalContainer,
  ModalContent,
  CloseButton,
  Form,
  FormGroup,
  Input,
  Button,
  SwitchLink,
  Spinner,
  Icon,
  Title,
  ErrorMessage
} from './AuthModal.styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthModal = ({ isOpen, onRequestClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    cpf: '',
    email: '',
    password: '',
    name: '',
    birthDate: ''
  });
  const [loading, setLoading] = useState(false);
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [isUnderage, setIsUnderage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get(`${process.env.API_URL}/api/csrf-token`, { withCredentials: true });
        setCsrfToken(response.data.csrfToken);
      } catch (error) {
        console.error('Erro ao obter o token CSRF:', error);
      }
    };

    fetchCsrfToken();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    switch (name) {
      case 'cpf':
        const formattedCPF = formatCPF(value);
        setFormData({ ...formData, [name]: formattedCPF });
        if (value.replace(/\D/g, '').length === 11) {
          setShowAdditionalFields(true);
        }
        break;
      case 'name':
        if (/^[a-zA-Z\s]*$/.test(value)) {
          setFormData({ ...formData, [name]: value });
        }
        break;
      case 'birthDate':
        const formattedBirthDate = formatBirthDate(value);
        setFormData({ ...formData, [name]: formattedBirthDate });
        break;
      case 'email':
        setFormData({ ...formData, [name]: value });
        break;
      case 'password':
        setFormData({ ...formData, [name]: value });
        break;
      default:
        break;
    }
  };
  
  const formatBirthDate = (date) => {
    return date
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{4})\d+?$/, '$1');
  };
  
  const formatCPF = (cpf) => {
    return cpf
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      cpf: '',
      email: '',
      password: '',
      name: '',
      birthDate: ''
    });
    setShowAdditionalFields(false);
    setIsUnderage(false);
    setErrorMessage('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    try {
      const response = await axios.post(
        `${process.env.API_URL}/api/auth/login`,
        {
          cpfOrEmail: formData.cpf,
          password: formData.password
        },
        {
          headers: {
            'csrf-token': csrfToken
          },
          withCredentials: true
        }
      );
      console.log('Login bem-sucedido:', response.data);
      toast.success('Login realizado.');
      localStorage.setItem('token', response.data.token);
      setLoading(false);
      onRequestClose();
    } catch (error) {
      toast.error('Credenciais erradas.');
      setErrorMessage('Erro ao fazer login. Verifique suas credenciais.');
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    try {
      const response = await axios.post(
        `${process.env.API_URL}/api/auth/register`,
        {
          cpf: formData.cpf,
          email: formData.email,
          password: formData.password,
          name: formData.name,
          birthDate: formData.birthDate
        },
        {
          headers: {
            'csrf-token': csrfToken
          },
          withCredentials: true
        }
      );
      toast.success('Cliente registrado.');
      console.log('Registro bem-sucedido:', response.data);
      setLoading(false);
      onRequestClose();
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
      toast.error('Erro em registrar cliente.');
      setErrorMessage('Erro ao registrar usuário. CPF ou Email já está em uso.');
      setLoading(false);
    }
  };

  return isOpen ? (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onRequestClose}>
          <FaTimes />
        </CloseButton>
        <ModalContent>
          <Title>{isLogin ? 'Entrar' : 'Registrar'}</Title>
          <Form onSubmit={isLogin ? handleLogin : handleRegister}>
            {isLogin ? (
              <>
                <FormGroup>
                  <Input
                    type="text"
                    name="cpf"
                    placeholder="CPF ou Email"
                    value={formData.cpf}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                <Button type="submit" disabled={loading}>
                  {loading ? <FaSpinner /> : 'Entrar'}
                </Button>
              </>
            ) : (
              <>
                <FormGroup>
                  <Input
                    type="text"
                    name="cpf"
                    placeholder="CPF"
                    value={formData.cpf}
                    onChange={handleInputChange}
                    style={{ borderColor: isUnderage ? 'red' : 'inherit' }}
                    required
                  />
                  {loading && <Spinner><FaSpinner /></Spinner>}
                  {isUnderage && <ErrorMessage>Menores de 18 anos não são permitidos</ErrorMessage>}
                </FormGroup>
                {showAdditionalFields && (
                  <>
                    <FormGroup>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Nome Completo"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="text"
                        name="birthDate"
                        placeholder="Data de Nascimento"
                        value={formData.birthDate}
                        onChange={handleInputChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                      />
                    </FormGroup>
                    <Button type="submit" disabled={loading}>
                      {loading ? <FaSpinner /> : 'Registrar'}
                    </Button>
                  </>
                )}
              </>
            )}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </Form>
          <SwitchLink onClick={switchMode}>
            {isLogin ? 'Não tem uma conta? Registre-se' : 'Já tem uma conta? Entre'}
          </SwitchLink>
        </ModalContent>
      </ModalContainer>
      <ToastContainer />
    </ModalOverlay>
  ) : null;
};

export default AuthModal;

// CODIGO COM API ABAIXO

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaTimes, FaSpinner } from 'react-icons/fa';
// import {
//   ModalOverlay,
//   ModalContainer,
//   ModalContent,
//   CloseButton,
//   Form,
//   FormGroup,
//   Input,
//   Button,
//   SwitchLink,
//   Spinner,
//   Icon,
//   Title,
//   ErrorMessage
// } from './AuthModal.styles';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const AuthModal = ({ isOpen, onRequestClose }) => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     cpf: '',
//     email: '',
//     password: '',
//     name: '',
//     birthDate: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [showAdditionalFields, setShowAdditionalFields] = useState(false);
//   const [isUnderage, setIsUnderage] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [csrfToken, setCsrfToken] = useState('');

//   useEffect(() => {
//     const fetchCsrfToken = async () => {
//       try {
//         const response = await axios.get(`${process.env.API_URL}/api/csrf-token`, { withCredentials: true });
//         setCsrfToken(response.data.csrfToken);
//       } catch (error) {
//         console.error('Erro ao obter o token CSRF:', error);
//       }
//     };

//     fetchCsrfToken();
//   }, []);

//   const formatCPF = (cpf) => {
//     return cpf
//       .replace(/\D/g, '')
//       .replace(/(\d{3})(\d)/, '$1.$2')
//       .replace(/(\d{3})(\d)/, '$1.$2')
//       .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
  
//     if (name === 'cpf') {
//       setFormData({ ...formData, [name]: formatCPF(value) });
  
//       if (value.replace(/\D/g, '').length === 11) {
//         handleCPFCheck(value.replace(/\D/g, ''));
//       }
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const switchMode = () => {
//     setIsLogin(!isLogin);
//     setFormData({
//       cpf: '',
//       email: '',
//       password: '',
//       name: '',
//       birthDate: ''
//     });
//     setShowAdditionalFields(false);
//     setIsUnderage(false);
//     setErrorMessage('');
//   };

//   const handleCPFCheck = async (cleanedCPF) => {
//     setLoading(true);
//     const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//     const apiUrl = `https://api-dh.ciphers.systems/api/v1/serasa/cpf/?cpf=${cleanedCPF}&apikey=2027721e17cf643bfb71d8a713aae56cd82b5dd35842adabed58f886172963b8`;
//     try {
//       const response = await axios.get(`${proxyUrl}${apiUrl}`);
//       const { name, birth } = response.data.body;
//       const birthDate = new Date(birth.split('/').reverse().join('-'));
//       const age = new Date().getFullYear() - birthDate.getFullYear();

//       setIsUnderage(age < 18);
//       setFormData({
//         ...formData,
//         name,
//         birthDate: birth,
//         cpf: formatCPF(cleanedCPF)
//       });
//       setShowAdditionalFields(true);
//       setLoading(false);
//     } catch (error) {
//       console.error('Erro ao buscar informações do usuário:', error);
//       setLoading(false);
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrorMessage('');
//     try {
//       const response = await axios.post(
//         `${process.env.API_URL}/api/auth/login`,
//         {
//           cpfOrEmail: formData.cpf,
//           password: formData.password
//         },
//         {
//           headers: {
//             'csrf-token': csrfToken
//           },
//           withCredentials: true
//         }
//       );
//       console.log('Login bem-sucedido:', response.data);
//     toast.sucess('Login realizado.');
//       setLoading(false);
//       onRequestClose();
//     } catch (error) {
//     toast.error('Credenciais erradas.');
//       setErrorMessage('Erro ao fazer login. Verifique suas credenciais.');
//       setLoading(false);
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrorMessage('');
//     try {
//       const response = await axios.post(
//         `${process.env.API_URL}/api/auth/register`,
//         {
//           cpf: formData.cpf,
//           email: formData.email,
//           password: formData.password,
//           name: formData.name,
//           birthDate: formData.birthDate
//         },
//         {
//           headers: {
//             'csrf-token': csrfToken
//           },
//           withCredentials: true
//         }
//       );
//     toast.sucess('Cliente registrado.');
//       console.log('Registro bem-sucedido:', response.data);
//       setLoading(false);
//       onRequestClose();
//     } catch (error) {
//       console.error('Erro ao registrar usuário:', error);
//     toast.error('Erro em registrar cliente.');

//       setErrorMessage('Erro ao registrar usuário. CPF ou Email já está em uso.');
//       setLoading(false);
//     }
//   };

//   return isOpen ? (
//     <ModalOverlay>
//       <ModalContainer>
//         <CloseButton onClick={onRequestClose}>
//           <FaTimes />
//         </CloseButton>
//         <ModalContent>
//           <Title>{isLogin ? 'Entrar' : 'Registrar'}</Title>
//           <Form onSubmit={isLogin ? handleLogin : handleRegister}>
//             {isLogin ? (
//               <>
//                 <FormGroup>
//                   <Input
//                     type="text"
//                     name="cpf"
//                     placeholder="CPF ou Email"
//                     value={formData.cpf}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </FormGroup>
//                 <FormGroup>
//                   <Input
//                     type="password"
//                     name="password"
//                     placeholder="Senha"
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </FormGroup>
//                 <Button type="submit" disabled={loading}>
//                   {loading ? <FaSpinner /> : 'Entrar'}
//                 </Button>
//               </>
//             ) : (
//               <>
//                 <FormGroup>
//                   <Input
//                     type="text"
//                     name="cpf"
//                     placeholder="CPF"
//                     value={formData.cpf}
//                     onChange={handleInputChange}
//                     style={{ borderColor: isUnderage ? 'red' : 'inherit' }}
//                     required
//                   />
//                   {loading && <Spinner><FaSpinner /></Spinner>}
//                   {isUnderage && <ErrorMessage>Menores de 18 anos não são permitidos</ErrorMessage>}
//                 </FormGroup>
//                 {!loading && showAdditionalFields && !isUnderage && (
//                   <>
//                     <FormGroup>
//                       <Input
//                         type="text"
//                         name="name"
//                         placeholder="Nome Completo"
//                         value={formData.name}
//                         readOnly
//                       />
//                     </FormGroup>
//                     <FormGroup>
//                       <Input
//                         type="text"
//                         name="birthDate"
//                         placeholder="Data de Nascimento"
//                         value={formData.birthDate}
//                         readOnly
//                       />
//                     </FormGroup>
//                     <FormGroup>
//                       <Input
//                         type="email"
//                         name="email"
//                         placeholder="Email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </FormGroup>
//                     <ToastContainer/>
//                     <FormGroup>
//                       <Input
//                         type="password"
//                         name="password"
//                         placeholder="Senha"
//                         value={formData.password}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </FormGroup>
//                     <Button type="submit" disabled={loading}>
//                       {loading ? <FaSpinner /> : 'Registrar'}
//                     </Button>
//                   </>
//                 )}
//               </>
//             )}
//             {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
//           </Form>
//           <SwitchLink onClick={switchMode}>
//             {isLogin ? 'Não tem uma conta? Registre-se' : 'Já tem uma conta? Entre'}
//           </SwitchLink>
//         </ModalContent>
//       </ModalContainer>
//     </ModalOverlay>

//   ) : null;
// };

// export default AuthModal;

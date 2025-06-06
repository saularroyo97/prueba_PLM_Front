import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

// Importar componentes
import Panel_productos from './pages/panel_productos';
import Panel_biblioteca from './pages/panel_biblioteca';
import Productos_promo from './pages/productos_promo'; 
import Ayudas_visuales from './pages/ayudas_visuales';
import Panel_actualizacion from './pages/panel_actualizacion';
import Videos from './pages/videos';
import Abstracts from './pages/Abstracts';
import Pubmed from './pages/Pubmed';
import Calculadora from './pages/calculadora';
import Algorimetros from './pages/Algorimetros';

// Desktop
import HomeBoeringer from './assets/images/Desk_iconoHome_Boeringer.svg';
import iconoHomeBuscador from './assets/images/Desk_iconoHomeBuscador.svg';
import iconoHomeCalculadoras from './assets/images/Desk_icono_calculadora.svg';
import iconoHomeAlgoritmos from './assets/images/Desk_icono_algorimetro.svg';
import iconoHomeAtlas from './assets/images/Desk_icono_atlas.svg';
import iconoHomePodcast from './assets/images/Desk_icono_potcast.svg';
import titSecActualizacion from './assets/images/Desk_icono_medica.svg';
import titSecBiblioteca from './assets/images/Desk_icono_biblioteca_medica.svg';

// Móvil
import HomeBoeringerx425 from './assets/images/iconoHomeBoeringer.svg';
import iconoHomeBuscadorx425 from './assets/images/iconoHomeBuscador.svg';
import iconoHomeCalculadorasx425 from './assets/images/iconoHomeCalculadoras.svg';
import iconoHomeAlgoritmosx425 from './assets/images/iconoHomeAlgoritmos.svg';
import iconoHomeAtlasx425 from './assets/images/iconoHomeAtlas.svg';
import iconoHomePodcastx425 from './assets/images/iconoHomePodcast.svg';
import titSecActualizacionx425 from './assets/images/titSecActualizacion.svg';
import titSecBibliotecax425 from './assets/images/titSecBiblioteca.svg';

import logoHeader from './assets/images/logoHeader.svg';
import flagEC from './assets/images/flagEC.svg';
import flagPE from './assets/images/flagPE.svg';
import notificacion from './assets/images/icononotificacion.svg';

function HomePage() {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(flagEC);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardsData = [
    { img: isMobile ? HomeBoeringerx425 : HomeBoeringer, path: '/panel_productos' },
    { img: isMobile ? titSecBibliotecax425 : titSecBiblioteca, path: '/panel_biblioteca' },
    { img: isMobile ? iconoHomeBuscadorx425 : iconoHomeBuscador, },
    { img: isMobile ? iconoHomeCalculadorasx425 : iconoHomeCalculadoras, path: '/calculadora'  },
    { img: isMobile ? iconoHomeAtlasx425 : iconoHomeAtlas },
    { img: isMobile ? titSecActualizacionx425 : titSecActualizacion, path: '/panel_actualizacion' },
    { img: isMobile ? iconoHomePodcastx425 : iconoHomePodcast },
    { img: isMobile ? iconoHomeAlgoritmosx425 : iconoHomeAlgoritmos, path: '/algorimetros' },
  ];

  const getColumnWidth = (index) => {
    const fullWidthIndices = [2, 5];
    return fullWidthIndices.includes(index) ? 12 : 6;
  };

  return (
    <div style={{ backgroundColor: '#10b981', minHeight: '100vh' }}>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <div className="d-flex align-items-center gap-3">
              <FontAwesomeIcon icon={faBars} size="lg" />
              <img
                alt="Logo Header"
                src={logoHeader}
                width="150"
                height="auto"
                className="d-inline-block align-top"
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex flex-row gap-3 align-items-center">
              <a href="#"><img src={notificacion} alt="Notificación" /></a>
              <button
                onClick={() => setFlag(flag === flagEC ? flagPE : flagEC)}
                className="btn btn-light btn-sm"
                style={{ 
                  background: '#ffc107',
                  border: 'none',
                  borderRadius: '50%',
                  width: '2rem',
                  height: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img src={flag} alt="Bandera actual" style={{ width: '16px', height: '16px' }} />
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ backgroundColor: '#003329', minHeight: '100vh' }}>
        <Container className="py-4">
          <Row>
            <Col>
              <span className="text-success fw-medium" style={{ fontSize: "1rem" }}>
                Bienvenido(a):
              </span>{' '}
              <span className="text-secondary" style={{ fontSize: "1rem" }}>
                Nombre Apellido Apellido
              </span>
            </Col>
          </Row>
        </Container>

        <Container fluid className="px-3 pb-5">
          <Row className="g-4 justify-content-center">
            {cardsData.map((card, index) => (
              <Col
                key={index}
                xs={getColumnWidth(index)}
                md={4}
                className="d-flex justify-content-center"
              >
                <button
                  className="custom-card d-flex flex-column align-items-center text-center border-0"
                  onClick={() => card.path && navigate(card.path)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={card.img} alt={`Card ${index + 1}`} className="card-icon" />
                </button>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/panel_productos" element={<Panel_productos />} />
      <Route path="/panel_biblioteca" element={<Panel_biblioteca />} />
      <Route path="/productos_promo" element={<Productos_promo />} />
       <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/algorimetros" element={<Algorimetros />} />
         <Route path="/panel_actualizacion" element={<Panel_actualizacion />} />

      <Route path="/ayudas_visuales" element={<Ayudas_visuales />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/abstracts" element={<Abstracts />} />
      <Route path="/pubmed" element={<Pubmed />} />
    </Routes>
  );
}

export default AppWrapper;
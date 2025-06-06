import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


// Imágenes
import logoHeader from '../assets/images/logoHeader.svg';
import notificacion from '../assets/images/icononotificacion.svg';
import flagEC from '../assets/images/flagEC.svg';
import flagPE from '../assets/images/flagPE.svg';
import desk_logoBoehringerBlanco from '../assets/images/logoFooterClaroIzq.svg';
import logoBoehringerBlancox425 from '../assets/images/logoFooterClaroIzq.svg';
import ProductShot from '../assets/images/productShot.png';



function Productos_promo() {
const [flag, setFlag] = useState(flagEC);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425); 
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 425);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


 // ✅ MOVIDO DENTRO DEL COMPONENTE
  const logoCard = {
    img: isMobile ? logoBoehringerBlancox425 : desk_logoBoehringerBlanco,
    path: '/',
  };

  const productos = [
    {
      id: 1,
      nombre: "MICARDIS",
      descripcion: "Comprimidos",
      imagen: ProductShot, 
      ippaLink: "#"
    },
    {
      id: 2,
      nombre: "MICARDIS AMLO",
      descripcion: "Comprimidos", 
      imagen: ProductShot, 
      ippaLink: "#"
    },
    {
      id: 3,
      nombre: "MICARDIS PlUS",
      descripcion: "Comprimidos", 
      imagen: ProductShot, 
      ippaLink: "#"
    },
    {
      id: 4,
      nombre: "JARDIANCE",
      descripcion: "Comprimidos", 
      imagen: ProductShot, 
      ippaLink: "#"
    },
    {
      id: 3,
      nombre: "JARDIANCE PlUS",
      descripcion: "Comprimidos", 
      imagen: ProductShot, 
      ippaLink: "#"
    },
    
  ];

  return (
    <div style={{ backgroundColor: '#10b981', minHeight: '100vh' }}>
      {/* NAVBAR */}
      <Navbar>
        <Container>
          <Navbar.Brand href="#">
            <div className="d-flex align-items-center gap-3">
              <FontAwesomeIcon icon={faBars} size="lg" />
              <img src={logoHeader} width="150" alt="Logo Header" />
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

      {/* CONTENIDO PRINCIPAL */}
      <div style={{ backgroundColor: '#003329', minHeight: 'calc(100vh - 80px)' }}>
        <Container className="py-4">
          <Row>
            <Col>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center'
                }}
                onClick={() => navigate('/panel_productos')}
              >
                <FontAwesomeIcon icon={faArrowLeft} size="lg" style={{ color: "#10b981" }} />
                <span
                  className="fw-medium"
                  style={{ fontSize: "1rem", color: "#FFFFFF", marginLeft: '8px' }}
                >
                  Volver
                </span>
              </button>
            </Col>
          </Row>
        </Container>

        {/* Contenidos de productos */}
        <div style={{ backgroundColor: '#fff' }}>
          <Container className="py-4">
            <Row className="justify-content-center mb-4">
              <Col xs={12} md={6} className="d-flex justify-content-center">
                <button
                  className="custom-card border-0"
                  onClick={() => navigate(logoCard.path)}
                  style={{ background: '#fff', cursor: 'pointer', borderRadius: '8px', border: '3px solid #ccc' }}
                >
                  <img
                    src={logoCard.img}
                    alt="Logo Boehringer"
                    className="card-icon"
                    style={{
                      width: '100%',
                      maxWidth: '320px',
                      height: 'auto'
                    }}
                  />
                </button>
              </Col>
            </Row>

            {/* 🔹 LISTA DE PRODUCTOS */}
           <Row className="g-4">
  {productos.map((producto) => (
    <Col key={producto.id} xs={12} sm={6} md={4}>
      <div
        style={{
          backgroundColor: '#f8f9fa',
          borderRadius: '12px',
          padding: '20px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        {/* Imagen del producto */}
        <div className="text-center mb-3">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            style={{
              width: '100px',
              height: '120px',
              objectFit: 'contain',
              borderRadius: '8px'
            }}
          />
        </div>

        {/* Información del producto */}
        <div className="text-center">
          <h3 style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: '#333'
          }}>
            {producto.nombre}
          </h3>
          <p style={{
            color: '#666',
            fontSize: '0.95rem'
          }}>
            {producto.descripcion}
          </p>

          <button
            style={{
              backgroundColor: 'transparent',
              border: '2px solid #10b981',
              color: '#10b981',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#10b981';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#10b981';
            }}
            onClick={() => {
              console.log(`Consultar IPPA para ${producto.nombre}`);
            }}
          >
            Consultar IPPA
          </button>
        </div>
      </div>
    </Col>
  ))}
</Row>

          </Container>
        </div>
      </div>
    </div>
  );
}

export default Productos_promo;
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import logoHeader from '../assets/images/logoHeader.svg';
import notificacion from '../assets/images/icononotificacion.svg';
import flagEC from '../assets/images/flagEC.svg';
import flagPE from '../assets/images/flagPE.svg';
import desk_logoBoehringerBlanco from '../assets/images/logoFooterClaroIzq.svg';
import logoBoehringerBlancox425 from '../assets/images/logoFooterClaroIzq.svg';

function Ayudas_visuales() {
  const [flag, setFlag] = useState(flagEC);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);
  const [selectedVisual, setSelectedVisual] = useState(null);
  const navigate = useNavigate();

  const visualAids = [
    { id: 1, title: 'Ayuda visual #1' },
    { id: 2, title: 'Ayuda visual #2' },
    { id: 3, title: 'Ayuda visual #3' }
  ];

  const logoCard = {
    img: isMobile ? logoBoehringerBlancox425 : desk_logoBoehringerBlanco,
    path: '/',
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 425);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleVisualClick = (visual) => setSelectedVisual(visual);
  const handleBack = () => setSelectedVisual(null);

  const styles = {
    contentArea: {
      padding: '1rem',
      minHeight: 'calc(100vh - 200px)',
      overflowY: 'auto',
    },
    listItem: {
      backgroundColor: 'white',
      padding: '1rem',
      borderRadius: '0.5rem',
      marginBottom: '0.5rem',
      cursor: 'pointer',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    },
    chevron: {
      color: '#6c757d',
    },
    navHeader: {
      padding: '1rem',
      backgroundColor: '#10b981',
      borderTopLeftRadius: '1rem',
      borderTopRightRadius: '1rem',
    },
    detailContent: {
      padding: '2rem',
      textAlign: 'center',
      backgroundColor: 'white',
      borderRadius: '1rem',
    },
    iconCircle: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      backgroundColor: '#e0f2f1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 auto 1rem',
    },
    footer: {
      backgroundColor: '#f1f1f1',
      padding: '1rem',
      borderTop: '1px solid #ddd',
    },
    homeIndicator: {
      height: '20px',
      backgroundColor: '#fff',
    }
  };

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
          <Container fluid className="p-0">
            {selectedVisual === null ? (
              // Lista de ayudas visuales
              <div style={styles.contentArea}>
                <Container>
                  {visualAids.map((visual) => (
                    <div
                      key={visual.id}
                      style={styles.listItem}
                      className="d-flex justify-content-between align-items-center"
                      onClick={() => handleVisualClick(visual)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8f9fa';
                        const chevron = e.currentTarget.querySelector('.chevron-icon');
                        if (chevron) chevron.style.color = '#10b981';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'white';
                        const chevron = e.currentTarget.querySelector('.chevron-icon');
                        if (chevron) chevron.style.color = '#6c757d';
                      }}
                    >
                      <span className="text-dark fw-medium">{visual.title}</span>
                      <FontAwesomeIcon 
                        icon={faChevronRight} 
                        className="chevron-icon"
                        style={styles.chevron}
                      />
                    </div>
                  ))}
                </Container>
              </div>
            ) : (
              // Vista detallada
              <div>
                <div style={styles.navHeader} className="d-flex align-items-center">
                  <button 
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      marginRight: '0.5rem'
                    }}
                    onClick={handleBack}
                  >
                    <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'white' }} />
                  </button>
                  <span className="text-white fw-medium">{selectedVisual.title}</span>
                </div>

                <div style={styles.contentArea}>
                  <Container style={styles.detailContent}>
                    <div style={styles.iconCircle}>
                      <span style={{ fontSize: '3rem' }}>📋</span>
                    </div>
                    <h4 className="text-dark mb-3">{selectedVisual.title}</h4>
                    <p className="text-muted mb-4">Contenido de la ayuda visual</p>
                    <Button 
                      style={{ 
                        background: '#10b981',
                        border: 'none',
                        borderRadius: '0.5rem'
                      }}
                    >
                      Ver contenido completo
                    </Button>
                  </Container>
                </div>
              </div>
            )}

            {/* Footer */}
            <div style={styles.footer} className="d-flex justify-content-between align-items-center px-4">
              <div className="d-flex align-items-center">
                <img 
                  src={logoCard.img} 
                  alt="Boehringer Ingelheim" 
                  style={{ height: '20px' }}
                />
              </div>
              <small className="text-muted fst-italic">Life forward</small>
            </div>

            {/* Home Indicator */}
           
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Ayudas_visuales;

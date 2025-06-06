import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Pubmed.css';

// Imágenes
import logoHeader from '../assets/images/logoHeader.svg';
import notificacion from '../assets/images/icononotificacion.svg';
import flagEC from '../assets/images/flagEC.svg';
import flagPE from '../assets/images/flagPE.svg';

// Datos de prueba
const visualAids = [
  {
    id: 1,
    title:
      'D. Elit volutpat. Ut velit enim ad minim veniam quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
  }
];

function Pubmed() {
  const [flag, setFlag] = useState(flagEC);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 425);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleVisualClick = (visual) => {
    console.log('Clicked:', visual);
    // Aquí puedes agregar lógica para mostrar detalles o navegar
  };

  const styles = {
    contentArea: {
      backgroundColor: '#fff',
      borderRadius: '10px',
      padding: '1rem',
      marginTop: '1rem'
    },
    listItem: {
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '0.75rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    },
    chevron: {
      color: '#6c757d',
      transition: 'color 0.3s ease'
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
              <a href="#">
                <img src={notificacion} alt="Notificación" />
              </a>
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
                onClick={() => navigate('/panel_biblioteca')}
              >
                <FontAwesomeIcon icon={faArrowLeft} size="lg" style={{ color: '#10b981' }} />
                <span
                  className="fw-medium"
                  style={{ fontSize: '1rem', color: '#FFFFFF', marginLeft: '8px' }}
                >
                  Volver
                </span>
              </button>
            </Col>
          </Row>
        </Container>

        {/* Sección blanca */}
        <div style={{ backgroundColor: '#fff' }}>
          <Container className="py-4">
            <div className="pubmed-section">
              <input
                type="text"
                className="custom-search"
                placeholder="Buscar términos médicos o artículos"
              />

              {/* Tarjetas de resultado */}
              <div className="result-card">
                <p className="result-text">Abstracts por sustancia</p>
              </div>

              <div className="result-card">
                <p className="result-text">
                  Texto de búsqueda: <span style={{ color: '#68E085' }}>CARDIOPATÍA</span>
                </p>
              </div>
            </div>

            {/* Lista de ayudas visuales */}
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
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Pubmed;

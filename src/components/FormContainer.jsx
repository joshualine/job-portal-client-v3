import { Container, Row, Col } from 'react-bootstrap';

const FormContainer = ({ children }) => {
  return (
    <Container className='justify-content-md-center mt-1'>
      <Row className='justify-content-md-center mt-0'>
        <Col xs={12} md={12} className='card p-5'>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
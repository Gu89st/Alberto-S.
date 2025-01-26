import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import Datapro from "./DataPro";

const Certificaciones=() =>{
  return (
    <div className="Proy-part">
      <h1 className="text-center text-white mb-4">Mis Proyectos</h1>
      <Row xs={1} md={3} className="g-4">
        {Datapro.map((Pro, idx)=>(
          <Col key={idx} className="certificado">
            <Card className="card-custom">
              <Card.Img variant="top" src={Pro.img} className="img-fluis img-custom"/>
              <Card.Body className="text-center text-white">
                <Card.Title>{Pro.titulo}</Card.Title>
                <Card.Text>{Pro.Descripcion}</Card.Text>
                <Card.Text>{Pro.Tencologias}</Card.Text>
                    <img src={Pro.css} alt="Icono" style={{ width: '30px', height: '30px', marginLeft: '5px' }} />
                    <img src={Pro.html} alt="Icono" style={{ width: '30px', height: '30px', marginLeft: '5px' }} />
                    <Card.Text className="mb-0">{Pro.Subido}</Card.Text>
                    <Link to={Pro.link} target="_blank">
                    <img src={Pro.icono} alt="Icono" style={{ width: '30px', height: '30px', marginLeft: '5px' }} />
                    </Link>
               
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    
  );
};

export default Certificaciones;
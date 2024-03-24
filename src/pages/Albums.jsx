import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import album1 from '../images/drake.jpg';

const cardStyle = {
    width: '18rem',
    float: 'left', // Faz com que os cards fiquem lado a lado
    marginRight: '20px' // Adiciona um espaço entre os cards
};

export default function Albums() {
    return (
        <div style={{ marginBottom: "200px" }}>
        <div style={{ marginTop: "150px", display: 'flex', justifyContent: 'center' }}>
            <Card style={cardStyle}>
                <Card.Img variant="top" src={album1} alt="Capa do Álbum" />
                <Card.Body>
                    <Card.Title>Drake</Card.Title>
                    <Card.Text>
                        Certified Lover Boy
                    </Card.Text>
                    <Button variant="primary">Ver Álbum</Button>
                </Card.Body>
            </Card>
            <Card style={cardStyle}>
                <Card.Img variant="top" src={album1} alt="Capa do Álbum" />
                <Card.Body>
                    <Card.Title>Drake</Card.Title>
                    <Card.Text>
                        Certified Lover Boy
                    </Card.Text>
                    <Button variant="primary">Ver Álbum</Button>
                </Card.Body>
            </Card>
            <Card style={cardStyle}>
                <Card.Img variant="top" src={album1} alt="Capa do Álbum" />
                <Card.Body>
                    <Card.Title>Drake</Card.Title>
                    <Card.Text>
                        Certified Lover Boy
                    </Card.Text>
                    <Button variant="primary">Ver Álbum</Button>
                </Card.Body>
            </Card>
            <Card style={cardStyle}>
                <Card.Img variant="top" src={album1} alt="Capa do Álbum" />
                <Card.Body>
                    <Card.Title>Drake</Card.Title>
                    <Card.Text>
                        Certified Lover Boy
                    </Card.Text>
                    <Button variant="primary">Ver Álbum</Button>
                </Card.Body>
            </Card>
            <Card style={cardStyle}>
                <Card.Img variant="top" src={album1} alt="Capa do Álbum" />
                <Card.Body>
                    <Card.Title>Drake</Card.Title>
                    <Card.Text>
                        Certified Lover Boy
                    </Card.Text>
                    <Button variant="primary">Ver Álbum</Button>
                </Card.Body>
            </Card>
            <Card style={cardStyle}>
                <Card.Img variant="top" src={album1} alt="Capa do Álbum" />
                <Card.Body>
                    <Card.Title>Drake</Card.Title>
                    <Card.Text>
                        Certified Lover Boy
                    </Card.Text>
                    <Button variant="primary">Ver Álbum</Button>
                </Card.Body>
            </Card>
        </div>
        </div>
    );
}
import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import album1 from '../images/drake.jpg';
import album2 from '../images/mcig.png';
import album3 from '../images/acdc.jpg';
import album4 from '../images/travis.jpg';
import album5 from '../images/21savage.jpg';
import album6 from '../images/drake2.jpg';

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
                    <Card.Text>
                    Certified Lover Boy é o sexto álbum de estúdio do rapper canadense Drake, lançado em 3 de setembro de 2021 pela OVO Sound e Republic Records.
                    </Card.Text>
                    <Button variant="primary" as="a" href="https://www.youtube.com/playlist?list=PLxA687tYuMWibWyB256DEaHLL0ueEKL97" target="_blank">Ver Álbum</Button>
                </Card.Body>
            </Card>
            <Card style={cardStyle}>
                <Card.Img variant="top" src={album2} alt="Capa do Álbum" />
                <Card.Body>
                    <Card.Title>Mc IG</Card.Title>
                    <Card.Text>
                    Todo Mundo Odeia o IG
                    </Card.Text>
                    <Card.Text>
                        Todo mundo odeia o IG foi um album lançado pelo cantor brasileiro Mc Ig, lançado em 22 de março de 2024 pela Warner Music Brasil.
                    </Card.Text>
                    <Button variant="primary">Ver Álbum</Button>
                </Card.Body>
            </Card>
            <Card style={cardStyle}>
                <Card.Img variant="top" src={album3} alt="Capa do Álbum" />
                <Card.Body>
                    <Card.Title>ACDC</Card.Title>
                    <Card.Text>
                        Back in black
                    </Card.Text>
                    <Card.Text>
                    Back In Black é o sétimo álbum de estúdio da banda australiana de hard rock AC/DC, lançado à 25 de Julho de 1980, 5 meses depois do falecimento do vocalista.
                    </Card.Text>
                    <Button variant="primary">Ver Álbum</Button>
                </Card.Body>
            </Card>
            <Card style={cardStyle}>
                <Card.Img variant="top" src={album4} alt="Capa do Álbum" />
                <Card.Body>
                    <Card.Title>Travis Scott</Card.Title>
                    <Card.Text>
                        Utopia
                    </Card.Text>
                    <Card.Text>
                    Utopia é o quarto álbum de estúdio do rapper norte-americano Travis Scott. Seu lançamento ocorreu em 28 de julho de 2023, através da Cactus Jack e da Epic Records.
                    </Card.Text>
                    <Button variant="primary">Ver Álbum</Button>
                </Card.Body>
            </Card>
            <Card style={cardStyle}>
                <Card.Img variant="top" src={album5} alt="Capa do Álbum" />
                <Card.Body>
                    <Card.Title>21 Savage</Card.Title>
                    <Card.Text>
                        American Dream
                    </Card.Text>
                    <Card.Text>
                    American Dream é o terceiro álbum solo de estúdio e álbum de trilha sonora de estreia do rapper 21 Savage. 
                    </Card.Text>
                    <Button variant="primary">Ver Álbum</Button>
                </Card.Body>
            </Card>
            <Card style={cardStyle}>
                <Card.Img variant="top" src={album6} alt="Capa do Álbum" />
                <Card.Body>
                    <Card.Title>Drake</Card.Title>
                    <Card.Text>
                        Her Loss
                    </Card.Text>
                    <Card.Text>
                    Her Loss é um álbum de estúdio colaborativo entre o rapper canadense Drake e o rapper 21 Savage. 
                    </Card.Text>
                    <Button variant="primary">Ver Álbum</Button>
                </Card.Body>
            </Card>
        </div>
        </div>
    );
}
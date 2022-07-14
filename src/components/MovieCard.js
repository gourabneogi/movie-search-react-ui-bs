import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieCard({ name, img, desc, link }) {
    return (
        <Card style={{ width: '14rem', margin: '1rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                <a href={link} target="_blank"><Button variant="primary">Find More!</Button></a>
            </Card.Body>
        </Card>
    );
}

export default MovieCard;
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

function NavBar({ searchHandler }) {
    return (
        <Navbar bg="light" expand="md">
            <Container fluid>
                <Navbar.Brand href="#">Search Your Favourite Movie!</Navbar.Brand>
                <Navbar.Collapse id="navbarScroll" className="d-flex justify-content-end">
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(event) => searchHandler(event.target.value)}
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

function NavScrollExample({ setSearch, logo }) {
  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/cocktails/new">Build your Own Drink</Nav.Link>
              <Nav.Link href="/cocktails/favorites">Favorite Drinks</Nav.Link>
              <Nav.Link href="/">Cocktails</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                onChange={handleChange}
                type="search"
                placeholder="Search Drinks"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-info" path="search">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="logo">
        <img alt="neon-flatiron-bar" src={logo} />
      </div>
    </>
  );
}

export default NavScrollExample;

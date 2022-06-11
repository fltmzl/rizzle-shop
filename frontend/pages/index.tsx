import { Product } from "@typings";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Button, Container, Navbar, NavDropdown, Nav } from "react-bootstrap";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(`http://localhost:3000/api/products`);
  const products = await response.json();

  return {
    props: {
      products,
    },
  };
};

interface Props {
  products: Product[];
}

const Home: NextPage<Props> = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Button>Button</Button>

      {products.map((product, index) => (
        <div key={index}>
          <h2></h2>
        </div>
      ))}
    </div>
  );
};

export default Home;

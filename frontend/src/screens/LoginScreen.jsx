import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Col, Row } from "react-bootstrap";
import { FormContainer } from "../components/FormContainer";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <FormContainer>
      <h1 className="text-center">Log In</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-2 " controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-2 " controlId="pass">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-3">
          Sign In
        </Button>

        <Row className="py-3 ">
          <Col>
            Don't Have an account?<Link to={"/register"}>Register</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};

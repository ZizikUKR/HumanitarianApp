import { Form, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const AdminLogin = () => {
  return (
    <Form className="m-auto" style={{width: '290px'}}>
      <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
        <Form.Label>Login</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3 text-center" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Form.Group className="d-flex justify-content-between align-items-center" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        <Button variant="primary" type="submit">
          Enter
        </Button>
      </Form.Group>
    </Form>
  );
};

export default AdminLogin;
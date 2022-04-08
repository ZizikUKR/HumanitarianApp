import { Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const AdminPanel = () => {
  return (
    <>
      <header>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled">
            LogOut
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </header>
    </>
  );
};

export default AdminPanel;
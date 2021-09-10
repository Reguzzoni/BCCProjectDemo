import React from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import MetamaskService from '../MetamaskService.js';

function DataDetails(props) {
    return (
            <>
              <Form>
                <Form.Group>
                  <Form.Row>
                    <Form.Label column="lg" lg={10}>
                      Business Name
                    </Form.Label>
                    <Col>
                      <Form.Control size="lg" type="text" />
                    </Col>
                  </Form.Row>
                  <br />
                  <Form.Row>
                    <Form.Label column lg={10}>
                      Business Tax ID
                    </Form.Label>
                    <Col>
                      <Form.Control type="text" />
                    </Col>
                  </Form.Row>
                  <br />
                  <Form.Row>
                    <Form.Label column="sm" lg={10}>
                      Country
                    </Form.Label>
                    <Col>
                      <Form.Control size="sm" type="text"  />
                    </Col>
                  </Form.Row>
                  <br />
                  <Form.Row>
                    <Form.Label column="sm" lg={10}>
                      Address
                    </Form.Label>
                    <Col>
                      <Form.Control size="sm" type="text"  />
                    </Col>
                  </Form.Row>
                  <br />
                  <Form.Row>
                    <Form.Label column="sm" lg={10}>
                      Business Code
                    </Form.Label>
                    <Col>
                      <Form.Control size="sm" type="text"  />
                    </Col>
                  </Form.Row>
                  <br />
                  <Form.Row>
                    <Form.Label column="sm" lg={10}>
                      E-mail address
                    </Form.Label>
                    <Col>
                      <Form.Control size="sm" type="text"  />
                    </Col>
                  </Form.Row>
                  <br />
                  <Form.Row>
                    <Form.Label column="sm" lg={10}>
                      Business Activity
                    </Form.Label>
                    <Col>
                      <Form.Control size="sm" type="text"  />
                    </Col>
                  </Form.Row>
                </Form.Group>
              </Form>
            </>
          
    );
}

export default DataDetails;

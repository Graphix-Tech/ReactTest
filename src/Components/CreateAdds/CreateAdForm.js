import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Modal } from "react-bootstrap";
import "./CreateAdForm.css";
import { Link } from "react-router-dom";

function CreateAdForm() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
      window.location.href = "/create-ads";
    }, 600); // 600 milliseconds (6 seconds)
  };

  useEffect(() => {
    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <section>
      <div className="TextMediaForm">
        <p>Create Text & Media</p>
        <Row className="TextMediaData">
          <Col md={6}>
            <Form.Group className="mb-3 FormInput">
              <Form.Label className="labelHeading">Heading 01</Form.Label>
              <Form.Control
                className="inputData"
                placeholder="Add a heading that would make users interested"
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Heading 02</Form.Label>
              <Form.Control
                placeholder="Add a heading that would make users interested"
                disabled
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Description 01</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Add primary text to help users understand more about your products,services or offers"
                style={{ height: "125px" }}
                disabled
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Landscape Marketing Image(1.9:1)</Form.Label>
              <Form.Control
                placeholder="Add the URL of the Image you want to use for the ad"
                disabled
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Portrait Marketing Image(4.5)</Form.Label>
              <Form.Control
                placeholder="Add the URL of the Image you want to use for the ad"
                disabled
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Super Marketing Image(1:1)</Form.Label>
              <Form.Control
                placeholder="Add the URL of the Image you want to use for the ad"
                disabled
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Label>Video URL</Form.Label>
              <Form.Control
                placeholder="Add the URL of the video you want to use for the ad"
                disabled
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Business Name</Form.Label>
              <Form.Control placeholder="Add your business name" disabled />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Button Label</Form.Label>
              <Form.Control
                placeholder="Select a tabel that best suits your ad"
                disabled
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Label>Website URL</Form.Label>
              <Form.Control
                placeholder="Add the URL of the landing page you want to redirect users to"
                disabled
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="button-container">
          <Link to="/create-ads">
            <Button variant="Light">Back</Button>
          </Link>
          <Button variant="primary" className="ml-2" onClick={handleSubmit}>
            Submit
          </Button>
        </div>

        {/* Modal component */}
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            {/* Add your custom icon or image for the check mark */}
            <Modal.Title>
              <i className="fas fa-check-circle text-success mr-2"></i>
              Submission Successful
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>Your ad has been submitted successfully.</Modal.Body>
          <Modal.Footer>
            {/* You can add additional buttons or actions here */}
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  );
}

export default CreateAdForm;

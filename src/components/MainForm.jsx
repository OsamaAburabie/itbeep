import { Button, Form } from "react-bootstrap";
import React, { useContext } from "react";
import { MainContect } from "../context/MainContext";
import "./MainForm.css";
import OfferPopup from "./OfferPopup";
import DatePopup from "./DatePopup";
function MainForm() {
  const {
    setFormData,
    FormData,
    offerPop,
    setOfferPop,
    closeOffer,
    datePop,
    setDatepop,
  } = useContext(MainContect);

  const fontSub = (e) => {
    e.preventDefault();
    setOfferPop(true);
  };
  return (
    <div className="Form__contain">
      <h1>LOGO</h1>
      <Form onSubmit={fontSub}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setFormData({ ...FormData, name: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="tel"
            onChange={(e) => {
              setFormData({ ...FormData, phone: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => {
              setFormData({ ...FormData, email: e.target.value });
            }}
          />
        </Form.Group>

        <Button block variant="primary" type="submit">
          Send
        </Button>
      </Form>
      <OfferPopup show={offerPop} onHide={closeOffer} />
      <DatePopup show={datePop} onHide={setDatepop} />
    </div>
  );
}

export default MainForm;

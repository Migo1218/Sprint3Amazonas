import { useFormik } from "formik";
import React from "react";
import { Button, ButtonGroup, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { searchAsyn } from "../actions/searchAction";

const Busqueda = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      search: "",
    },

    onSubmit: ({ search }) => {
      console.log(search);
      dispatch(searchAsyn(search));
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Row>
        <Col>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          name="search"
            placeholder="Ingrese su busqueda"
           onChange={formik.handleChange}
          />
        </Form.Group>
         
        </Col>

        <Col>
          <Button type="submit" variant="warning">
            Buscar
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Busqueda;

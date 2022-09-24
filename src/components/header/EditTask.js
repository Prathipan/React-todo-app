import React from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import * as yup from 'yup'

const EditTask = ({todo,show,setShow,updateFunc}) => {
  
  const {task,description,id} =  todo;

  const todoValidationSchema = yup.object({
    task : yup.string().required("*Task is required"),
    description : yup.string().required("*Description is mandatory")
  })

  const formik = useFormik({
    initialValues: {
      task : task,
      description : description
    },
    validationSchema : todoValidationSchema,
    onSubmit : (task) => {
      updateFunc(task,id);
      setShow(false);
    }
  })

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update task</Modal.Title>
        </Modal.Header>
        <Form className="m-3" onSubmit={formik.handleSubmit}>
        <Form.Group className="m-2">
          <input
            className="form-control"
            type="text"
            id="task"
            name="task"
            onChange={formik.handleChange}
            value={formik.values.task}
            placeholder="Enter Task"
          />
          <span style={{"color" : "red"}}>{formik.touched.task && formik.errors.task ? formik.errors.task : ""}</span>
        </Form.Group>
        <Form.Group className="m-2">
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows={5}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            placeholder="Enter Description"
          />
          <span style={{"color" : "red"}}>{formik.touched.description && formik.errors.description ? formik.errors.description : ""}</span>
        </Form.Group>
        <Modal.Footer>
        <Button variant="success" type="submit" >
          Update
        </Button>
      </Modal.Footer>
      </Form>
      </Modal>
  )
}

export default EditTask
import React,{useState} from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CreateTask = ({save ,show, setShow }) => {
  const [TaskDetail, setTaskDetail] = useState({
    task: "",
    description: "",
  });

  const handleChange = (event) => {

    const { name, value } = event.target;

        setTaskDetail((prev) => {
            return {
              ...prev,
              [name]: value,
            };
          });
    }

    

  const handleSubmit = (event) =>{
    event.preventDefault();
    save(TaskDetail);
    setTaskDetail({
      task : "",
      description : ""
    })
  }

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Task</Modal.Title>
      </Modal.Header>
      <form className="m-3" onSubmit={handleSubmit}>
        <Form.Group className="m-2">
          <Form.Control
            type="text"
            name="task"
            onChange={handleChange}
            value={TaskDetail.task}
            placeholder="Enter Task"
          />
        </Form.Group>
        <Form.Group className="m-2">
          <textarea
            className="form-control"
            rows={5}
            name="description"
            onChange={handleChange}
            value={TaskDetail.description}
            placeholder="Enter Description"
          />
        </Form.Group>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Modal.Footer>
      </form>
    </Modal>
  );
};

export default CreateTask;

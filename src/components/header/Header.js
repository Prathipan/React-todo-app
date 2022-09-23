import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from './Card';
import CreateTask from './CreateTask';
import './header.css'

const Header = () => {
  const [todo , setTodo] = useState([]);
   const [show , setShow] = useState(false);
   
    const handleShow = () => setShow(true);

    const handleSave = (TaskDetail) => {
      setTodo( [...todo,TaskDetail]);
      setShow(false);
    }
  return (
    <>
    <div className='header'>
        <h1 className=''>Todo App</h1>
        <Button variant="primary" onClick={handleShow}>Create Task</Button>
    </div>
     <CreateTask show={show} setShow={setShow} save = {handleSave} />
     <Container>
      <Row>
      {
      todo.map((task,index)=>{
        return (
          <Col xl={3} lg={4} md={6} sm={12}>
           <Card key={index} index={index} todo={task}/>
          </Col>
        )
      })
     }
      </Row>
     </Container>
    </>
    
  )
}

export default Header
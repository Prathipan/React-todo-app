import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from './Card';
import CreateTask from './CreateTask';
import './header.css'

const Header = () => {
   const [todo , setTodo] = useState([]);
   const [show , setShow] = useState(false);

   
    const handleShow = () => setShow(true);

    // const handleSave = (TaskDetail) => {
    //   setTodo( [...todo,TaskDetail]);
    //   setShow(false);
    // }
    
    
    useEffect(() => getTaskDetail ,[]);


    const getTaskDetail = () => {
      fetch( "https://61efbd81732d93001778e565.mockapi.io/todo" ,{method : "GET"} )
      .then((data) => data.json())
      .then((task) => setTodo(task))
    } 

    const handleSave = (task) => {
      fetch("https://61efbd81732d93001778e565.mockapi.io/todo" , 
      {
        method : "POST",
        body : JSON.stringify(task),
        headers : {
          "Content-type" : "application/json"
        }
      }).then(() => getTaskDetail());
    }
    


  const deleteTask = (id) => {
    fetch( `https://61efbd81732d93001778e565.mockapi.io/todo/${id}` ,{method : "DELETE"} )
      .then(() => {
        getTaskDetail();
        console.log("delete called")
      });
  }

  const updateTask = (task,id) => {
    fetch(`https://61efbd81732d93001778e565.mockapi.io/todo/${id}` , 
      {
        method : "PUT",
        body : JSON.stringify(task),
        headers : {
          "Content-type" : "application/json"
        }
      }).then(() => getTaskDetail());
  }

  return (
    <>
    <div className='header'>
        <h1 className=''>Todo App</h1>
        <Button variant="primary" onClick={handleShow}>Create Task</Button>
    </div>
     <CreateTask show={show} setShow={setShow} saveFunc = {handleSave}/>
     <Container>
      <Row>
      {
      todo.map((task,index)=>{
        return (
          <Col xl={3} lg={4} md={6} sm={12}>
           <Card key={index} index={index} todo={task} deleteTask = {deleteTask} updateTask={updateTask}/>
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
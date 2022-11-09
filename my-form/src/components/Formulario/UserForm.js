import React from 'react'
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserForm.css'

import { useFormik } from 'formik';

function UserForm() {

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            password: ''
        },
        onSubmit: value => {
            console.log(value);
        },
    });

  return (
    <>
    <div className='titulo-form'><h1>datos del usuario</h1></div>
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Label className='form-label'><span className='subtitulos'>Email address</span>
        <Form.Control
         type="email"
         name="email"
         placeholder="email" 
         onChange={formik.handleChange}
         />
         </Form.Label>

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label className='form-label'><span className='subtitulos'>Name</span>
        <Form.Control
         type="text"
         name="name"
         placeholder="name" 
         onChange={formik.handleChange}
         />
         </Form.Label>

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='form-label'><span className='subtitulos'>Password</span>
        <Form.Control
         type="password"
         name="password"
         placeholder="Password"
         onChange={formik.handleChange}
         />  
         </Form.Label>

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="primary" type="reset">
        borrar
      </Button>
    </Form> 
    </>
  )
}

export default UserForm 
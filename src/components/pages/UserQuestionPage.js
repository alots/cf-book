import React,{useState} from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

const UserQuestionPage = () => {
  const[form, setForm] = useState({
    name:'',
    email:'',
    question:''
  });
 
    const handleChange = (event) => {
      const value = event.target.value;
      let newForm = Object.assign({}, form);
      newForm[event.target.name] = value;
      setForm(newForm);
    }
  
  const handleSubmit = (event) => {
    console.log(form);
    event.preventDefault();
  }
  return (
    <Form className="question-form"onSubmit={handleSubmit}  >
      <FormGroup>
        <Label className="form-text">User Name</Label>
        <Input type="text" name="name" value={form.name} onChange={handleChange}  placeholder="enter your name" />
      </FormGroup>
      <FormGroup>
        <Label className="form-text" >Email</Label>
        <Input type="text" name="email" value={form.email} onChange={handleChange} placeholder="enter your email" />
      </FormGroup>
      <FormGroup>
        <Label className="form-text" >Your question</Label>
        <Input type="textarea" name="question" onChange={handleChange}  />
      </FormGroup>
      <Button type="submit" value="Отправить">Submit</Button>
    </Form>
  );
}

export default UserQuestionPage

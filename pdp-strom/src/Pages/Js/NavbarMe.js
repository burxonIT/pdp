import React, { Component } from 'react'
import '../Css/Navbar.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiChevronDown } from "react-icons/bi";
import Foto from '../img/Group.png';
export default class MyNavbar extends Component {

    state={
        t: localStorage.getItem("lang")?localStorage.getItem("lang"):'uz',
    }
    setLanguage(){
        var a=document.querySelector("#til").value
        console.log(a);
        localStorage.setItem("lang",a)
        window.location.reload()
    }
    componentDidMount(){
        document.querySelector("#til").value=this.state.t
    }
  render() {
    return (
      <div>
         <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="#"><img src={Foto} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',marginLeft:'130px' }}
            navbarScroll>
         <div className="sel">
             <select name=""  id="" className='select1'>
              <option  value="1">{this.state.t==='uz'?("Barcha kurslar"):("Все курсы")}</option>
              <option value="2">Front End</option>
              <option value="3">Backend</option>
              <option value="3">Vue.js</option>

          </select>
          </div>
          </Nav>
          <Form className="d-flex">
          <select name="" onChange={()=>{this.setLanguage()}} id="til">
  <option value="uz">{this.state.t==="uz"?("Ozbek"):("узбек")}</option>
  <option value="ru">{this.state.t==="uz"?("Rus tili"):("русский")}</option>
  </select>
            {this.state.t==='uz'?(<button>Kirish</button>):(<button>Введение</button>)}
            
          </Form>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    )
  }
}
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Navbar.css';
import Foto from '../img/Group.png';


export default class Navbar extends Component {
    state={
        t:localStorage.getItem("lang")?localStorage.getItem("lang"):'ru'
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
                <div className="BOR">
                <div className="navbar">
                    <div className="logo_page">
                        <img src={Foto} alt="" />
                        <select id="cars">
  <option value="volvo">Front End</option>
  <option value="saab">Backend</option>
  <option value="vw">MoDx</option>
  <option value="Barcha kurslar" selected>Barcha kurslar</option>
</select>

                    </div>
                    <div className="bat_page">
                    <select name="" onChange={()=>{this.setLanguage()}} id="til">
                    <option value="uz">{this.state.t==="uz"?("O`zbek"):("Узбек")}</option>
                    <option value="ru">{this.state.t==="uz"?("Russ tili"):("русский")}</option>
                    </select>

        <button>Kirish</button>
                    </div>
                </div>
                </div>
                
            
        
            </div>
        )
    }
}
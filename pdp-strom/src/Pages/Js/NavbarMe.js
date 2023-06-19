import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Navbar.css';
import Foto from '../img/Group.png';


export default class Navbar extends Component {
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
                    <select id="cars1">
  <option value="volvo">Rus tili</option>
  <option value="saab">Ingli Tili</option>
  <option value="vw">O'zbek Tili</option>
  <option value="UZBEK" selected>UZBEK</option>
</select>

        <button>Kirish</button>
                    </div>
                </div>
                </div>
                
            </div>
        )
    }
}
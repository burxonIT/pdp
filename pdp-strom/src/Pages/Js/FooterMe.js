import React, { Component } from 'react'
import s from  '../Css/Home.module.css'
import payme from '../img/payme.png'
import click from '../img/click.png'
import upay from '../img/upay.png'
import elli from '../img/Group 39.png'
import face from '../img/Group 40 (1).png'
import insta from '../img/Group 41.png'
import youtube from '../img/Group 42.png'
export default class Footerme extends Component {
  render() {
    return (
      <div>
        <footer>
      <div class={s.container}>
        <div className={s.divfooter1}>
          <h2>Asosiy</h2>
          <p>Loyiha haqida</p>
          <p>Kurslar</p>
          <p>Mentorlarga</p>
          <p>Ommaviy oferta</p>
          <p>Maxfiylik siyosati</p>
        </div>  
        <div id={s.fg} className={s.divfooter1}>
            <h2>Qo’shimcha</h2>
            <p>Bizning jamoa</p>
            <p>Biz bilan hamkorlik</p>
            <p>Bu qanday ishlaydi ?</p>
        </div>
        <div id={s.fg1} className={s.divfooter1}>
            <h2>Qo’llab quvvatlash</h2>
            <p>Eng ko’p beriladigan savollar</p>
            <p>Kontakt</p>
        </div>
        <div id={s.fg2} className={s.divfooter4}>
          <h2>To’lov turlari</h2>
          <div className={s.footerimg}>
            <img src={payme} alt="" />
            <img src={click} alt="" />
            <img src={upay} alt="" />

          </div>
          <h3>100011, Toshkent sh. Shayxontohur tum., <br />Zarqaynar ko'ch., 3B-uy</h3>
          <button>Biz bilan aloqa</button>
        </div>
      </div>
      <div className={s.footerbottom}>
      <img src={elli} alt="" />
      <img src={face} alt="" />
      <img src={insta} alt="" />
      <img src={youtube}  alt="" />
      </div>
      </footer>

      </div>
    )
  }
}

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
  state={
    t:localStorage.getItem("lang")?localStorage.getItem("lang"):'uz'
}
  render() {
    return (
      <div>
        <footer>
      <div class={s.container}>    
        <div className={s.divfooter1}>
          <h2>{this.state.t==='uz'?("Asosiy"):("Основной")}</h2>
          <p>{this.state.t==='uz'?("Loyiha haqida"):("О проекте")}</p>
          <p>{this.state.t==='uz'?("Kurslar"):("Курсы")}</p>
          <p>{this.state.t==='uz'?("Mentorlarga"):("Наставникам")}</p>
          <p>{this.state.t==='uz'?("Ommaviy oferta"):("Публичная оферта")}</p>
          <p>{this.state.t==='uz'?("Maxfiylik siyosati"):("политика конфиденциальности")}</p>
        </div>  
        <div id={s.fg} className={s.divfooter1}>
            <h2>{this.state.t==='uz'?("Qo’shimcha"):("Кроме того")}</h2>
            <p>{this.state.t==='uz'?("Bizning jamoa"):("Наша команда")}</p>
            <p>{this.state.t==='uz'?("Biz bilan hamkorlik"):("Сотрудничество с нами")}</p>
            <p>{this.state.t==='uz'?("Bu qanday ishlaydi ?"):("Как это работает?")}</p>
        </div>
        <div id={s.fg1} className={s.divfooter1}>
            <h2>{this.state.t==='uz'?("Qo’llab quvvatlash"):("Поддерживать")}</h2>
            <p>{this.state.t==='uz'?("Eng ko’p beriladigan savolla"):("Самый часто задаваемый вопрос")}r</p>
            <p>{this.state.t==='uz'?("Kontakt"):("Контакт")}</p>
        </div>
        <div id={s.fg2} className={s.divfooter4}>
          <h2>{this.state.t==='uz'?("To’lov turlari"):("Виды оплаты")}</h2>
          <div className={s.footerimg}>
            <img src={payme} alt="" />
            <img src={click} alt="" />
            <img src={upay} alt="" />

          </div>
         {this.state.t==='uz'?(<h3>100011, Toshkent sh. Shayxontohur tum.,<br /> Zarqaynar ko'ch., 3B-uy</h3>):(<h3>100011, Ташкентское ш. Шайхонтохурский район, улица <br /> Заргайнар, дом 3Б</h3>)}
          <button>{this.state.t==='uz'?("Biz bilan aloqa"):("Связаться с нами")}</button>
        </div>
      </div>
      <div className={s.footerbottom}>
      <img src={elli} alt="" />
      <img src={face} alt="" />
      <img src={insta} alt="" />
      <img src={youtube}  alt="" />
      </div>
      <div className={s.tegi}>
        <p>© 2019 storm.uz</p><span>|</span>
        <p>Personal Development Process LLC</p><span>|</span>
        <p>{this.state.t==='uz'?("Foydalanish shartlari"):("Условия эксплуатации")}</p>
      </div>
      </footer>

      </div>
    )
  }
}

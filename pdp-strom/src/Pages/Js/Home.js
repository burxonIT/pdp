import React, { Component } from 'react'
import Navbar from './NavbarMe'
import Footer from './FooterMe'
import s from  '../Css/Home.module.css'
import {BsSearch} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <Navbar/> */}
            <header className={s.bosh_menu}>
                <div className={s.dumaloq}>
                </div>
                <div className={s.header_text}>
                <h2>Biz sizga <span> Dasturlava </span>| <br /> boshqa kurslarni taklif qilamiz.</h2>
                <p>Siz istalgan vaqtda har qanday mavzuda kurslarni organishingiz mumkin. Buning uchun qidiruv tizimidan foydalaning</p>
                <div className= {s.header_input}>
                <input type="text" placeholder='Qanday kurs o’rganmoqchisiz ?'/>
                <div><BsSearch/></div>
                </div>
                </div>
                
                <div className={s.header_card}>
                    <div className={s.card1}>
                        <div className={s.as}>
                            <h1>Marketing</h1><h2>250.000 <span>UZS</span></h2>
                        </div>
                        <h3>Raqamli marketing bo'yicha <br /> to'liq kurs <span>| 48 soat</span></h3>
                        <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.1</p>
                        </div>
                        <button className={s.onga}><AiOutlineArrowRight/></button>
                    </div>
                    <div  className={s.card1}>
                        <div className={s.as}>
                            <h1>Marketing</h1><h2>250.000 <span>UZS</span></h2>
                        </div>
                        <h3>Raqamli marketing bo'yicha <br /> to'liq kurs <span>| 48 soat</span></h3>
                        <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.1</p>
                        </div>
                        <button className={s.onga}><AiOutlineArrowRight/></button>
                    </div>
                    <div id={s.card1} className={s.card1}>
                        <div className={s.as}>
                            <h1>Marketing</h1><h2>400.000 <span>UZS</span></h2>
                        </div>  
                        <h3>Illustrator 0 dan professionalgacha <br /> to'liq kurs <span>| 48 soat</span></h3>
                        <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.1</p>
                        </div>
                        <button className={s.onga}><AiOutlineArrowRight/></button>
                    </div>
                    <div id={s.card1} className={s.card1}>
                        <div className={s.as}>
                            <h1>Marketing</h1><h2>250.000 <span>UZS</span></h2>
                        </div>
                        <h3>Raqamli marketing bo'yicha <br /> to'liq kurs <span>| 48 soat</span></h3>
                        <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.1</p>
                        </div>
                        <button className={s.onga}><AiOutlineArrowRight/></button>
                    </div>

                </div>
                
            </header>







        <Footer/>
      </div>
    )
  }
}

import React, { Component, lazy } from 'react'
import Navbar from './NavbarMe'
import Footer from './FooterMe'
import s from  '../Css/Home.module.css'
import {BsSearch} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../img/image 3.png'
import img2 from '../img/image.png'
import img3 from '../img/image 2.png'
import img4 from '../img/image 4.png'
import img5 from '../img/image 5.png'
import img6 from '../img/Vector (14).png'
import img7 from '../img/Vector (15).png'
import img8 from '../img/Vector (16).png'
import img9 from '../img/Vector (17).png'
import img10 from '../img/Vector (18).png'
import img11 from '../img/Vector (19).png'
import img12 from '../img/Vector (20).png'
import img13 from '../img/Vector (21).png'
import img14 from '../img/Rectangle 11.1.png'
import img15 from '../img/Rectangle 11.3.png'
import img16 from '../img/Rectangle 11.5.png'
import img17 from '../img/Rectangle 11.7.png'
import img18 from '../img/Rectangle 11.9.png'
import img19 from '../img/Rectangle 11.11.png'
import img20 from '../img/Ellipse.png'
import pinterest from '../img/Group 23.png'
import adidas from '../img/download.png'
import lya from '../img/download 5.png'
import sur from '../img/download 3.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import axios from 'axios'
export default class Home extends Component {
    state={
        t:localStorage.getItem("lang")?localStorage.getItem("lang"):'uz',
        data:[]
        

    }
    buy(item){
        console.log(item);
        var b=this.state.buy
        b.push(item)
        this.setState({buy:b})
    }
    componentDidMount(){
        axios.get('https://markaz-yhlk.onrender.com/course').then(res=>{
            this.setState({data:res.data})
        }).catch(err=>{
            alert(err)
        })
    }
    
render() {
return (
        <div>
        <Navbar/>
        {/* <div className={s.cardss}>
        {this.state.data.map((item,key)=>{
            if(key===0 || key===1){

            
            return <Card style={{ width: '18rem' }}>
        
      <Card.Img variant="top" src={item.course_img} />
      <Card.Body>
        <Card.Title>{item.course_title_ru}</Card.Title>
        <Card.Text>
         {item.course_price} som
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      }
    })}
    </div> */}
            <header className={s.bosh_menu}>
                <div className={s.dumaloq}>
                </div>
                <div className={s.header_text}>
                <h2>{this.state.t==='uz'?("Biz sizga"):("Мы к вам")} <span>{this.state.t==='uz'?(" Dasturlava"):("Программное обеспечение")} </span>|<br /> {this.state.t==='uz'?("boshqa kurslarni taklif qilamiz."):("мы предлагаем другие курсы.")} </h2>
                <p>{this.state.t==='uz'?("Siz istalgan vaqtda har qanday mavzuda kurslarni organishingiz mumkin. Buning uchun qidiruv tizimidan foydalaning")
                :("Вы можете организовать курсы по любой теме в любое время. Используйте для этого поисковик")}</p>
                <div className= {s.header_input}>
                <input type="text" placeholder={this.state.t==='uz'?("Qanday kurs o’rganmoqchisiz ?"):("Какой курс вы хотите изучать?")}/>
                <div><BsSearch/></div>
                </div>
                </div>
                
                <div className={s.header_card}>
                    <div className={s.card1}>
                        <div className={s.as}>            
                            <h1>{this.state.t==='uz'?(" Marketing"):("Маркетинг")}</h1><h2>250.000 <span>UZS</span></h2>
                        </div>
                        <h3>{this.state.t==='uz'?("Raqamli marketing bo'yicha "):("О цифровом маркетинге")} <br />{this.state.t==='uz'?("to'liq kurs"):("полный курс")}  <span>| 48 {this.state.t==='uz'?("soat"):("час")} </span></h3>
                        <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.1</p>
                        </div>
                        <button className={s.onga}><AiOutlineArrowRight/></button>
                    </div>
                    <div id={s.card0}  className={s.card1}>
                        <div className={s.as}>
                            <h1 className={s.hh2}>{this.state.t==='uz'?("Dasturlash"):("Программирование")}</h1><h2>250.000 <span>UZS</span></h2>
                        </div>
                        <h3>{this.state.t==='uz'?("Java Spring bo’yicha to’liqkurs(amaliy)"):("Полный курс по Java Spring")} <br /> {this.state.t==='uz'?("to'liq kurs"):("полный курс")} <span>|48 {this.state.t==='uz'?("soat"):("час")}</span></h3>
                        <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.0</p>
                        </div>
                        <button className={s.onga}><AiOutlineArrowRight/></button>
                    </div>
                    <div id={s.card1} className={s.card1}>
                        <div className={s.as}>
                            <h1 className={s.hh1}>{this.state.t==='uz'?("Dizayn"):("Дизайн")}</h1><h2>400.000 <span>UZS</span></h2>
                        </div>  
                        <h3>{this.state.t==='uz'?("Illustrator 0 dan professionalgacha"):("Иллюстратор от 0 до про")} <br /> {this.state.t==='uz'?("to'liq kurs"):("полный курс")} <span>| 48 {this.state.t==='uz'?("soat"):("час")}</span></h3>
                        <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.1</p>
                        </div>
                        <button className={s.onga}><AiOutlineArrowRight/></button>
                    </div>
                    <div id={s.card2} className={s.card1}>
                        <div className={s.as}>
                            <h1 className={s.hh3}>{this.state.t==='uz'?("Biznes"):("Бизнес")}</h1><h2>250.000 <span>UZS</span></h2>
                        </div>
                        <h3>{this.state.t==='uz'?("Shaxsiy biznersni rivojlantin"):("Развивайте личный бизнес")}<br />{this.state.t==='uz'?("to'liq kurs"):("полный курс")} <span>| 48 {this.state.t==='uz'?("soat"):("час")}</span></h3>
                        <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.1</p>
                        </div>
                        <button className={s.onga}><AiOutlineArrowRight/></button>
                    </div>

                </div>  
            </header>
            <div className={s.divbig}> 
                <h1 className={s.divbigh1}>  {this.state.t==='uz'?("Bizning eng top kurslarimizni ko'rib chiqing"):("Ознакомьтесь с нашими лучшими курсами ")}</h1>
                <div className={s.div1}>
                    <div className={s.div1card1}>
                        <img src={img1} alt="" />
                        <div className={s.mm1}>
                        <h2>{this.state.t==='uz'?("Dasturlash"):("Программирование")}</h2>
                        </div>
                        <h1>{this.state.t==='uz'?("Java, Spring bo’yicha to’liq"):("Полный на Java, Spring")} <br /> {this.state.t==='uz'?("kurs.  (amaliy)"):("курс. (практический)")}</h1>
                        <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.1</p> <span>(524)</span>
                        </div>
                        <div className={s.pdiv}>
                        <p>{this.state.t==='uz'?("Kurs hajmi"):("Размер поля")}</p><p>{this.state.t==='uz'?("Kurs narxi"):("Стоимость курса")}</p>
                        </div>
                        <div className={s.h1div}>
                            <h1>38 {this.state.t==='uz'?("soat"):("час")}</h1><h1>250.000 <span>UZS</span></h1>
                        </div>
                        <button className={s.onga1}><AiOutlineArrowRight/></button>
                    </div>
                    <div className={s.div1card2}>
                        <img src={img2} alt="" />
                        <div className={s.mm2}>
                        <h2>{this.state.t==='uz'?("Dizayn"):("Дизайн")}</h2>
                        </div>
                        <h1> {this.state.t==='uz'?("Illustrator boshlang’ichdan proffessionalgacha"):("Иллюстратор от новичка до профессионала")}</h1>
                        <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.1</p> <span>(524)</span>
                        </div>
                        <div className={s.pdiv}>
                        <p>{this.state.t==='uz'?("Kurs hajmi"):("Размер поля")}</p><p>{this.state.t==='uz'?("Kurs narxi"):("Стоимость курса")}</p>
                        </div>
                        <div className={s.h1div}>
                            <h1>38 {this.state.t==='uz'?("soat"):("час")}</h1><h1>250.000 <span>UZS</span></h1>
                        </div>
                        <button className={s.onga1}><AiOutlineArrowRight/></button>
                    </div>
                </div> 
            </div>
            <div className={s.div2}>
                <div className={s.div1card3}>
                        <img src={img3} alt="" />
                        <div className={s.mm2}>          
                        <h2>{this.state.t==='uz'?("Dizayn"):("Дизайн")}</h2>
                        </div>
                        <h1> {this.state.t==='uz'?("Boshlang’ich Photoshop"):("Базовый Фотошоп")} <br /> {this.state.t==='uz'?("kurslari"):("курсы")} </h1>
                        <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.0</p> <span>(524)</span>
                        </div>
                        <div className={s.pdiv}>
                        <p>{this.state.t==='uz'?("Kurs hajmi"):("Размер поля")}</p><p>{this.state.t==='uz'?("Kurs narxi"):("Стоимость курса")}</p>
                        </div>
                        <div className={s.h1div}>
                            <h2>42 {this.state.t==='uz'?("soat"):("час")}</h2><h2>370.000 <span>UZS</span></h2>
                        </div>
                        <button className={s.onga1}><AiOutlineArrowRight/></button>
                    </div>
                    <div className={s.div1card4}>
                        <img src={img4} alt="" />
                        <div className={s.mm3}>
                        <h2>{this.state.t==='uz'?("Biznes"):("Бизнес")}</h2>
                        </div>
                        <h1>{this.state.t==='uz'?("Shaxsiy biznesni rivojlan-"):("Развитие личного бизнеса")} <br /> {this.state.t==='uz'?("tirish qoidalari"):("эмпирические правила")}</h1>
                        <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.0</p> <span>(524)</span>
                        </div>
                        <div className={s.pdiv}>
                        <p>{this.state.t==='uz'?("Kurs hajmi"):("Размер поля")}</p><p>{this.state.t==='uz'?("Kurs narxi"):("Стоимость курса")}</p>
                        </div>
                        <div className={s.h1div}>
                            <h2>16 {this.state.t==='uz'?("soat"):("час")}</h2><h2>420.000 <span>UZS</span></h2>
                        </div>
                        <button className={s.onga1}><AiOutlineArrowRight/></button>
                    </div>
                    <div className={s.div1card3}>
                        <img src={img5} alt="" />
                        <div className={s.mm4}>
                        <h2>{this.state.t==='uz'?("Dizayn"):("Дизайн")}</h2>
                        </div>
                        <h1>{this.state.t==='uz'?("1C bo’yicha to’liq kurs"):("Полный курс по 1С")} <br />{this.state.t==='uz'?("(amaliy)"):("(практический)")}</h1>
                        <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.1</p> <span>(524)</span>
                        </div>
                        <div className={s.pdiv}>
                        <p>{this.state.t==='uz'?("Kurs hajmi"):("Размер поля")}</p><p>{this.state.t==='uz'?("Kurs narxi"):("Стоимость курса")}</p>
                        </div>
                        <div className={s.h1div}>
                            <h2>36 {this.state.t==='uz'?("soat"):("час")}</h2><h2>450.000 <span>UZS</span></h2>
                        </div>
                        <button className={s.onga1}><AiOutlineArrowRight/></button>
                    </div>
            </div>
            <div className={s.divbig2}>
            <div className={s.div12}>
            <h1>{this.state.t==='uz'?("Top kategoriyalar"):("Лучшие категории")} </h1><button>{this.state.t==='uz'?("Barchasi"):("Все")}</button>             {this.state.t==='uz'?(""):("")}
            </div>
            <div className={s.divcards}>
                <div className={s.carddiv}>
                    <img src={img6} alt="" />
                    <h2 className={s.ddd}>{this.state.t==='uz'?("Dasturlash"):("Программирование")}</h2>
                </div>
                <div className={s.carddiv}>
                    <img src={img7} alt="" />
                    <h2>{this.state.t==='uz'?("Dizayn"):("Дизайн")}</h2>
                </div>
                <div className={s.carddiv}>
                    <img src={img8} alt="" />
                    <h2> Biznes</h2>
                </div>
                <div className={s.carddiv}>
                    <img src={img9} alt="" />
                    <h2>{this.state.t==='uz'?("Buxgalteriya"):("Бухгалтерский учет")}</h2>
                </div>
                </div>
                <div className={s.divcards2}>
                <div className={s.carddiv}>
                    <img src={img10} alt="" />
                    <h2>{this.state.t==='uz'?("Marketing"):("Маркетинг")}</h2>
                </div>
                <div className={s.carddiv}>
                    <img src={img11} alt="" />
                    <h2>{this.state.t==='uz'?("Menejment"):("Управление")}</h2>
                </div>
                <div className={s.carddiv}>
                    <img src={img12} alt="" />
                    <h2>{this.state.t==='uz'?("Xavfsizlik"):("Безопасность")}</h2>
                </div>
                <div className={s.carddiv}>
                    <img src={img13} alt="" />
                    <h2>{this.state.t==='uz'?("Salomatlik"):("Безопасность")}</h2>
                </div>
                </div>
                <div className={s.divcards3}>
                    <h3>{this.state.t==='uz'?("Dasturlash"):("Программирование")}</h3>
                    <h3>{this.state.t==='uz'?("Dizayn"):("Дизайн")}</h3>
                    <h3>{this.state.t==='uz'?("Marketing"):("Маркетинг")}</h3>
                    <h3>{this.state.t==='uz'?("Biznes"):("Бизнес")}</h3>
                    <h3>{this.state.t==='uz'?("Salomatlik"):("Безопасность")}</h3>
                    <h3>{this.state.t==='uz'?("Menejment"):("Управление")}</h3>
                    <h3>{this.state.t==='uz'?("Buxgalteriya"):("Бухгалтерский учет")}</h3>
                    <h3>{this.state.t==='uz'?("Tarmoq"):("Сеть")}</h3>
                </div>
            </div>
            <div className={s.divbig3}>
            <div className={s.card11}>
                <img src={img14} alt="" />
                <div className={s.mm1}>
                        <h2>{this.state.t==='uz'?("Dasturlash"):("Программирование")}</h2>
                        </div>
                <h1>{this.state.t==='uz'?("Python bo’yicha boshlang’ich dasturlash"):("Базовое программирование на Python")}</h1>
                <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.0</p> <span>(524)</span>
                        </div>
                        <div className={s.pdiv1}>
                        <p>{this.state.t==='uz'?("Kurs hajmi"):("Размер поля")}</p><p>{this.state.t==='uz'?("Kurs narxi"):("Стоимость курса")}</p>
                        </div>
                        <div className={s.h1div}>
                            <h3>42 {this.state.t==='uz'?("soat"):("час")}</h3><h3>370.000 <span>UZS</span></h3>
                        </div>
                        <button className={s.onga1}><AiOutlineArrowRight/></button>
                    
            </div>
            <div className={s.card11}>
                <img src={img15} alt="" />
                <div className={s.mm1}>
                        <h2>{this.state.t==='uz'?("Dasturlash"):("Программирование")}</h2>
                        </div>
                        <h1>{this.state.t==='uz'?("Python bo’yicha boshlang’ich dasturlash"):("Базовое программирование на Python")}</h1>
                <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.0</p> <span>(524)</span>
                        </div>
                        <div className={s.pdiv1}>
                        <p>{this.state.t==='uz'?("Kurs hajmi"):("Размер поля")}</p><p>{this.state.t==='uz'?("Kurs narxi"):("Стоимость курса")}</p>
                        </div>
                        <div className={s.h1div}>
                            <h3>42 {this.state.t==='uz'?("soat"):("час")}</h3><h3>370.000 <span>UZS</span></h3>
                        </div>
                        <button className={s.onga1}><AiOutlineArrowRight/></button>
                    
            </div>
            <div className={s.card11}>
                <img src={img16} alt="" />
                <div className={s.mm1}>
                        <h2>{this.state.t==='uz'?("Dasturlash"):("Программирование")}</h2>
                        </div>
                        <h1>{this.state.t==='uz'?("Python bo’yicha boshlang’ich dasturlash"):("Базовое программирование на Python")}</h1>
                <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.0</p> <span>(524)</span>
                        </div>
                        <div className={s.pdiv1}>
                        <p>{this.state.t==='uz'?("Kurs hajmi"):("Размер поля")}</p><p>{this.state.t==='uz'?("Kurs narxi"):("Стоимость курса")}</p>
                        </div>
                        <div className={s.h1div}>
                            <h3>42 {this.state.t==='uz'?("soat"):("час")}</h3><h3>370.000 <span>UZS</span></h3>
                        </div>
                        <button className={s.onga1}><AiOutlineArrowRight/></button>
                    
            </div>
            <div className={s.card11}>
                <img src={img17} alt="" />
                <div className={s.mm1}>
                        <h2>{this.state.t==='uz'?("Dasturlash"):("Программирование")}</h2>
                        </div>
                        <h1>{this.state.t==='uz'?("Python bo’yicha boshlang’ich dasturlash"):("Базовое программирование на Python")}</h1>
                <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.0</p> <span>(524)</span>
                        </div>
                        <div className={s.pdiv1}>
                        <p>{this.state.t==='uz'?("Kurs hajmi"):("Размер поля")}</p><p>{this.state.t==='uz'?("Kurs narxi"):("Стоимость курса")}</p>
                        </div>
                        <div className={s.h1div}>
                            <h3>42 {this.state.t==='uz'?("soat"):("час")}</h3><h3>370.000 <span>UZS</span></h3>
                        </div>
                        <button className={s.onga1}><AiOutlineArrowRight/></button>
                    
            </div>
            <div className={s.card11}>
                <img src={img18} alt="" />
                <div className={s.mm1}>
                        <h2>{this.state.t==='uz'?("Dasturlash"):("Программирование")}</h2>
                        </div>
                        <h1>{this.state.t==='uz'?("Python bo’yicha boshlang’ich dasturlash"):("Базовое программирование на Python")}</h1>
                <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.0</p> <span>(524)</span>
                        </div>
                        <div className={s.pdiv1}>
                        <p>{this.state.t==='uz'?("Kurs hajmi"):("Размер поля")}</p><p>{this.state.t==='uz'?("Kurs narxi"):("Стоимость курса")}</p>
                        </div>
                        <div className={s.h1div}>
                            <h3>42 {this.state.t==='uz'?("soat"):("час")}</h3><h3>370.000 <span>UZS</span></h3>
                        </div>
                        <button className={s.onga1}><AiOutlineArrowRight/></button>
                    
            </div>
            <div className={s.card11}>
                <img src={img19} alt="" />
                <div className={s.mm1}>
                        <h2>{this.state.t==='uz'?("Dasturlash"):("Программирование")} </h2>
                        </div>
                        <h1>{this.state.t==='uz'?("Python bo’yicha boshlang’ich dasturlash"):("Базовое программирование на Python")}</h1>
                <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.0</p> <span>(524)</span>
                        </div>
                        <div className={s.pdiv1}>
                        <p>{this.state.t==='uz'?("Kurs hajmi"):("Размер поля")}</p><p>{this.state.t==='uz'?("Kurs narxi"):("Стоимость курса")}</p>
                        </div>
                        <div className={s.h1div}>
                            <h3>42 {this.state.t==='uz'?("soat"):("час")}</h3><h3>370.000 <span>UZS</span></h3>
                        </div>
                        <button className={s.onga1}><AiOutlineArrowRight/></button>
                    
            </div>
            </div>
            <div className={s.divbig4}>
            {this.state.t==='uz'?(<h1>“O’z qalbing va ichki sezgingga ergashishuchun<br/> yetarlicha juratli bol. Zotan shu ikki tuygu <br /> sening aslida kim bo’lishni xoxlashingni aniq biladi.”</h1>):(<h1>«Следовать своему сердцу и интуиции<br />быть достаточно храбрым. Это два чувства <br /> точно знает, кем ты действительно хочешь быть».</h1>)}
            </div>
            <div className={s.divbig5}> 
                <h1>{this.state.t==='uz'?("Biz haqimizda boshqalar fikri"):("Что другие думают о нас")} </h1>
            <div className={s.divswiper}>
            <Swiper navigation={true} modules={[Navigation]} className={s.mySwiper}>
        <SwiperSlide>  <div class={s.slide}>
        <img src={img20} alt="" />
        <h2>{this.state.t==='uz'?("Ted Howard"):("Тед Ховард")}</h2>
        <span>{this.state.t==='uz'?("Senior Designer"):("Старший дизайнер")}</span>
        {this.state.t==='uz'?(<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras turpis <br /> volutpat libero orci placerat varius. Diam egestas morbi suspendisse morbi. <br /> Quis et volutpat donec ipsum malesuada ipsum mattis tincidunt mattis. <br /> Proin tristique ultrices egestas ut vitae consectetur est.</p>):(<p>Следовать своему сердцу и интуиции <br />быть достаточно храбрым. Это два чувства <br />точно знает, кем ты действительно хочешь быть</p>)}
        </div> </SwiperSlide>
        <SwiperSlide>  <div class={s.slide}>
        <img src={img20} alt="" />
        <h2>{this.state.t==='uz'?("Ted Howard"):("Тед Ховард")}</h2>
        <span>{this.state.t==='uz'?("Senior Designer"):("Старший дизайнер")}</span>
        {this.state.t==='uz'?(<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras turpis <br /> volutpat libero orci placerat varius. Diam egestas morbi suspendisse morbi. <br /> Quis et volutpat donec ipsum malesuada ipsum mattis tincidunt mattis. <br /> Proin tristique ultrices egestas ut vitae consectetur est.</p>):(<p>Следовать своему сердцу и интуиции <br />быть достаточно храбрым. Это два чувства <br />точно знает, кем ты действительно хочешь быть</p>)}
        </div> </SwiperSlide>
        <SwiperSlide>  <div class={s.slide}>
        <img src={img20} alt="" />
        <h2>{this.state.t==='uz'?("Ted Howard"):("Тед Ховард")}</h2>
        <span>{this.state.t==='uz'?("Senior Designer"):("Старший дизайнер")}</span>
        {this.state.t==='uz'?(<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras turpis <br /> volutpat libero orci placerat varius. Diam egestas morbi suspendisse morbi. <br /> Quis et volutpat donec ipsum malesuada ipsum mattis tincidunt mattis. <br /> Proin tristique ultrices egestas ut vitae consectetur est.</p>):(<p>Следовать своему сердцу и интуиции <br />быть достаточно храбрым. Это два чувства <br />точно знает, кем ты действительно хочешь быть</p>)}
        </div></SwiperSlide>
 
      </Swiper>
            </div>
        
            </div>
            <div className={s.divbig6}>
                <h1>{this.state.t==='uz'?("Bizning hamkorlar"):("Наши партнеры")}</h1>
                <div className={s.divbigimg}>
                <div className={s.divimg}>
                    <a href=""><img src={pinterest} alt="" /></a>
                </div>
                <div className={s.divimg}>
                  <a href="">  <img src={adidas} alt="" /></a>
                </div>
                <div className={s.divimg}>
                    <a href=""><img src={lya} alt="" /></a>
                  
                </div>
                <div className={s.divimg}>
                   <a href=""> <img src={sur} alt="" /></a>
                </div>
                </div>
            </div>
        <Footer/>
        </div>
)
}
}

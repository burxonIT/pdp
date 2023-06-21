import React, { Component, lazy } from 'react'
import Navbar from './NavbarMe'
import Footer from './FooterMe'
import s from  '../Css/Home.module.css'
import {BsSearch} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
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
export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
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
                            <h1 >Marketing</h1><h2>250.000 <span>UZS</span></h2>
                        </div>
                        <h3>Raqamli marketing bo'yicha <br /> to'liq kurs <span>| 48 soat</span></h3>
                        <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.1</p>
                        </div>
                        <button className={s.onga}><AiOutlineArrowRight/></button>
                    </div>
                    <div id={s.card0}  className={s.card1}>
                        <div className={s.as}>
                            <h1 className={s.hh2}>Dasturlash</h1><h2>250.000 <span>UZS</span></h2>
                        </div>
                        <h3>Java Spring bo’yicha to’liqkurs(amaliy) <br /> to'liq kurs <span>| 48 soat</span></h3>
                        <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.0</p>
                        </div>
                        <button className={s.onga}><AiOutlineArrowRight/></button>
                    </div>
                    <div id={s.card1} className={s.card1}>
                        <div className={s.as}>
                            <h1 className={s.hh1}>Dizayn</h1><h2>400.000 <span>UZS</span></h2>
                        </div>  
                        <h3>Illustrator 0 dan professionalgacha <br /> to'liq kurs <span>| 48 soat</span></h3>
                        <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.1</p>
                        </div>
                        <button className={s.onga}><AiOutlineArrowRight/></button>
                    </div>
                    <div id={s.card2} className={s.card1}>
                        <div className={s.as}>
                            <h1 className={s.hh3}>Biznes</h1><h2>250.000 <span>UZS</span></h2>
                        </div>
                        <h3>Shaxsiy biznersni rivojlantin<br /> to'liq kurs <span>| 48 soat</span></h3>
                        <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.1</p>
                        </div>
                        <button className={s.onga}><AiOutlineArrowRight/></button>
                    </div>

                </div>
                
            </header>
            <div className={s.divbig}>
                <h1 className={s.divbigh1}>Bizning eng top kurslarimizni ko'rib chiqing</h1>
                <div className={s.div1}>
                    <div className={s.div1card1}>
                        <img src={img1} alt="" />
                        <div className={s.mm1}>
                        <h2>Dasturlash</h2>
                        </div>
                        <h1>Java, Spring bo’yicha to’liq <br /> kurs.  (amaliy)</h1>
                        <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.1</p> <span>(524)</span>
                        </div>
                        <div className={s.pdiv}>
                        <p>Kurs hajmi</p><p>Kurs narxi</p>
                        </div>
                        <div className={s.h1div}>
                            <h1>38 soat</h1><h1>250.000 <span>UZS</span></h1>
                        </div>
                        <button className={s.onga1}><AiOutlineArrowRight/></button>
                    </div>
                    <div className={s.div1card2}>
                        <img src={img2} alt="" />
                        <div className={s.mm2}>
                        <h2>Dizayn</h2>
                        </div>
                        <h1>Illustrator boshlang’ichdan proffessionalgacha</h1>
                        <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.1</p> <span>(524)</span>
                        </div>
                        <div className={s.pdiv}>
                        <p>Kurs hajmi</p><p>Kurs narxi</p>
                        </div>
                        <div className={s.h1div}>
                            <h1>38 soat</h1><h1>250.000 <span>UZS</span></h1>
                        </div>
                        <button className={s.onga1}><AiOutlineArrowRight/></button>
                    </div>
                </div>
                <div className={s.div2}>
                <div className={s.div1card3}>
                        <img src={img3} alt="" />
                        <div className={s.mm2}>
                        <h2>Dizayn</h2>
                        </div>
                        <h1>Boshlang’ich Photoshop <br /> kurslari</h1>
                        <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.0</p> <span>(524)</span>
                        </div>
                        <div className={s.pdiv}>
                        <p>Kurs hajmi</p><p>Kurs narxi</p>
                        </div>
                        <div className={s.h1div}>
                            <h2>42 soat</h2><h2>370.000 <span>UZS</span></h2>
                        </div>
                        <button className={s.onga1}><AiOutlineArrowRight/></button>
                    </div>
                    <div className={s.div1card4}>
                        <img src={img4} alt="" />
                        <div className={s.mm3}>
                        <h2>Biznes</h2>
                        </div>
                        <h1>Shaxsiy biznesni rivojlan- <br /> tirish qoidalari</h1>
                        <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.0</p> <span>(524)</span>
                        </div>
                        <div className={s.pdiv}>
                        <p>Kurs hajmi</p><p>Kurs narxi</p>
                        </div>
                        <div className={s.h1div}>
                            <h2>16 soat</h2><h2>420.000 <span>UZS</span></h2>
                        </div>
                        <button className={s.onga1}><AiOutlineArrowRight/></button>
                    </div>
                    <div className={s.div1card3}>
                        <img src={img5} alt="" />
                        <div className={s.mm4}>
                        <h2>Dizayn</h2>
                        </div>
                        <h1>1C bo’yicha to’liq kurs <br />(amaliy)</h1>
                        <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.1</p> <span>(524)</span>
                        </div>
                        <div className={s.pdiv}>
                        <p>Kurs hajmi</p><p>Kurs narxi</p>
                        </div>
                        <div className={s.h1div}>
                            <h2>36 soat</h2><h2>450.000 <span>UZS</span></h2>
                        </div>
                        <button className={s.onga1}><AiOutlineArrowRight/></button>
                    </div>
                </div>
            </div>
            <div className={s.divbig2}>
            <div className={s.div12}>
            <h1>Top kategoriyalar</h1><button>Barchasi</button>
            </div>
            <div className={s.divcards}>
                <div className={s.carddiv}>
                    <img src={img6} alt="" />
                    <h2>Dasturlash</h2>
                </div>
                <div className={s.carddiv}>
                    <img src={img7} alt="" />
                    <h2>Dizayn</h2>
                </div>
                <div className={s.carddiv}>
                    <img src={img8} alt="" />
                    <h2> Biznes</h2>
                </div>
                <div className={s.carddiv}>
                    <img src={img9} alt="" />
                    <h2>Buxgalteriya</h2>
                </div>
                </div>
                <div className={s.divcards2}>
                <div className={s.carddiv}>
                    <img src={img10} alt="" />
                    <h2>Marketing</h2>
                </div>
                <div className={s.carddiv}>
                    <img src={img11} alt="" />
                    <h2>Menejment</h2>
                </div>
                <div className={s.carddiv}>
                    <img src={img12} alt="" />
                    <h2>Xavfsizlik</h2>
                </div>
                <div className={s.carddiv}>
                    <img src={img13} alt="" />
                    <h2>Salomatlik</h2>
                </div>
                </div>
                <div className={s.divcards3}>
                    <h3>Dasturlash</h3>
                    <h3>Dizayn</h3>
                    <h3>Marketing</h3>
                    <h3>Biznes</h3>
                    <h3>Salomatlik</h3>
                    <h3>Menejment</h3>
                    <h3>Buxgalteriya</h3>
                    <h3>Tarmoq</h3>
                </div>
            </div>
            <div className={s.divbig3}>
            <div className={s.card11}>
                <img src={img14} alt="" />
                <div className={s.mm1}>
                        <h2>Dasturlash</h2>
                        </div>
                <h1>Python bo’yicha boshlang’ich <br /> dasturlash</h1>
                <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.0</p> <span>(524)</span>
                        </div>
                        <div className={s.pdiv1}>
                        <p>Kurs hajmi</p><p>Kurs narxi</p>
                        </div>
                        <div className={s.h1div}>
                            <h3>42 soat</h3><h3>370.000 <span>UZS</span></h3>
                        </div>
                        <button className={s.onga1}><AiOutlineArrowRight/></button>
                    
            </div>
            <div className={s.card11}>
                <img src={img15} alt="" />
                <div className={s.mm1}>
                        <h2>Dasturlash</h2>
                        </div>
                <h1>Python bo’yicha boshlang’ich <br /> dasturlash</h1>
                <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.0</p> <span>(524)</span>
                        </div>
                        <div className={s.pdiv1}>
                        <p>Kurs hajmi</p><p>Kurs narxi</p>
                        </div>
                        <div className={s.h1div}>
                            <h3>42 soat</h3><h3>370.000 <span>UZS</span></h3>
                        </div>
                        <button className={s.onga1}><AiOutlineArrowRight/></button>
                    
            </div>
            <div className={s.card11}>
                <img src={img16} alt="" />
                <div className={s.mm1}>
                        <h2>Dasturlash</h2>
                        </div>
                <h1>Python bo’yicha boshlang’ich <br /> dasturlash</h1>
                <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.0</p> <span>(524)</span>
                        </div>
                        <div className={s.pdiv1}>
                        <p>Kurs hajmi</p><p>Kurs narxi</p>
                        </div>
                        <div className={s.h1div}>
                            <h3>42 soat</h3><h3>370.000 <span>UZS</span></h3>
                        </div>
                        <button className={s.onga1}><AiOutlineArrowRight/></button>
                    
            </div>
            <div className={s.card11}>
                <img src={img17} alt="" />
                <div className={s.mm1}>
                        <h2>Dasturlash</h2>
                        </div>
                <h1>Python bo’yicha boshlang’ich <br /> dasturlash</h1>
                <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.0</p> <span>(524)</span>
                        </div>
                        <div className={s.pdiv1}>
                        <p>Kurs hajmi</p><p>Kurs narxi</p>
                        </div>
                        <div className={s.h1div}>
                            <h3>42 soat</h3><h3>370.000 <span>UZS</span></h3>
                        </div>
                        <button className={s.onga1}><AiOutlineArrowRight/></button>
                    
            </div>
            <div className={s.card11}>
                <img src={img18} alt="" />
                <div className={s.mm1}>
                        <h2>Dasturlash</h2>
                        </div>
                <h1>Python bo’yicha boshlang’ich <br /> dasturlash</h1>
                <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.0</p> <span>(524)</span>
                        </div>
                        <div className={s.pdiv1}>
                        <p>Kurs hajmi</p><p>Kurs narxi</p>
                        </div>
                        <div className={s.h1div}>
                            <h3>42 soat</h3><h3>370.000 <span>UZS</span></h3>
                        </div>
                        <button className={s.onga1}><AiOutlineArrowRight/></button>
                    
            </div>
            <div className={s.card11}>
                <img src={img19} alt="" />
                <div className={s.mm1}>
                        <h2>Dasturlash</h2>
                        </div>
                <h1>Python bo’yicha boshlang’ich <br /> dasturlash</h1>
                <div className={s.yulduz}>
                        <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/> <AiFillStar className={s.yulduzcha}/><AiFillStar className={s.yulduz1}/><p>4.0</p> <span>(524)</span>
                        </div>
                        <div className={s.pdiv1}>
                        <p>Kurs hajmi</p><p>Kurs narxi</p>
                        </div>
                        <div className={s.h1div}>
                            <h3>42 soat</h3><h3>370.000 <span>UZS</span></h3>
                        </div>
                        <button className={s.onga1}><AiOutlineArrowRight/></button>
                    
            </div>
            </div>
            <div className={s.divbig4}>
                <h1>“O’z qalbing va ichki sezgingga ergashishuchun <br />  yetarlicha jur’atli bo’l. Zotan shu ikki tuyg’u <br /> sening aslida kim bo’lishni xoxlashingni aniq biladi.”</h1>
            </div>
            <div className={s.divbig5}>
                <h1>Biz haqimizda boshqalar fikri</h1>
  <div class={s.swipers}>
    {/* <div class={s.slide}>
        <img src={img20} alt="" />
        <h2>Ted Howard</h2>
        <span>Senior Designer</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras turpis <br /> volutpat libero orci placerat varius. Diam egestas morbi suspendisse morbi. <br /> Quis et volutpat donec ipsum malesuada ipsum mattis tincidunt mattis. <br /> Proin tristique ultrices egestas ut vitae consectetur est.</p>
        </div> */}
    {/* <div class={s.slide}>Slide 2</div>
    <div class={s.slide}>Slide 3</div> */}
            </div>
            </div>
            <div className={s.divbig6}>
                <h1>Bizning hamkorlar</h1>
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

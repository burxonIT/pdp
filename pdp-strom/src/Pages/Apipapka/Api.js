import React, { Component } from 'react'

export default class Api extends Component {
    state={
        teacher:[{
            teacherid:1,
            teacher_uz:"Burxon_uz",
            teacher_ru:"Burxon_ru",

        },{
            teacherid:2,
            teacher_uz:"BURXON_UZ",
            teacher_ru:"BURXON_RU"
        },],
        t:"uz"
    }
    postData=()=>{
        var data={
            'course_teacherid':document.querySelector("#ss").value*1,
            'course_title_ru':document.querySelector("#dd").value,
            "course_img":document.querySelector("#as").files[0]
        }
        console.log(data);

    }
    render() {
    return (
      <div>
        <input id='dd' type="text" />
        <select name="" id="ss">
        {this.state.teacher.map(item=>{
        return <option value={item.teacherid}>{this.state.t==="uz"?(item.teacher_uz):(item.teacher_ru)}</option>
        })}

        </select>
        <input type="file" name="" id="as" />
        <button onClick={()=>{this.postData()}}>send</button>
      </div>
    )
  }
}

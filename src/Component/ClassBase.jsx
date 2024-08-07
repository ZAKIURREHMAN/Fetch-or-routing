import React, { Component } from 'react'

export default class ClassBase extends Component {
    constructor(props){
        super(props);

        this.state = {
            age: props.age,
            name:props.name,
        }
    }
     Incremant = ()=>{
        this.setState(pre=>({
            age:pre.age+1,
            name:"Yasir"
        }))
    }
  render() {
    const {age} = this.state;
    const {name} = this.state
    return (
      <div>{age} <br />
      {name} <br />
      <button onClick={this.Incremant} >Increament</button>
      </div>
    )
  }
}

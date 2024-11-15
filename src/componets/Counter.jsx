import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super()
        this.state={count:0}

        this.handleIncremet=this.handleIncremet.bind(this)
        this.handleDecremet=this.handleDecremet.bind(this)
        this.handleReset=this.handleReset.bind(this)
    }
     handleIncremet(){
        this.setState({count:this.state.count+1})


    }
    handleDecremet(){
        if(this.state.count>0){
            this.setState({count:this.state.count-1})
        }
        
    }
    handleReset(){
        this.setState({count:this.state.count=0})
    }

  render() {
    return (
      <div>

        <div className='m-16 h-80 w-60 bg-slate-500 rounded-md '>
        <h1 className='txt5xl text-white font-bold ml-20' >Count:{this.state.count}</h1>
        <div className="flex flex-col gap-10 ml-10 mt-5">

       <button className='h-10 w-32 bg-red-600 rounded-md text-white ' onClick={this.handleIncremet}>Increament</button>
        <button className='h-10 w-32 bg-red-600 rounded-md text-white ' onClick={this.handleDecremet}>Decrement</button>
        <button className='h-10 w-32 bg-red-600 rounded-md text-white ' onClick={this.handleReset}>Reset</button>
       </div>
        </div>
        
      </div>
    )
  }
}




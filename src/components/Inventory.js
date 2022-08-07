import React, { Component } from 'react'

export default class Inventory extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Count : 0,
         Items : []
         
      }
    }
    addItem()
    {
        const itemObj =
        {
            name : this.state.value,
            quantity : 0
        }
        if (this.state.value !== ''){

            this.setState({
                Count : this.state.Count + 1,
                Items : this.state.Items.concat(itemObj)
            })
    }
    this.setState({
        value : '',
        
    })


    }
    onChange = (e) => {
        this.setState({
            value : e.target.value
        })
    }

    
  render() {  
    const itemList = this.state.Items.map(
        (item,index) => <li key = {index}>{item.name} {item.quantity}
        <button>Buy</button>
        <button>Sell</button>
        <button>Delete</button>

        </li>
    ) 
    return (
      <div>
        <h1>Welcome to Pie Inventory Management React APP</h1>
        <h3>Good in Store: {this.state.Count}</h3>
        <input
        type= 'text'
        placeholder='Enter the Item name'
        value = {this.state.value}
        onChange = {this.onChange}/>
        <button onClick={()=>this.addItem()}>Add</button>
        <ul>{itemList}</ul>
      </div>
    )
  }
}
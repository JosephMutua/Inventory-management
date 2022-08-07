import React, { Component } from 'react'

export default class Inventory extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
    
      this.state = {
         Count : 0,
         Items : [],
         quantity : 0
        
         
      }
    }
    addItem()
    {
        const itemObj =
        {
            name : this.state.value
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

    buy() {
        this.setState({
            quantity : this.state.quantity + 1
        })

    }

    sell () {
        if (this.state.quantity > 0)
        {
            this.setState({
                quantity : this.state.quantity - 1
            })
        }
    }
    delete (itemid){
        console.log (itemid)
        this.setState({
            Count : this.state.Count - 1,
            Items : this.state.Items.filter((index) =>
            {
                return index !== itemid
            }
            )

        

        })
    }
    
    componentDidMount(){
        this.inputRef.current.focus()

    }

    
  render() {  
    const itemList = this.state.Items.map(
        (item,index) => <li key = {index}>{item.name} {this.state.quantity}
        <button onClick = {() => this.buy()}>Buy</button>
        <button onClick ={()=> this.sell()}>Sell</button>
        <button onClick={() => this.delete(index)}>Delete</button>

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
        onChange = {this.onChange}
        ref = {this.inputRef}/>
        <button onClick={()=>this.addItem()}>Add</button>
        <ul>{itemList}</ul>
      </div>
    )
  }
}

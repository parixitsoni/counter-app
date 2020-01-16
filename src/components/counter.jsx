import React, { Component } from 'react';

class Counter extends Component {
    state = {  
        value:this.props.value
        };

    handleIncrement = () => {
        this.setState({value: this.state.value + 1 })
    }

    render() { 
        console.log('props',this.props);
        return (  
            <div>
                <span className={this.getBadgeClassess()}>{this.formatCount()}</span>
                <button className='btn btn-success btn-sm' onClick={this.handleIncrement}>Increment</button>
                <button className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }
    getBadgeClassess() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.value === 0) ? 'warning' : 'primary';
        return classes;
    }

formatCount(){
    const { value } = this.state
    return value === 0 ? 'ZER0' : value;

}
}
 
export default Counter;
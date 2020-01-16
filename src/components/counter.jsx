import React, { Component } from 'react';


class Counter extends Component {
     render() { 
          return (  
            <div>   
                <span className={this.getBadgeClassess()}>{this.formatCount()}</span>
                <button className='btn btn-success btn-sm' onClick={() => this.props.onIncrement(this.props.counter)}>Increment</button>
                <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
        );
    }
    getBadgeClassess() {
        let classes = 'badge m-2 badge-';
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
        return classes;
    }

formatCount(){
    const { value } = this.props.counter;
    return value === 0 ? 'ZER0' : value;

}
}
 
export default Counter;
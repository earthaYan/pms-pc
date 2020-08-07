import React, { Component } from 'react';
import '../../assets/css/personal.scss'
class Personal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div id="personal">
            <h4>个人中心</h4>
            <div className="person-wrapper">
                <div className="row-image">
                    <img src="/assets/avatar.webp"/>
                </div>
            </div>
        </div> );
    }
}
 
export default Personal;
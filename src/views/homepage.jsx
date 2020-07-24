import React, { Component } from 'react';
import '../assets/css/homepage.scss'

import DashBord from '../components/dashbord'
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="wrapper">
                <div className="company">
                    <h4>鲁能国际</h4>
                    <DashBord/>
                </div>
                <div className="private">
                    <h4>个人</h4>
                    <DashBord/>
                </div>
            </div>
        );
    }
}
 
export default HomePage;
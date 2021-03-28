import React, { Component } from 'react';
//import { ProductConsumer } from './../../components/Context'
import Dresses from './../../components/Dresses'


class Index extends Component {
    render() {      
        return (
            <div>
                <h1>This is test page</h1>
                <Dresses />
                           
              </div>
        )
    };
}

export default Index;
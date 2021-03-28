import React, { Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'


class User extends Component {

    state = {
        firstName: '',
    }

    handleFormChange = (e) => {
        this.setState({
            firstName: e.target.value,
        });
    }
    
    render(){
       
        console.log(this.props);
        return (
           
            <div className="mt-3 text-center">
               <h1>User Component</h1>
                <div className="my-3">
                    <div>First Name: {this.state.firstName}</div>
                <hr />
                </div>
            <div className="my-3">
                <h5>Form</h5>
                <div className="form-group">
                    <label for="firstname">First Name: </label>
                    <input type="text" name="firstName" onChange={this.handleFormChange} />
                </div>
            </div>
            </div>
        );
    }
}

export default User;

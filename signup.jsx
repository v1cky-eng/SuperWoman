import React, { Component } from 'react';
import './create.css';
class Signup extends Component {
    render(){
        return(
            <form>
                <p><i>If you have no account</i></p>
                Username:<input type="text" name = "Username" placeholder="Enter Username"/>{' '}
                Password:<input type="text" name = "Password" placeholder="Enter Password"/>{' '}
                Confirm Password:<input type="text" name = "Password" placeholder="Re-enter Password"/>{' '}
                Username:<input type="text" name = "Login"/>{' '}
                Password:<input type="text" name = "Password" placeholder="Enter Password"/>{' '}
                <p><i>If you already have an account</i></p>
            </form>
        )
    }

}
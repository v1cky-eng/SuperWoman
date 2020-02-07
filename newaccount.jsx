import React, { Component } from 'react';


class Newaccount extends Component {
    render(){
        return(
            <div style ={{backgroundColor: 'skyblue', fontSize: '40px', color: 'white'}}>
            <form>
                <h1 style = {{fontSize: '60px',textAlign: 'center', color: 'white', backgroundColor: 'black', height: '150px'}}>Movie Library</h1>
                <a href ='signup'style = {{fontSize: '20px'}}><i>Sign up</i></a>{' '}
                <b>Username:</b><input type="text" name = "Username" placeholder="Enter Username" /><p class="corner" style = {{fontSize:'20px'}}>Forgot username or password?</p>{' '}
                <b>Password:</b><input type="text" name = "Password" placeholder="Enter Password"/>{' '}
                <b>Confirm Password:</b><input type="text" name = "Password" placeholder="Re-enter Password"/>{' '}
                
            </form>
            <footer style = {{fontSize:'15px',color: 'black',textAlign:'center'}}>@ 2020 copyrights to Andela Women In Tech</footer>
            </div>
            
        )
    }

}
export default Newaccount;
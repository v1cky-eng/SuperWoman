import React, { Component } from 'react';
import './create.css';
class Create extends Component {
    
    handleCreate = () => {
        alert("Movie Created", this);
    }
    render(){

        return(
        
            

            <div style = {{backgroundColor:'grey',  height: '650px'}}>
                <header style = {{fontSize: '60px', backgroundColor: 'black', color:'white',textAlign: 'center',height: '150px'}}> Movie Library</header>
                <h3  style={{float: 'left', marginRight: '20px'}}>Home</h3>{' '}
                <h3 style={{float: 'left', marginTop:'px', marginRight: '20px'}}>TV-series</h3>
                <h3  style={{float: 'left',marginTop:'px'}}>Movies</h3>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><button style = {{border: '1px solid darkblue', borderRadius:'3px', paddingLeft: '15px', paddingRight: '15px'}} onClick = {this.handleCreate}>Create Movie</button>{' '}
                <button style = {{border: '1px solid darkblue', borderRadius:'3px', paddingLeft: '15px', paddingRight: '15px'}}>Delete Movie</button>{' '}
                <button style = {{border: '1px solid darkblue', borderRadius:'3px', paddingLeft: '15px', paddingRight: '15px'}}>Add Movie Movie </button>{' '}
                <button style = {{border: '1px solid darkblue', borderRadius:'3px', paddingLeft: '15px', paddingRight: '15px'}}>View Movie </button>
                <br/><footer style = {{fontSize:'15px',color: 'black',textAlign:'center'}}>@ 2020 Copyrights to Andela Women In Tech</footer>
            </div>);  
        }

}
/*class Signup extends Component {
    render(){
        return(
            <div style ={{height: '580px',backgroundColor: 'grey', fontSize: '25px', color: 'white',textAlign: 'center'}}>
            <form>
                <h1 style = {{fontSize: '60px',textAlign: 'center', color: 'white', backgroundColor: 'black', height: '150px'}}>Movie Library</h1>
                <button style = {{float: 'right', marginTop: '-40px', backgroundColor: 'dark grey'}}><a href ="#signup" style = {{fontSize: '20px', textAlign:'right'}}><i>Sign up</i></a></button>{' '}
                
                <p style = {{fontSize: '20px'}}><b> Please Login</b></p>
                <b><br/>Username:</b><input type="text" name = "Login" placeholder="Enter Username" required style = {{height: '30px', width:'300px'}}/>{' '}
                <b><br/><br/>Password:</b><input type="text" name = "Password" placeholder="Enter Password" required style = {{height: '30px', width:'300px'}}/><p class="corner"  style = {{fontSize:'20px'}} >Forgot your username or password?</p>{' '}
                
            </form>
            <br/><br/><br/><footer style = {{fontSize:'15px',color: 'black',textAlign:'center'}}>@ 2020 copyrights to Andela Women In Tech</footer>
            </div>
            
        )
    }

}

class Newaccount extends Component {
    render(){
        return(
            <div style ={{textAlign: 'center',height: '580px',backgroundColor: 'grey', fontSize: '20px', color: 'white'}}>
            <form>
                <h1 style = {{fontSize: '60px',textAlign: 'center', color: 'white', backgroundColor: 'black', height: '150px'}}>Movie Library</h1>
                <button style = {{ float:'right',marginTop:'-38px',color: 'solid darkblue', borderRadius:'3px', paddingLeft: '15px', paddingRight: '15px'}}><a name ="Sign up" style = {{textAlign: 'left',fontSize: '20px'}}><i>Sign up</i></a></button>{' '}
                <b><br/>Username:{' '}</b><input type="text" name = "Username" placeholder="Enter Username" required style = {{ marginLeft: '75px',height:'30px', width: '400px'}} />
                <p class="corner" style = {{fontSize:'13px'}}>Forgot username or password?</p>{' '}
                <b>Password:</b><input type="text" name = "Password" placeholder="Enter Password" required style = {{marginLeft: '80px',height:'30px', width: '400px'}}/>{' '}
                <b><br/><br/>Confirm Password:</b><input type="text" name = "Password" required placeholder="Re-enter Password" style = {{marginLeft: '5px',height:'30px', width: '400px'}}/>{' '}
                <br/><br/><button style = {{marginRight:'60px',height: '40px', backgroundColor: 'dark grey', borderRadius:'3px', paddingLeft: '15px', paddingRight: '15px'}}>Submit</button>{' '}
                <button style = {{marginLeft: '10px',height: '40px', borderRadius:'3px', paddingLeft: '15px', paddingRight: '15px'}}>Cancel</button>{' '}

            </form>
           <br/><br/><br/><br/><br/><br/> <footer style = {{fontSize:'15px',color: 'black',textAlign:'center'}}>@ 2020 copyrights to Andela Women In Tech</footer>
            </div>
            
        )
    }

}*/



export default Create;
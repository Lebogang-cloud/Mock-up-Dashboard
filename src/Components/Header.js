import React, { Component} from 'react';


class Header extends Component{
    render(){
        const styles ={
            header:{
                background:'#03a9f4'
            },
            h1:{
                color:'#fff',
                fontFamily:'Anton',
                textAlign: 'center'
            },
            h3:{
                fontFamily: 'Anton',
                textAlign: 'right'
            },
            input:{
                marginLeft: '1150px'
            }
        }
        return (
            <header style={styles.header}>
                <div>
                    <h1 style={styles.h1}>TILDE</h1>
                    <h3 style={styles.h3}>Email:</h3>
                    <input type='text' style={styles.input}/>
        </div>
            </header>
        )
    }
}       


export default Header;


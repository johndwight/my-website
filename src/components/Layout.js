import React from 'react';
import Aux from '../hoc/Auxiliary';
import NavBar from './NavBar';
import Footer from './Footer'
const layout = (props) => (
    <Aux>
       <NavBar/>
        <main>
            {props.children}
        </main>
        <Footer/>
    </Aux>

);

export default layout;
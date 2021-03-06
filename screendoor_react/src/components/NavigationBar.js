import React,{Fragment} from 'react'
import logo from '../images/logo.png'
import SigninContainer from '../containers/SigninContainers'
import * as Gotham from '../fontStyle.css'
import { Container,Row,Col } from 'reactstrap'




const NevigtaionBar = () => {

    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        id="nav-scroll">

         <ul class="nav nav-pills">
         <li class="nav-item">
            <a class="nav-link" href="#home">@fat</a>
         </li>
         <li class="nav-item">
            <a class="nav-link" href="#about">@mdo</a>
         </li>
         </ul>
            <div className="container">
            <a style={Gotham} className="navbar-brand" href="#"><img src={logo} width="30" height="30" alt="screen door"/>SCREEN DOOR</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav nav justify-content-center">
                    <a style={Gotham} className="nav-item nav-link" href="#home">Home</a>
                    <a style={Gotham} className="nav-item nav-link" href="#about">About</a>
                    <a style={Gotham} className="nav-item nav-link" href="#board">Board</a>
                    {/* <a style={Gotham} className="nav-item nav-link nav-light" href="#" tabIndex="-1" aria-disabled="true">Disabled</a> */}
                </div>
            </div>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>{' '}
            </form>
            &nbsp;
            <SigninContainer/>
            </div>
        </nav>
       
    )
}

export default NevigtaionBar;

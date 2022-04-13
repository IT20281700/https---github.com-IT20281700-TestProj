import React, { Component } from 'react';
import './returneditems.css';

class returneditems extends React.Component{

    render(){

        return(
          <div>
          <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link" href="http://localhost:3000/item">Spare Parts</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"  href="http://localhost:3000/oils">Oils</a>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Returned Items</a>
          </li> */}
        </ul>
            <div class="container"><br/><br/>
            <div class="row row-cols-5 row-cols-lg-3 g-2 g-lg-3" style={{paddingRight:'30px'}}>
              <div class="col">
                <div class="p-3 border bg-light">
                <table>
                    <tr>
                        
                    <h1 className='chamo'>buffer</h1><br/>
                    <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" alt="HTML5 Icon" width="280" height="150"/><br/><br/>
                    
                        <h5 className="small"><b>Reason to return</b></h5>
                        <p style={{textAlign:"left"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </tr>
                    </table>
                </div>
                </div>
              <div class="col">
                <div class="p-3 border bg-light">

                <table>
                    <tr>
                        
                        <h1 className='header'>buffer</h1><br/>
                       
                    <img id="sliit" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.aarke.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fdb77cd7528303ae0e73fb391a8652adc%2Fc%2F3%2Fc3_sand_45.png&imgrefurl=https%3A%2F%2Fwww.aarke.com%2Fcarbonator-3-sand&tbnid=S9843Os_h24eUM&vet=12ahUKEwjx94m7wOXyAhXDsksFHbpaCAgQMygDegUIARDWAQ..i&docid=9_QGkO25wH7doM&w=600&h=700&q=carbonator%20image&hl=en-GB&ved=2ahUKEwjx94m7wOXyAhXDsksFHbpaCAgQMygDegUIARDWAQ" alt="HTML5 Icon" width="128" height="128"/><br/><br/>
                
                        <h5><b>Reason to return</b></h5>
                        <p style={{textAlign:"left"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>   
                    </tr>
                    </table>
                </div>
              </div>
            </div><br/><br/>
          </div>
          </div>

        );
    }
}
export default returneditems;
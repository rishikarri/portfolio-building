import React, { Component } from 'react';
import '../CSS/styles.css';

// bring in bootstrap
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



// bring in necessary components

import SideNavBar from './SideNavBar.js'
// Top nav bar will always be on top, we just will have to decide when to display it or not
import TopNavBar from './TopNavBar.js';
import '../CSS/styles.css'


// bring in sidenavbar which should take up one third of the page
//for now you always want to have side bar on the page and then render the children based on what url is in play 
class App extends Component {
  render() {

    return (
         <div className="container-fluid">
              <div className="row">

                <div className='col-xs-12 top-nav-bar-div padding-none'>
                    <TopNavBar />
                </div>

              	<div>
                  	<SideNavBar />            
                </div>

                <div className='content-portion-div margin-above col-xs-12 col-sm-12 col-md-10 col-md-offset-2 col-lg-9 col-lg-offset-2 full-view-height padding-none'>
                	{this.props.children}
                </div>
                
            </div>
         </div>

    )
  }
}

export default App;

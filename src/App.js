import React, {useState, useEffect} from 'react';
import axios from 'axios'
import token from './environment/token'
import {MainContainer, DashboardInfoContainer, DashboardInfo, DashboardTitle} from './StyledComponents/Home/index'

// import Header from './Components/Header/index.js'
function App() {
  

  
  return (    
    <MainContainer>    
    {/* Criar componente para isso */}
        <DashboardInfoContainer> 
          <DashboardInfo>
            <DashboardTitle>
              <span>
                Dashboard
              </span>
              <div>
                <div>
                  Books
                </div>

                <div>
                  Articles
                </div>

                <div>
                  Reading hours
                </div>
              </div>
            </DashboardTitle>
          </DashboardInfo>
        </DashboardInfoContainer>
    {/* Criar componente para isso */}
    </MainContainer>
  );
}

export default App;

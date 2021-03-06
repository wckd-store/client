import styled from 'styled-components';

export const NavBarContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;  
  z-index: 10;
  
  .sections {
    display: flex;
    
    .logo-section {
      flex: 0 0 61px;
        
      img {
        height: 48px;
        width: auto;
      }
    }
    
    .navbar-section {
      flex: 1 1 auto;
      height: 80px;
      text-align: right;
      
      ul {
        list-style: none;
        height: fit-content;
                        
        li {
          display: inline;
          height: 100%;
          margin-left: 50px;
          
          a {
            font-weight: 700;
            font-size: 18px;
            color: white;
            text-decoration: none;  
          }
        }
        
        .rounded {
          background-color: white;
          padding: 6px 23px;
          border-radius: 20px;
          color: #57C5E9;
          margin-left: -20px;
        }
      }
    }
    
    @media(max-width: 1919px) {
      height: 60px;
      
      .logo-section img {
         height: 36px;
      }    
      
      .navbar-section {
        height: 60px;
        
        li {
          margin-left: 35px !important;
        
          a {
            font-size: 14px !important;
          }
        }
        
        .rounded {
          padding: 5px 15px !important;
          margin-left: -5px !important;
        }
      }
    }
    
    @media(max-width: 1365px) {
      height: 60px;
      
      .logo-section img {
         height: 36px;
      }    
      
      .navbar-section {
        height: 60px;
        
        li {
          margin-left: 20px !important;
        
          a {
            font-size: 13px !important;
          }
        }
        
        .rounded {
          padding: 3px 15px !important;
          margin-left: -5px !important;
        }
      }
        
    }  
    
    @media(max-width: 639px) {
    
      .logo-section {
        flex: 1 1 100%;
        text-align: center;
        
        img {
          justify-content: center;
        }
      }
      
      .navbar-section {
        display: none;
      }
        
    }  
    
  }

`;

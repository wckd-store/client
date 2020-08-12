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

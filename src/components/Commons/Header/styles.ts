import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi/index';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 700px;
  background: url('https://i.imgur.com/Fg4sRkR.png') center -17px;
  background-size: 1920px 717px;

  .content {
    display: flex;
    margin-top: 85px;
    height: calc(100% - 85px);
    
    .half {
      flex: 1 1 50%;
      
      img {
        max-width: 530px;
        height: auto;
      }
      
      .text {
        width: 85%;
        height: fit-content;
        font-size: 50px;
        font-weight: 900;
        
        .button {
          display: block;
          font-size: 24px;
          color: #57C5E9;
          text-decoration: none;
          margin-top: 20px;
          padding: 15px 40px;
          background: white;
          width: fit-content;
          border-radius: 40px;
        }
      }
      
    }
  }
  
  @media(max-width: 991px) {
    .half:nth-child(2) {
      display: none;
    }
    
    .text {
      max-width: 500px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  
  @media(max-width: 639px) {
    .text {
      font-size: 40px !important;
    }
  }

`;

export const ArrowIcon = styled(FiArrowRight)`
  width: 18px;
  height: 18px;
  margin-bottom: -1px;
`;
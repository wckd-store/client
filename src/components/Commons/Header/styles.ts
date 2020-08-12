import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi/index';

export interface HeaderContainerProps {
    width: number
}

export const HeaderContainer = styled.div<HeaderContainerProps>`
  width: 100%;
  height: ${props => props.width > 1280 ? props.width / 2.74285714286 + 'px' : 1280 / 2.74285714286 + 'px'};
  background: url('https://i.imgur.com/Fg4sRkR.png') no-repeat center -17px;
  background-size: cover;

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
  
  @media(max-width: 1919px) {
    
    .text {
      max-width: 500px;
      font-size: 40px !important;
    }
    
    img {
        width: 390px;
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


`;

export const ArrowIcon = styled(FiArrowRight)`
  width: 18px;
  height: 18px;
  margin-bottom: -1px;
`;
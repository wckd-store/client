import styled from 'styled-components';

export const OuterContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const InnerContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 1140px;
  left: 0;
  right: 0;
  margin: 0 auto;
  
  .padding {
    display: flex;
  }
  
  @media(max-width: 1139px) {
    max-width: 100%;
    
    .padding {
      padding: 0 40px;
    }
  }
  
`;
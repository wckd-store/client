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
  
  @media(max-width: 1919px) {
    max-width: 860px; 
  }
  
  @media(max-width: 1365px) {
    max-width: 740px;    
  }
  
  @media(max-width: 739px) {
    max-width: 100%;
    
    .padding {
      padding: 0 40px;
    }
  }
  
`;
import styled from 'styled-components';

export interface CenteredContainerProps {
    horizontally?: boolean
    vertically?: boolean
    flex?: boolean
}

export const CenteredContainer = styled.div<CenteredContainerProps>`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${props => props.horizontally ? 'center' : 'normal'};
  align-items: ${props => props.vertically ? 'center' : 'normal'};
`;
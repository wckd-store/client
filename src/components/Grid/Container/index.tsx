import React, { FunctionComponent } from 'react';
import { InnerContainer, OuterContainer } from 'components/Grid/Container/styles';

const Container: FunctionComponent = ({ children }) => {
    return (
        <OuterContainer>
            <InnerContainer>
                <div className="padding">
                    {children}
                </div>
            </InnerContainer>
        </OuterContainer>
    );
};

export default Container;
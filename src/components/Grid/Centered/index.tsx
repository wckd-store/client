import React, { FunctionComponent } from 'react';

import { CenteredContainer } from 'components/Grid/Centered/styles';

export interface CenteredProps {
    horizontally?: boolean
    vertically?: boolean
}

const Centered: FunctionComponent<CenteredProps> = (props) => {
    return (
        <CenteredContainer horizontally={props.horizontally} vertically={props.vertically}>
            {props.children}
        </CenteredContainer>
    );
};

export default Centered;
import React, { FunctionComponent, useEffect, useState } from 'react';
import Link from 'next/link';

import { Centered, Container } from 'components';
import { ArrowIcon, HeaderContainer } from './styles';


const Header: FunctionComponent = () => {

    const [width, setWidth] = useState(0);

    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth));
    }, []);


    return (
        <HeaderContainer width={width}>
            <Container>

                <div className="content">
                    <div className="half">
                        <Centered horizontally vertically>
                            <div className="text">
                                Boost your sales with a shop that has your style.
                                <Link href="#"><a className="button">learn more <ArrowIcon/></a></Link>
                            </div>
                        </Centered>
                    </div>
                    <div className="half">
                        <Centered horizontally vertically>
                            <img src="https://i.imgur.com/zw1meyw.png" alt="shop with your style"/>
                        </Centered>
                    </div>
                </div>

            </Container>
        </HeaderContainer>
    );

};

export default Header;
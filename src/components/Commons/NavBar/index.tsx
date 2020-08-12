import React, { FunctionComponent, useEffect, useState } from 'react';

import { NavBarContainer } from './styles';
import { Centered, Container } from 'components';
import Link from 'next/link';

const NavBar: FunctionComponent = () => {

    const [width, setWidth] = useState(0);

    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth));
    }, []);

    return (
        <NavBarContainer>
            <Container>
                <div className="sections">

                    <div className="logo-section">
                        <Centered vertically horizontally={width < 640}>
                            <img src="https://i.imgur.com/J1UIsM0.png" alt="wckd-store logo"/>
                        </Centered>
                    </div>

                    <div className="navbar-section">
                        <Centered vertically>
                            <ul>
                                <li>
                                    <Link href="#"><a>home</a></Link>
                                </li>
                                <li>
                                    <Link href="#"><a>features</a></Link>
                                </li>
                                <li>
                                    <Link href="#"><a>plans</a></Link>
                                </li>
                                <li>
                                    <Link href="#"><a>about</a></Link>
                                </li>
                                <li>
                                    <Link href="#"><a className="rounded">panel</a></Link>
                                </li>
                            </ul>
                        </Centered>
                    </div>

                </div>
            </Container>
        </NavBarContainer>
    );
};

export default NavBar;
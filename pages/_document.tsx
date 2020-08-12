import React from 'react';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Link from 'next/link';

interface Props {
    stylesTag: React.Component
}

class AppDocument extends Document<Props> {
    public static async getInitialProps ({renderPage}: DocumentContext) {
        const sheet = new ServerStyleSheet ();

        const props = renderPage (App => props =>
            sheet.collectStyles (<App {...props} />)
        );

        const stylesTag = sheet.getStyleElement ();

        return {...props, stylesTag};
    }

    render () {
        return (
            <Html>
                <head>
                    <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;900&display=swap" rel="stylesheet"/>
                </head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}

export default AppDocument;
import Fragment from 'react';
import Head from 'next/head';

import Nav from './Nav';


export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://bootswatch.com/4/litera/bootstrap.min.css"/>
            </Head>

            <header>
                <Nav/>
            </header>

            { children }

            <footer style={footerStyle()}>
                <h6>built with next.js</h6>
            </footer>

        </div>
    )
}

function footerStyle() {
    return {
        position: "fixed",
        bottom: 0,
        textAlign: "center",
        width: "100%"
    }
}
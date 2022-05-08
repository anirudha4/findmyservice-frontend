import React from 'react'
import styledComponents from 'styled-components'
import { useSelector } from 'react-redux';
import Navbar from '@components/Navbar'
import { Container } from '@components/custom';
import './layout.css'

const AppContainer = styledComponents.div`
`;

function Layout({ children }) {
    const { isLoggedIn, user } = useSelector(state => state.authReducer);
    return (
        <div>
            <Navbar isLoggedIn={isLoggedIn} user={user} />
            <Container>
                <AppContainer>
                    <div className='main-container'>
                        {children}
                    </div>
                </AppContainer>
            </Container>
        </div>
    )
}

export default Layout;
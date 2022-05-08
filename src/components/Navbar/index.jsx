import React from 'react'
import { Avatar, Badge, Button, Divider, Grid, Menu, Text, Title, Tooltip } from '@mantine/core'
import { useDispatch } from 'react-redux';
import { appCreators } from '@redux/reducers';
import { Link } from 'react-router-dom';
import { colors } from '@themes';
import { Container } from '@components/custom';
import './navbar.css'

function Navbar({ user, isLoggedIn }) {
    const dispatch = useDispatch();
    return (
        <div className='navbar-container'>
            <Container style={{ height: '100%' }}>
                <div className="navbar">
                    <div className="navbar-left">
                        <Link to='/app'>
                            <Text size='lg' weight='bold' color="dodgerblue">findmyservice.com</Text>
                        </Link>
                    </div>
                    <div className="navbar-right">
                        {isLoggedIn ? <div className='logged-in'>
                            <Badge color='orange'>
                                {!user.verified && 'Not Verified. Check your email'}
                            </Badge>
                            <Menu control={<Tooltip label={user.name} color="blue" withArrow position='left'><Avatar style={{ cursor: 'pointer' }} color="dodgerblue" radius="xl">{user.name[0]}</Avatar></Tooltip>}>
                                <Menu.Item>Profile</Menu.Item>
                                <Menu.Item>Settings</Menu.Item>
                                <Menu.Item component={Link} to='/become-a-seller'>Become a Seller</Menu.Item>
                                <Divider />
                                <Menu.Item color="red" onClick={_ => dispatch(appCreators.logout())}>Logout</Menu.Item>
                            </Menu>
                        </div> : (
                            <div className='nav-links'>
                                <Button component={Link} to="/login">
                                    Login
                                </Button>
                                <Button component={Link} to="/signup" variant='light' color={colors.primary}>
                                    Sign Up
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </div >
    )
}

export default Navbar
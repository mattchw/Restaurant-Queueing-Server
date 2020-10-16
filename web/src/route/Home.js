import React, { useState, useEffect } from 'react';
import cookie from 'js-cookie';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import NavBar from '../components/NavBar/NavBar';
import CustomerDashboard from '../components/DashboardContainers/Customer/Customer';
import ShopOwnerDashboard from '../components/DashboardContainers/ShopOwner/ShopOwner';

import { authActions } from '../actions/authentication.action';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        Your Website
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 200;

export default function Home() {
  const history = useHistory();

  const token = cookie.get('token');
  const user = JSON.parse(localStorage.getItem('user'));
  const [userType, setUserType] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {

    if (user) {
      setUserType(user.type);
    } else {
      history.push('/login');
    }
  }, []);

  return (
    <NavBar userType={userType}>
      <Container maxWidth="lg">
        {userType === "Admin" && <div>
          <h2>I am Admin!</h2>
        </div>}
        {userType === "ShopOwner" && <ShopOwnerDashboard user={user}/>}
        {userType === "Customer" && <CustomerDashboard user={user}/>}
        <Box pt={4}>
          <Copyright />
        </Box>
      </Container>
    </NavBar>
  );
}
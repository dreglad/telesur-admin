import React from 'react';
import { AppBar, UserMenu, Layout, MenuItemLink } from 'react-admin';
import SettingsIcon from '@material-ui/icons/Settings';

const CustomUserMenu = props => (
  <UserMenu {...props}>
    <MenuItemLink
      to="/settings"
      primaryText="Settings"
      leftIcon={<SettingsIcon />}
    />
  </UserMenu>
);

const CustomAppBar
 = props => (
  <AppBar {...props} userMenu={<CustomUserMenu />} />
);

export default props => (
  <Layout {...props} appBar={CustomAppBar} />
);

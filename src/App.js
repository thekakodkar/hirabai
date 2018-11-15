import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList } from './users';
import { PostList } from './posts';
import { PostEdit } from './posts';
import { PostCreate } from './posts';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import jsonServerProvider from 'ra-data-json-server';
//import logo from './logo.svg';
//import './App.css';
//<img src={logo} className="App-logo" alt="logo" />

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
      <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider} >
          <Resource name="posts" list={PostList} edit = {PostEdit} create = {PostCreate} icon = {PostIcon}/>
          <Resource name="users" list={UserList} icon = {UserIcon}/>
      </Admin>
);

export default App;

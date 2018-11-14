import React from 'react';
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';
import  HbUrlField from './HbUrlField';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <HbUrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);
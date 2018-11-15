import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Analytics from './Analytics';
import List from 'react-admin';


export default () => (
    <Card>
        <CardHeader title="Welcome to the Hirabai Dashboard" />
        <CardContent>Your key to successful Business Development</CardContent>
    </Card>
);

//export const AnalyticsList = (props) => {
  //return (
    //<List title="Analytics" {...props} perPage={20} sort={{ field: 'id', order: 'ASC' }}>
      //<Analytics />
    //</List>
  //)
//}

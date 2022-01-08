import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import BuildPanel from 'components/App/BuildPanel';
import Header from 'components/App/Header';
import Sidebar from 'components/App/Sidebar';
import { FC, } from 'react';
import { useSaveBrowser } from 'util/save';

import "./App.css" ;

interface AppProps{}
const App :FC<AppProps> = ()=>{
  useSaveBrowser();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs>
        <Card>
          <CardContent>
            <BuildPanel />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs="auto">
        <Card>
          <CardContent>
           <Sidebar />
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  ) ;
};

export default App;

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Main from "./main/Main";
import Card from "./card/card";
import {Container} from "@mui/material";

const App = () => {
    const dispatch = useDispatch()
    const theme = createTheme();

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
            <Container sx={{width: '1080px'}}>
                <Switch>
                     <Route exact path="/" component={Main}/>
                     <Route path="/:idx" component={Card}/>
                     <Redirect to="/"/>
                </Switch>
            </Container>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;

import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import DetailPage from './DetailPage';
import MainPage from './MainPage';
import Workpage from './Workpage';

const InitRouters = () =>{
    return(<div>
        <Switch>
            <Route path="/detail/:{id}">
                <DetailPage />
            </Route>
            <Route path="/works">
                <Workpage />
            </Route>
            <Route exact path="/">
                <MainPage />
            </Route>
        </Switch>
    </div>)
}
export default InitRouters;
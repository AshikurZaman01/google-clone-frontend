import { Switch, Route, Redirect } from 'react-router-dom';

const Routes = () => {
    return (
        <div className="p-4 m-10 bg-red-200">
            <Switch>
                <Route exact path="/">
                    <Redirect to="/search" />
                </Route>
                <Route exact path="/search">
                    <Results />
                </Route>
                <Route path="/images">
                    <Results />
                </Route>
                <Route path="/news">
                    <Results />
                </Route>
                <Route path="/videos">
                    <Results />
                </Route>

            </Switch>
        </div>
    );
};

export default Routes;
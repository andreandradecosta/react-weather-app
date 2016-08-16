var React = require('react')
var ReactRouter = require('react-router')
var MainContainer = require('../containers/MainContainer')
var Home = require('../components/Home')

var Router = ReactRouter.Router
var Route = ReactRouter.Route
var hashHistory = ReactRouter.hashHistory
var IndexRoute = ReactRouter.IndexRoute

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={MainContainer}>
            <IndexRoute component={Home} />
        </Route>
    </Router>
)

module.exports = routes;

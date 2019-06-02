import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma'
import '../../src/style.scss'

import Home from './Home.js'
import MoviesShow from './MoviesShow.js'
import Nav from './Nav.js'


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <main>
                    <Nav />
                    <Switch>
                        <Route path="/movies/:id" component={MoviesShow} />
                        <Route path="/" component={Home} />
                    </Switch>
                </main>
            </BrowserRouter>
        )
    }
}

export default App
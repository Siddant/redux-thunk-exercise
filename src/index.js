import { Provider } from 'react-redux'
import store from './store/index'

// import App from './componenets/App'



import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma'
import './style.scss'

import Home from './componenets/Home'
import MoviesShow from './componenets/MoviesShow.js'
import Nav from './componenets/Nav.js'


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

// export default App



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
)
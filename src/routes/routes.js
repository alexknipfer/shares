import { IndexRoute , Route } from 'react-router'
import React from 'react'
import Main from '../index'

const routes = (
    <Route path='/'>
        <IndexRoute component={Main} />
    </Route>
)

export default routes
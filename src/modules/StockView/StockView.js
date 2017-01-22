'use babel';

import React, { Component } from 'react'
import { observer } from 'mobx-react'

const StockView = observer(class StockView extends Component {
    render() {
        return (
            <h3>StockView Component</h3>
        )
    }
})

export default StockView
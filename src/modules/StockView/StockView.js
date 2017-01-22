'use babel';

import React, { Component } from 'react'
import { observer } from 'mobx-react'

const StockView = observer(class StockView extends Component {

    constructor() {
        super()
        const request = require('request')
        request("https://finance.google.com/finance/info?client=ig&q=goog", (error, response, body) => {
            body = body.slice(3)
            body = JSON.parse(body)
            console.log(body)
            newPrice(body)
        })
    }

    newPrice = (arr) => {
        currentPrice = arr[0]["l"]
        document.getElementById("price").innerHTML = currentPrice
    }


    render() {
        return (
            <div>
                <div className="the-price" id="price">$1000</div>
                <h3>StockView Component</h3>
            </div>
        )
    }
})

export default StockView
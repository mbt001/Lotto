import React, { Component } from 'react';
import Lotto from './lotto'

class App extends Component {
    render () {
        return (
            <div className='App'>
                <Lotto />
                <Lotto title='Mini Daily' maxNum={10} numBalls={4} />
            </div>
        )
    }
}

export default App;
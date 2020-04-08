import React, { Component } from 'react'



import { Cards, Chart, CountryPicker }  from './components'
import styles from './App.module.css'
import { fecthData } from './api';
class App extends Component {
    state = {
        data: {},
    }

    async componentDidMount() {
        const fecthedData = await fecthData();
        this.setState({ data: fecthedData })
    }
    render() {
        const { data } = this.state
        return(
        <div className={styles.container}>
            <Cards data={data}/>
            <CountryPicker />
            <Chart />
        </div>
        )
    }
}

export default App;
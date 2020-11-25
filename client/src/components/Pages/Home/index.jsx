import React from 'react'
import SearchComponent from './SearchComponent'
import EveryWhere from './EverywhereComponent'
import SimpleSlider from '../../SharedComponents/Material-UI/SimpleSlider'


class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            suggestions: []
        }
    }

    componentDidMount = () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-sky': localStorage.getItem('auth-sky')
            }

        };
        fetch('http://localhost:5000/api/suggestion/getSuggestion', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({ suggestions: data.suggested })
            })
    }

    random = (array) => {
        const result = []
        for (let i = 0; i < 3; i++) {
            let index = Math.floor(Math.random() * array.length)
            result.push(array[index])
            array.splice(index, 1)
        }
        return result
    }



    render() {
        const { getFlightsData } = this.props
        const randomSuggested = this.random(this.state.suggestions)
        console.log(randomSuggested)
        return (
            <div>
                <SimpleSlider />
                <SearchComponent getFlightsData={getFlightsData} />
                <div className='suggested'>
                {
                    this.state.suggestions.length !== 0 ?
                    randomSuggested.map(( suggest,i ) => {
                        return <EveryWhere suggest={suggest} key={i} />
                    }) : <div></div>
                }
                </div>
            </div>
        )
    }
}



export default HomePage

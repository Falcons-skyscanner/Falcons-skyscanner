import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class Asynchronous extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            options: [],
            placeId: ''
        }
    }

    componentDidMount = () => {
    }

    onchange = async (event) => {
        const response = await fetch(`https://www.skyscanner.com/g/autosuggest-flights/JO/en-US/${event.target.value}?isDestination=false&enable_general_search_v2=true`);
        const countries = await response.json();
        this.setState({ options: countries.map((country, i) => country) });
    }

    onChange1 = async (ev, value) => {
        if (value) {
            await this.setState({ placeId: value.PlaceId })
            console.log(this.state.placeId)
            if (this.props.fieldName === "From") {
                this.props.setOrigin(this.state.placeId)
            } else if (this.props.fieldName === "To") {
                this.props.setDest(this.state.placeId)
            }
        }
    }

    render() {
        return (
            <div style={{ width: 300, paddingLeft: "8px", marginTop: "8px" }}>
                <Autocomplete
                    onChange={this.onChange1}
                    id="asynchronous-demo"
                    open={this.state.open}
                    onOpen={() => {
                        this.setState({ open: true });
                    }}
                    onClose={() => {
                        this.setState({ open: false });
                    }}
                    // getOptionSelected={(option, value) => option.PlaceName === value.PlaceName}
                    getOptionLabel={(option) =>
                        (option.PlaceId?`${option.PlaceName} ✈️ (${option.PlaceId})`:"")
                    }
                    options={this.state.options}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label={this.props.fieldName}
                            // variant="filled"
                            onChange={this.onchange}
                            onClick={() => console.log("click")}
                        />
                    )}
                />
            </div>
        )
    }
}

export default Asynchronous

import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Asynchronous({ fieldName }) {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const [placeId, setPlaceId] = React.useState('');
    const loading = open && options.length === 0;

    React.useEffect(() => {
        if (!loading) {
            return undefined;
        }
        (async () => {
            onchange = async (event) => {
                const response = await fetch(`https://www.skyscanner.com/g/autosuggest-flights/US/en-US/${event.target.value}?isDestination=false&enable_general_search_v2=true`);
                const countries = await response.json();
                setOptions(countries.map((country, i) => country));
            }
        })();

    }, [loading]);

    return (
        <Autocomplete
            id="asynchronous-demo"
            style={{ width: 300 }}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            // getOptionSelected={(option, value) => option.PlaceName === value.PlaceName}
            getOptionLabel={(option) => option.PlaceName}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={fieldName}
                    variant="outlined"
                    onChange={onchange}
                    onClick={()=>console.log("click")}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}
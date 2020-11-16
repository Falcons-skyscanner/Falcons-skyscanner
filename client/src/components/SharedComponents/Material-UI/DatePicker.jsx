import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers({ bound, setOutDate, setInDate }) {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
        // console.log(formatDate(selectedDate))
        if (bound === "Depart") {
            setOutDate(formatDate(date))
            console.log('first')
        } else if (bound === "Return") {
            setInDate(formatDate(date))
            console.log('second')
        }
    };

    const formatDate = (date) => {
        console.log(typeof (date.toString()))
        let dateArr = date.toString().split(" ")
        date = [dateArr[0], dateArr[1], dateArr[2], dateArr[3]]
        console.log(date)
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    }

    return (
        <div style={{ paddingLeft: "8px" }}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label={bound}
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        </div>
    );
}

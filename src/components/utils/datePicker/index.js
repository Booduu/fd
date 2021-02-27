import 'date-fns';
import React, { useState} from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const DatePicker = ({
  label,
  onChange,
  value,
}) => {
    // const [selectedDate, setSelectedDate] = useState(new Date());
  
    // const handleDateChange = (date) => {
    //   setSelectedDate(date);
    // };

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label={label}
            format="dd/MM/yyyy"
            locale="fr"
            value={value}
            onChange={(value) => onChange(value)}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
      </MuiPickersUtilsProvider>
    );
  }
 
export default DatePicker;

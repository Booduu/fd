import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import PropTypes from 'prop-types';

const DatePicker = ({
  label,
  onChange,
  value,
}) => {
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
 
DatePicker.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  // value: PropTypes.func,
}
export default DatePicker;

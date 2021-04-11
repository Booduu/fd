import React, { useState, useEffect } from 'react';
import { 
    openDialog,
    deleteLive,
 } from '../../../store/actions';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableContainer,
    Paper,
    TableHead,
} from '@material-ui/core';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment';
import Dialogs from '../../utils/Dialog';
import PropTypes from 'prop-types';

moment().format();

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  table: {
    minWidth: 650,
    '& > *': {
      color: '#e6e6e6',
    },
  },
  tableRowTitle: {
    '& > *': {
      color: '#e6e6e6',
      borderBottom: 'none',
    },
  },
  tableRow: {
    '& > *': {
      color: '#e6e6e6',
      borderBottom: 'none',
    },
    '&:hover': {
      backgroundColor: '#0000008e',
    }
  },
  container: {
    marginTop: '70px',
    backgroundColor: 'rgba(0, 0, 0, 0.637)',
  },
  backdrop: {
    backgroundColor: 'white',
    color: 'white',
  },
  icon: {
    '&:hover': {
      cursor: 'pointer',
    }
  },
  editIcon: {
    color: '#0d6d45',
    '&:hover': {
      color: '#16b371',
    },
  },
  deleteIcon: {
    color: '#9c6161',
    '&:hover': {
      color: '#e09393',
    },
  },
}));


const LiveManage = ({
    lives,
    deleteLive,
    openDialog,
}) => {
    const classes = useStyles();
    const [myColumnsName, setMyColumnsName] = useState([]);

    useEffect(() => {
      const newColumns = { ...lives[0]}
      setMyColumnsName(Object.keys(newColumns).filter( f => (f !== '_id' && f !== '__v' && f !== 'soundcloudLink' && f !== 'buyLink' && f !== 'downloadLink')));
    }, [lives]);

    return ( 
        <>
            <TableContainer component={Paper} className={classes.container}>
              <Dialogs 
                name="shows" 
                setOpenDialog={openDialog} 
                BackdropProps={{
                  classes: {
                    root: classes.backdrop,
                  }
                }}
                message="live"
              />
                <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow className={classes.tableRowTitle}>
                    {myColumnsName.map(column => (
                        <TableCell key={column}>{column}</TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                   
                        {/* {showsTable("shows")} */}
                        {lives.map((live) => (
                            <TableRow key={live._id} className={classes.tableRow}>
                                <TableCell align="left">{moment(live.date).format("DD-MM-YYYY")}</TableCell>
                                <TableCell align="left">{live.city}</TableCell>
                                <TableCell align="left">{live.place}</TableCell>
                                <TableCell align="left">{live.name}</TableCell>
                                <TableCell align="left">{live.ticketLink}</TableCell>
                                <TableCell align="left" className={[classes.icon, classes.editIcon].join(' ')}>
                                    <EditIcon onClick={() => openDialog("shows", live)} />
                                </TableCell>
                                <TableCell align="left" className={[classes.icon, classes.deleteIcon].join(' ')}>
                                    <DeleteForeverOutlinedIcon onClick={() => deleteLive(live)} /> 
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
          </TableContainer>
        </>
     );
}
 
LiveManage.propTypes = {
  lives: PropTypes.array.isRequired,
  deleteLive: PropTypes.func,
  openDialog: PropTypes.func,
}

export default connect(state => ({
    lives: state.apiDataReducer.lives,
  }), {
    openDialog,
    deleteLive
  })(LiveManage); 
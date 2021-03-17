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
import Dialogs from '../Tabs/Dialog';

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
        // <div>eez</div> 
        <>
          <Dialogs 
            name="shows" 
            setOpenDialog={openDialog} 
          />
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    {myColumnsName.map(column => (
                        <TableCell key={column}>{column}</TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                   
                        {/* {showsTable("shows")} */}
                        {lives.map((live) => (
                            <TableRow key={live._id}>
                                <TableCell align="left">{moment(live.date).format("DD-MM-YYYY")}</TableCell>
                                <TableCell align="left">{live.city}</TableCell>
                                <TableCell align="left">{live.place}</TableCell>
                                <TableCell align="left">{live.name}</TableCell>
                                <TableCell align="left">{live.ticketLink}</TableCell>
                                <TableCell align="left">
                                    <EditIcon onClick={() => openDialog("shows", live)} />
                                </TableCell>
                                <TableCell align="left">
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
 

export default connect(state => ({
    lives: state.apiDataReducer.lives,
  }), {
    openDialog,
    deleteLive
  })(LiveManage); 
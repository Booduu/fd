import React, { useState, useEffect, useCallback } from 'react';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import EditIcon from '@material-ui/icons/Edit';
import Dialogs from '../Dialog';
import { openDialog } from '../../../../store/actions';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import moment from 'moment';
// import { getListProducts } from '../../../../store/actions';

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


const Rows = React.memo(({
  data,
  deleteLiveItem,
  deleteAlbumItem,
  deleteProductItem,
  name,
  openDialog,
}) => {
  const classes = useStyles();
  const [myColumnsName, setMyColumnsName] = useState([]);

  useEffect(() => {
    const newColumns = { ...data[0]}
    setMyColumnsName(Object.keys(newColumns).filter( f => (f !== '_id' && f !== '__v')));
  }, [data]);
   
  const showsTable = (tab) => {
    console.log('showsTable')
    
    return data.map((row) => (
      <TableRow key={row._id}>
        <TableCell align="left">{moment(row.date).format("DD-MM-YYYY")}</TableCell>
        <TableCell align="left">{row.city}</TableCell>
        <TableCell align="left">{row.place}</TableCell>
        <TableCell align="left">{row.name}</TableCell>
        <TableCell align="left">{row.ticketLink}</TableCell>
        <TableCell align="left"> 
          <EditIcon onClick={() => openDialog(tab, row)} />
        </TableCell>
        <TableCell align="left"> 
          <DeleteForeverOutlinedIcon onClick={() => deleteLiveItem(row)} />
        </TableCell>
      </TableRow>
    ))
  }

  const discoTable = (tab) => {
    console.log('discoTable')

    return data.map((row) => (
      <TableRow key={row._id}>
        <TableCell align="left">tracklist</TableCell>
        <TableCell align="left">{row.title}</TableCell>
        <TableCell align="left">{row.label} label</TableCell>
        <TableCell align="left">{moment(row.releaseDate).format("DD-MM-YYYY")}</TableCell>
        <TableCell align="left">
          <Avatar variant="square" className={classes.square} src={`http://localhost:3030/uploads/albums/${row.cover}`}/>
        </TableCell>

        <TableCell align="left"> 
          <EditIcon onClick={() => openDialog(tab, row)} />
        </TableCell>
        <TableCell align="left"> 
          <DeleteForeverOutlinedIcon onClick={() => deleteAlbumItem(row)} />
        </TableCell>
      </TableRow>
    ))
  }

  const shopTable = (tab) => {

    console.log('shopTable')
    return data.map((row) => (
      <TableRow key={row._id}>
        <TableCell align="left">{row.type}</TableCell>
        <TableCell align="left">{row.name}</TableCell>
        
        <TableCell align="left">{row.link}</TableCell>
        <TableCell align="left">
          <Avatar variant="square" className={classes.square} src={`http://localhost:3030/uploads/products/${row.cover}`}/>
        </TableCell>
        
        <TableCell align="left"> 
          <EditIcon onClick={() => openDialog(tab, row)} />
        </TableCell>
        <TableCell align="left"> 
          <DeleteForeverOutlinedIcon onClick={() => deleteProductItem(row)} />
        </TableCell>
      </TableRow>
    ))
  };
  
  console.log('ROWS', name)
  return (
    <>
      <Dialogs name={name} setOpenDialog={openDialog} />
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
              { name === 'shows' ? showsTable(name) : name === 'disco' ? discoTable(name) : name === 'shop' ? shopTable(name) : null }
            </TableBody>
          </Table>
        </TableContainer>
    </>
  );
});

export default connect(state => ({
  editingData: state.dialogsReducer.editingData,
}), {
  openDialog,
})(Rows); 

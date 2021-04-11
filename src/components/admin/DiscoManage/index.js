import React, { useState, useEffect } from 'react';
import { 
    openDialog,
    deleteAlbum,

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
    Avatar,
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
      color: 'white',
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
    color: 'white',
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

const ShopManage = ({
    albums,
    deleteAlbum,
    openDialog,
}) => {
    const classes = useStyles();
    const [myColumnsName, setMyColumnsName] = useState([]);

    useEffect(() => {
      const newColumns = { ...albums[0]}
      setMyColumnsName(Object.keys(newColumns).filter( f => (f !== '_id' && f !== '__v' && f !== 'soundcloudLink' && f !== 'buyLink' && f !== 'downloadLink')));
    }, [albums]);

    return ( 
        <>
          <TableContainer component={Paper} className={classes.container}>
            <Dialogs 
                name="disco" 
                setOpenDialog={openDialog} 
                BackdropProps={{
                  classes: {
                    root: classes.backdrop,
                  }
                }}
                message="album"
            />
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                  <TableRow className={classes.tableRowTitle}>
                    {myColumnsName.map(column => (
                        <TableCell key={column}>{column}</TableCell>
                    ))}
                  <TableCell></TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                {albums.map((album) => (
                    <TableRow key={album._id}  className={classes.tableRow}>
                        {/* <TableCell align="left">tracklist</TableCell> */}
                        <TableCell align="left">{album.title}</TableCell>
                        <TableCell align="left">{album.label}</TableCell>
                        <TableCell align="left">{moment(album.releaseDate).format("DD-MM-YYYY")}</TableCell>
                        <TableCell align="left">
                          <Avatar variant="square" className={classes.square} src={album.cover} />
                        </TableCell>
                        <TableCell align="left" className={[classes.icon, classes.editIcon].join(' ')}> 
                          <EditIcon onClick={() => openDialog("disco", album)} />
                        </TableCell>
                        <TableCell align="left" className={[classes.icon, classes.deleteIcon].join(' ')}> 
                          <DeleteForeverOutlinedIcon onClick={() => deleteAlbum(album)} />
                        </TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
     );
}
 
ShopManage.propTypes = {
  albums: PropTypes.array.isRequired,
  deleteAlbum: PropTypes.func,
  openDialog: PropTypes.func,
}

export default connect(state => ({
    albums: state.apiDataReducer.albums,
  }), {
    openDialog,
    deleteAlbum,
  })(ShopManage);

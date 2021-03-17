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
    console.log('eeeee', albums)
    return ( 
        <>
          <Dialogs 
            name="disco" 
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
                        {albums.map((album) => (
                            <TableRow key={album._id}>
                                <TableCell align="left">tracklist</TableCell>
                                <TableCell align="left">{album.title}</TableCell>
                                <TableCell align="left">{album.label} label</TableCell>
                                <TableCell align="left">{moment(album.releaseDate).format("DD-MM-YYYY")}</TableCell>
                                <TableCell align="left">
                                <Avatar variant="square" className={classes.square} src={`http://localhost:3030/uploads/albums/${album.cover}`}/>
                                </TableCell>

                                <TableCell align="left"> 
                                <EditIcon onClick={() => openDialog("disco", album)} />
                                </TableCell>
                                <TableCell align="left"> 
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
 

export default connect(state => ({
    albums: state.apiDataReducer.albums,
  }), {
    openDialog,
    deleteAlbum,
  })(ShopManage);

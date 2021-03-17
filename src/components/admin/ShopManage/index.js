import React, { useState, useEffect } from 'react';
import { 
    openDialog,
    deleteProduct,
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

const ShopManage = ({
    products,
    deleteProduct,
    openDialog,
}) => {
    const classes = useStyles();
    const [myColumnsName, setMyColumnsName] = useState([]);

    useEffect(() => {
      const newColumns = { ...products[0]}
      setMyColumnsName(Object.keys(newColumns).filter( f => (f !== '_id' && f !== '__v' && f !== 'soundcloudLink' && f !== 'buyLink' && f !== 'downloadLink')));
    }, [products]);

    return ( 
        // <div>eez</div> 
        <>
          <Dialogs 
            name="shop" 
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
                        {products.map((product) => (
                            <TableRow key={product._id}>
                                <TableCell align="left">{product.type}</TableCell>
                                <TableCell align="left">{product.name}</TableCell>
                                
                                <TableCell align="left">{product.link}</TableCell>
                                <TableCell align="left">
                                <Avatar variant="square" className={classes.square} src={`http://localhost:3030/uploads/products/${product.cover}`}/>
                                </TableCell>
                                
                                <TableCell align="left"> 
                                <EditIcon onClick={() => openDialog("shop", product)} />
                                </TableCell>
                                <TableCell align="left"> 
                                <DeleteForeverOutlinedIcon onClick={() => deleteProduct(product)} />
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
    products: state.apiDataReducer.products,
  }), {
    openDialog,
    deleteProduct,
  })(ShopManage);

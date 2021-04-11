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
            <TableContainer component={Paper} className={classes.container}>
                <Dialogs 
                  name="shop" 
                  message="product"
                  setOpenDialog={openDialog} 
                  BackdropProps={{
                    classes: {
                      root: classes.backdrop,
                    }
                  }}
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
                        {products.map((product) => (
                            <TableRow key={product._id} className={classes.tableRow}>
                                <TableCell align="left">{product.type}</TableCell>
                                <TableCell align="left">{product.name}</TableCell>
                                
                                <TableCell align="left">{product.link}</TableCell>
                                <TableCell align="left">
                                <Avatar variant="square" className={classes.square} src={product.cover} />
                                </TableCell>
                                
                                <TableCell align="left" className={[classes.icon, classes.editIcon].join(' ')}> 
                                <EditIcon onClick={() => openDialog("shop", product)} />
                                </TableCell>
                                <TableCell align="left" className={[classes.icon, classes.deleteIcon].join(' ')}> 
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
 
ShopManage.propTypes = {
  products: PropTypes.array.isRequired,
  deleteProduct: PropTypes.func,
  openDialog: PropTypes.func,
}

export default connect(state => ({
    products: state.apiDataReducer.products,
  }), {
    openDialog,
    deleteProduct,
  })(ShopManage);

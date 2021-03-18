import React, { useState } from 'react';
import { UploadAndCrop } from '../../utils';
import { 
    Grid,
    TextField,
    Button,
    Select,
    MenuItem,
} from '@material-ui/core';
import { 
    createProduct, 
    closeDialog,
    editProduct,
} from '../../../store/actions';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiListSubheader-root': {
            lineHeight: '30px',
        },
    },
    button: {
      margin: theme.spacing(1),
    },
    listItem: {
        height: '30px',
    },
}));

const Shop = ({
    editingData,
    editProduct,
    createProduct,
    errors,
    closeDialog,
    editProducts,
}) => {
    const classes = useStyles();
    const buttonValue = editingData != null ? "Edit" : "Save";
    const [imgState, setImgState] = useState(editingData && editingData?.cover ? `http://localhost:3030/uploads/products/${editingData.cover}` : '');
    const [file, setFile] = useState({});
    const [state, setState] = useState({
        type: editingData && editingData?.type ? editingData.type : 'Vinyl',
        link: editingData && editingData?.link ? editingData.link : '',
        name: editingData && editingData?.name ? editingData.name : '',
    });

    const handleChange = (e) => {
        const { name } = e.target;

        setState({
            ...state,
            [name]: e.target.value,
        });
    }
   
    const saveData = () => {
        const formData = new FormData();
        formData.append('type', state.type)
        formData.append('name', state.name)
        formData.append('link', state.link)

        if (editingData != null) {
            const isFile = file.name ? file : editingData.cover;
            formData.append('cover', isFile)
            formData.append('_id', editingData._id);
            editProduct(formData);
        } else {
            formData.append('cover', file)
            createProduct(formData);

        }
    }

    return (
        <Grid container spacing={1} justify="center" >
            <Grid container item xs={6} spacing={1}>
                <Grid item xs={12}>
                    <UploadAndCrop 
                        imgState={imgState} 
                        onChange={setImgState} 
                        setFile={setFile}
                        file={file}
                    />
                </Grid> 
            </Grid>
            <Grid container item xs={6} spacing={1}>
                <Grid item xs={12}>
                    <Select
                        name="type"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        placeholder="Type de produit"
                        value={state.type}
                        onChange={handleChange}
                        fullWidth
                    > 
                        <MenuItem value="Vinyl">Vinyl</MenuItem>
                        <MenuItem value="Numérique - Wave">Numérique - Wave</MenuItem>
                        <MenuItem value="Goodies">Goodies</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="name"
                        label="Name"
                        value={state.name}
                        onChange={handleChange}
                        error={errors != null && errors?.name?.message}
                        helperText={errors?.name?.message ? errors.name.message : ''}
                        fullWidth
                    />
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={12}>
                        <TextField
                            name="link"
                            label="Link"
                            value={state.link}
                            onChange={handleChange}
                            error={errors != null && errors?.link?.message}
                            helperText={errors?.link?.message ? errors.link.message : ''}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </Grid>
            
            <Grid item xs={12} container>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    onClick={saveData}
                    fullWidth
                >
                    {buttonValue}
                </Button>
            </Grid>
        </Grid>
    )
}

export default connect(state => ({
    errors: state.apiDataReducer.errors,
}), {
    createProduct,
    editProduct,
    closeDialog,
})(Shop);
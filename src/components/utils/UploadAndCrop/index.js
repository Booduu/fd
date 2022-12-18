import React, { useState, useEffect } from 'react'
import {useDropzone} from 'react-dropzone'
import { connect } from 'react-redux'
import style from './AdminDiscography.module.scss';
import Cropper from './Cropper';
// import ReactCrop from 'react-image-crop';
import '../../../../node_modules/react-image-crop/lib/ReactCrop.scss';
import PropTypes from 'prop-types';
 

const UploadAndCrop = React.memo(({
    onChange,
    imgState,
    errors,
}) => {
    const [objectUrl, setObjectUrl] = useState(null)
    const [messageDragZone, setMessagesDropZone] =  useState(errors && errors.messages.cover ? 'Tu dois déposer une image !' : 'Ajoute un image');

    const onDropAccepted = acceptedFiles => {
        //for the crop resize
        const url = URL.createObjectURL(acceptedFiles[0]);
        setObjectUrl(url);

        handleClickOpen();
        const reader = new FileReader();
        reader.readAsDataURL(acceptedFiles[0]);
        reader.onloadend = () => {
            onChange(reader.result);
        };
    };

    const onDropRejected = rejectedFiles => {
      setMessagesDropZone('Seuls les formats jpeg et png sont authorisés. Taille maximale de 6MO.')
    };

    const { 
        getRootProps, 
        getInputProps, 
        // isDragActive
    } = useDropzone({
        onDropAccepted,
        onDropRejected,
        maxFiles: 1,
        maxSize: 6000000,
        accept: 'image/jpeg, image/png',
    })

    useEffect(() => {
        if (errors !== null && errors.messages && errors.messages.cover) {
            setMessagesDropZone(errors.messages.cover)
        }
    }, [errors])

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return ( 
        <>
            <div {...getRootProps()}>
            <input {...getInputProps()} type="file" name="cover" />
            {
                <div className={[style.image_container].join(' ')}>
                    {imgState && <img alt="album à uploader" className={style.image_preview} src={imgState}/> }   
                        <div className={style.onDragMessage}>
                            {!imgState && <div>{messageDragZone}</div> }
                        </div>
                </div>   
            }
            
        </div>
        <Cropper 
            objectUrl={objectUrl} 
            open={open}
            handleClose={handleClose}
            onChange={onChange}
        />
    </>
     );
});

UploadAndCrop.propTypes = {
    // albums: PropTypes.array.isRequired,
    imgState: PropTypes.string,
    errors: PropTypes.object,
}
UploadAndCrop.defaultProps = {
    errors: null,
}

 
export default connect(state => ({
    errors: state.apiDataReducer.errors,
}), {
})(UploadAndCrop);

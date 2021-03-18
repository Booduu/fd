import React, { useState } from 'react'
import {useDropzone} from 'react-dropzone'
import { connect } from 'react-redux'
import style from './AdminDiscography.module.scss';
import Cropper from './Cropper';
// import ReactCrop from 'react-image-crop';
import '../../../../node_modules/react-image-crop/lib/ReactCrop.scss';

const UploadAndCrop = React.memo(({
    onChange,
    setFile,
    imgState,
    errors,
}) => {
    const [objectUrl, setObjectUrl] = useState(null)
 
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
        setFile(acceptedFiles[0])
    };

    const onDropRejected = rejectedFiles => {
      console.log('reject', rejectedFiles)
    };

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDropAccepted,
        onDropRejected,
        maxFiles: 1,
        maxSize: 6000000,
        accept: 'image/jpeg, image/png',
    })

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
                            {!imgState && <div style={{ fontSize: '3rem' }}>+</div> }
                            {/* isDragActive */}
                        </div>
                </div>   
            }
            
        </div>
        <Cropper 
            objectUrl={objectUrl} 
            // setBase64={setBase64}
            setFile={setFile}
            open={open}
            handleClose={handleClose}
            onChange={onChange}
        />
    </>
     );
});
 
export default connect(state => ({
    errors: state.apiDataReducer.errors,
}), {
})(UploadAndCrop);

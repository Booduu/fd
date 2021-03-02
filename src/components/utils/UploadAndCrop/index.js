import React, { useState, useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { connect } from 'react-redux'
import style from './AdminDiscography.module.scss';
import Cropper from './Cropper';
import ReactCrop from 'react-image-crop';
import '../../../../node_modules/react-image-crop/lib/ReactCrop.scss';

const UploadAndCrop = React.memo(({
    onChange,
    setFile,
    imgState,
}) => {
    const [objectUrl, setObjectUrl] = useState(null)
    const [base64, setBase64] = useState(null)
   

    const onDropAccepted = useCallback(acceptedFiles => {
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
    }, [])

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
                isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>
            }
                {imgState ? <img className={style.image_preview} src={imgState}/> : <p className={style.image_preview}  >Drop the files here ...</p>}
            
        </div>
        <Cropper 
            objectUrl={objectUrl} 
            setBase64={setBase64}
            setFile={setFile}
            open={open}
            handleClose={handleClose}
            onChange={onChange}
        />
    </>
     );
});
 
export default connect(null, {
})(UploadAndCrop);

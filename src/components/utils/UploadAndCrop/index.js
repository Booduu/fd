import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { connect } from 'react-redux'
import { createCover } from '../../../store/actions';
import style from './AdminDiscography.module.scss';

const UploadAndCrop = React.memo(({
    onChange,
    setFile,
    imgState,
}) => {
    console.log('upload')
    const onDropAccepted = useCallback(acceptedFiles => {
        // const objectUrl = URL.createObjectURL(acceptedFiles[0]);
        // console.log(objectUrl);
        // onChange(objectUrl);

            const reader = new FileReader();
            reader.readAsDataURL(acceptedFiles[0]);
            reader.onloadend = () => {
                onChange(reader.result);
                // createCover(acceptedFiles[0])
            };

            // const formData = new FormData();
            // formData.append('cover', acceptedFiles[0]);
            // console.log('formdata', formData)
            setFile(acceptedFiles[0])
        // if (cropResize == true) {
        //     // setImageUrl(objectUrl);
        // }

        // if (cropResize == false) {
        //     const reader = new FileReader();
        //     reader.readAsDataURL(acceptedFiles[0]);
        //     reader.onloadend = () => {
        //         onChange(reader.result);
        //     };
        // }
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
    return ( 
            <div {...getRootProps()}>
            <input {...getInputProps()} type="file" name="cover" />
            {/* {
                isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>
            } */}
                {imgState ? <img className={style.image_preview} src={imgState}/> : <p className={style.image_preview}  >Drop the files here ...</p>}

        </div>
     );
});
 
export default connect(null, {
})(UploadAndCrop);
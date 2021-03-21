import React, { useState }  from 'react';
import ReactCrop from 'react-image-crop';
import '../../../../../node_modules/react-image-crop/lib/ReactCrop.scss';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "black",
  },
}));

const Cropper = ({
    objectUrl,
    open,
    handleClose,
    onChange,
}) => {
  const classes = useStyles();
    const [imageRef, setImageRef] = useState(null)
    const [crop, setCrop] = useState({ 
        aspect: 1 / 1,
        width: 50,
        height: 50,
        x: 0,
        y: 0,
        unit: 'px',
    });


    const onCropComplete = (newCrop) => {
        makeClientCrop(imageRef, newCrop);
    }
 
    const onImageLoaded = (image) => {
        setImageRef(image);
        makeClientCrop(image, crop);
        return false;
    }

    const handleChange = (crop) => {
        setCrop(crop)
    }

    const makeClientCrop = async (image, crop) => {
      if (image && crop.width && crop.height) {
        // const croppedImageUrl = await getCroppedImg(
        //   image,
        //   crop,
        //   'newFile.jpeg'
        // );
        await getCroppedImg(
          image,
          crop,
          'newFile.jpeg'
        );
      }
    }

    const getCroppedImg = (image, crop, fileName = 'filename.jpeg') => {
        console.log(image)
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
      
        ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height,
        );
      
        // As Base64 string
        // const base64Image = canvas.toDataURL('image/jpeg');
        // setBase64(base64Image)
       
        return new Promise((resolve, reject) => {
          canvas.toBlob(blob => {
            blob.name = fileName;
            resolve(blob);
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                onChange(reader.result);
            };
          }, 'image/jpeg', 1);
        });
    }

    return (
      <Dialog 
        open={open} 
        onClose={handleClose} 
        aria-labelledby="form-dialog-title"
        PaperProps ={{
          classes: {
           root: classes.paper
          }
        }}
      >
        <DialogTitle id="form-dialog-title">Crop</DialogTitle>
        <DialogContent>
            <ReactCrop 
                src={objectUrl} 
                crop={crop} 
                onChange={handleChange} 
                onComplete={onCropComplete}
                onImageLoaded={onImageLoaded}
                // className={style.cropper}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );

}
export default Cropper;
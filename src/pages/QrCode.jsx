import React from 'react'
import { Camera, CameraResultType } from '@capacitor/camera';

function QrCode() {

    const takePicture = async () => {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.Uri
        });
      
        // image.webPath will contain a path that can be set as an image src.
        // You can access the original file using image.path, which can be
        // passed to the Filesystem API to read the raw data of the image,
        // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
        var imageUrl = image.webPath;
      
        // Can be set to the src of an image now
        const imageElement = document.querySelector('img')
        imageElement.src = imageUrl;
      };
      React.useEffect(() => {
        // Update the document title using the browser API
takePicture()      },[]);
  return (
    <>
    <div>
        <img src="" alt="" />
    </div>
    </>
    )
}

export default QrCode
import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import DropZone from 'react-dropzone';
import {connect} from 'react-redux';

import firebase from 'firebase/app';
import 'firebase/storage';

import {removeImage, addImage, setImageUrl} from '../../redux/actions/NewOfferActions';

import {renderPreviewImage, renderUploadImage} from '../../image_compressor/CompressImage';

import {MAX_IMAGE_SIZE_CAN_UPLOAD} from '../../constants';

class UploadPictureButton extends Component{
    constructor(props){
        super(props);

        this.uploadStatus = {
            content : (
                <div className="uploadPic hovarable hoverRed greyButton" style={{maxWidth : '170px',textAlign:'center',borderRadius: '7px', padding: '20px'}}>
                    <i style={{padding: '20px'}} className="fa fa-plus fa-3x"></i>
                    <div style={{textAlign: 'center'}}>
                        <p>Upload an image</p>
                    </div>
                </div>
            ),

            upload: (
                <div className="uploadPic hovarable hoverRed greyButton" style={{maxWidth : '170px',textAlign:'center',borderRadius: '7px', padding: '20px', borderColor: '#e8232d'}}>
                    <i style={{padding: '20px', height: '100%',color: '#e8232d'}} className="fa fa-check fa-3x"></i>
                    <div style={{textAlign: 'center', color: '#e8232d'}}>
                        <p>Drop Image Here</p>
                    </div>
                </div>
            ),
            fail: (
                <div className="uploadPic hovarable hoverRed greyButton" style={{maxWidth : '170px',textAlign:'center',borderRadius: '7px', padding: '20px'}}>
                    <i style={{padding: '20px'}} className="fas fa-check fa-3x"></i>
                    <div style={{textAlign: 'center'}}>
                        <p>Not supported</p>
                    </div>
                </div>
            )
        }

        this.state = {
            show: this.uploadStatus.content,
            isImageUploading: false,
            disabled: false,
            imageName: '',
            progress: '0%',
            uploadTask: null,
            bucketPath: '',
            imagePath: ''
        }
    }

    uploadProgressHandler = (snapshot, fileToUpload) => {
        let percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        const uploadImage = (
            <div style={{position: 'relative', minWidth: '100px', minHeight: '100px'}}>
                <img 
                    style={{
                        width: '100%',
                        height: '100%',
                        overflow: "hidden",
                        filter: 'grayscale(100%)', 
                        opacity: '0.8'
                    }} 
                    src={fileToUpload.preview} 
                    alt=''
                />
                <div 
                    style={{
                        position: 'absolute',
                        width: percentage+"%",
                        height: '100%',
                        overflow: "hidden",
                        left: '0',
                        top: '0',
                    }} 
                >
                    <img 
                        style={{
                            height: '100%'
                        }}
                        src={fileToUpload.preview} 
                        alt=''
                    />
                </div>
                <h3 
                    style={{
                        position: 'absolute', 
                        left: '50%', top: '50%', 
                        transform: 'translate(-50%, -50%)', 
                        color: '#fff',
                        textShadow: "0 0px 5px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.8)",
                        textAlign: 'center',
                        marginTop: '5px'
                    }}
                >
                    <span>{Math.floor(percentage)+'%'}</span>
                </h3>
                <h5 
                    onClick={() => this.cancelUpload(this.state.uploadTask)}
                    className="hovarable" 
                    style={{
                        position: 'absolute', 
                        right: '5px', 
                        top: '5px', 
                        color: '#fff',
                        textShadow: "0 0px 5px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.8)",
                    }}
                >
                    X
                </h5>
            </div>
        )
        this.setState({
            progress: Math.floor(percentage)+"%",
            show: uploadImage
        })
    }

    uploadErrorHandler = (err) => {
        if(err){
            this.setState({
                progress: 'Error'
            })
        }
    }

    uploadCompleteHandler = (uploadTask) => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.setState({imagePath: downloadURL});
            this.props.setImageUrl(downloadURL, this.state.bucketPath);
        });
    }

    cancelUpload = (uploadTask) => {
        uploadTask.cancel();
        if(this.state.bucketPath !== ""){
            if(this.state.bucketPath !== ""){
                const storageRef = firebase.storage().ref(this.state.bucketPath);
                storageRef.delete();
            }
        }
        this.props.removeImage(this.state.bucketPath);
        this.props.removeButton(this.props.id);
    }



    onDrop = async (acceptedFiles, rejectedFiles) => {
        if(acceptedFiles.length > 0){
            const id = Date.now();
            const fileToUpload = acceptedFiles[0];

            this.props.addNewButton();

            const uploadImage = (
                <div style={{position: 'relative', minWidth: '100px', minHeight: '100px'}}>
                    <img 
                        style={{
                            width: '100%',
                            height: '100%',
                            overflow: "hidden",
                            filter: 'grayscale(100%)', 
                            opacity: '0.8'
                        }} 
                        src={fileToUpload.preview} 
                        alt=''
                    />
                    <div 
                        style={{
                            position: 'absolute',
                            width: this.state.progress,
                            height: '100%',
                            overflow: "hidden",
                            left: '0',
                            top: '0',
                        }} 
                    >
                        <img 
                            style={{
                                height: '100%'
                            }}
                            src={fileToUpload.preview} 
                            alt=''
                        />
                    </div>
                    <h3 
                        style={{
                            position: 'absolute', 
                            left: '50%', top: '50%', 
                            transform: 'translate(-50%, -50%)', 
                            color: '#fff',
                            textShadow: "0 0px 5px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.8)",
                            textAlign: 'center',
                            marginTop: '5px'
                        }}
                    >
                        <span>{this.state.progress}</span>
                    </h3>
                </div>
            )
            this.setState({
                show: uploadImage,
                isImageUploading: true,
                disabled: true,
            })

            try{
                const imageName = this.props.userName+"_"+this.props.idOfOffer+"_"+id;

                this.setState({
                    imageName
                })

                const previewImage = await renderPreviewImage(fileToUpload, imageName);
                const toUploadImage = await renderUploadImage(fileToUpload, imageName);

                let storagePathName = this.props.userName+"/offers/"+this.props.idOfOffer+"/"+toUploadImage.name

                this.props.addImage(storagePathName, previewImage);
                
                //Set bucket paths
                this.setState({
                    bucketPath: storagePathName
                })
                //Create storage ref
                const storageRef = firebase.storage().ref(storagePathName);

                //Upload file
                const uploadTask = storageRef.put(toUploadImage);
                this.setState({
                    uploadTask
                })

                //Progress
                uploadTask.on("state_changed",(snapshot) => this.uploadProgressHandler(snapshot, fileToUpload),err => this.uploadErrorHandler(err), () => this.uploadCompleteHandler(uploadTask))
            }catch(e){
                console.log(e);
            }
        }
        
        if(rejectedFiles.length > 0){
            this.setState({
                show: (
                    <div className="uploadPic hovarable hoverRed greyButton" style={{maxWidth : '170px',textAlign:'center',borderRadius: '7px', padding: '20px'}}>
                        <i style={{padding: '20px'}} className="fa fa-plus fa-3x"></i>
                        <div style={{textAlign: 'center'}}>
                            <p>File unsupported</p>
                        </div>
                    </div>
                )
            })
        }
    }
    
    render(){
        return(
            <div className="" style={{display: 'inline-block', flexDirection: 'column'}}>
                <DropZone multiple={false} maxSize={MAX_IMAGE_SIZE_CAN_UPLOAD*1024*1024} disabled={this.state.disabled} onDrop={this.onDrop}  className="dropzone" accept="image/jpeg, image/png">
                    {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
                        if (isDragActive && !this.state.isImageUploading){
                                return this.uploadStatus.upload;
                        }
                        if (isDragReject) {
                            return this.uploadStatus.fail;
                        }
                        return this.state.show;
                    }}
                </DropZone>
            </div>
        )
    }
}
const mapDispatchToProps ={
    removeImage,
    addImage,
    setImageUrl,
}

const mapStateToProps = (state) => {
    return {
        userName: state.user.userName,
        idOfOffer: state.newOffer.time,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadPictureButton);
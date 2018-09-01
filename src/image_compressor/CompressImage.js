import ImageCompressor from 'image-compressor.js';
import {MAX_PREVIEW_WIDTH, MAX_PREVIEW_QUALITY, MAX_IMAGE_HEIGHT, MAX_IMAGE_WIDTH, MAX_IMAGE_QUALITY} from '../constants';

export const renderPreviewImage = async (file, name) => {
    return new Promise((resolve, reject) => {
        new ImageCompressor(file, {
            quality: MAX_PREVIEW_QUALITY,
            maxWidth: MAX_PREVIEW_WIDTH,
            maxHeight: MAX_IMAGE_HEIGHT,
            convertSize: 0,
            success(result) {
                result.name = name+"_prev.jpg";
                resolve(result);
            },
            error(e) {
                return reject(e);
            },
        })
    })
}

export const renderUploadImage = (file, name) => {
    return new Promise((resolve, reject) => {
        new ImageCompressor(file, {
            quality: MAX_IMAGE_QUALITY,
            maxWidth: MAX_IMAGE_WIDTH,
            maxHeight: MAX_IMAGE_HEIGHT,
            convertSize: 0,
            success(result) {
                result.name = name+"_img.jpg";
                resolve(result);
            },
            error(e) {
                return reject(e);
            },
        })
    })
}
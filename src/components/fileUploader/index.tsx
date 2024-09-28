import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as UC from '@uploadcare/file-uploader';
import { OutputFileEntry } from '@uploadcare/file-uploader';


import { FileUploaderRegular } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';

import st from './FileUploader.module.scss';
import cs from 'classnames';


UC.defineComponents(UC);


interface IFileUploaderProps { }

const FileUploader: React.FunctionComponent<IFileUploaderProps> = (props) => {
    return (
        <div>
            {/* <uc-config
                ctx-name="uploaderCtxName"
                pubkey="749d410c655a550ef700"
            ></uc-config>

            <uc-file-uploader-regular
                ctx-name="uploaderCtxName"
            ></uc-file-uploader-regular> */}
            <FileUploaderRegular
                sourceList="local, url, camera, dropbox"
                classNameUploader="uc-light"
                pubkey="749d410c655a550ef700"
            />
        </div>
    )
}

export default FileUploader;

import React from "react";

import { Form, FormGroup, FileUploader } from "@carbon/react";

export default function Upload() {
    return (
        <>
        <Form>
        <div className="cds--file__container">
            <FileUploader
            accept={[
                '.jpg',
                '.png'
              ]}
    
            
            id="file-1"
            buttonKind="primary"
            buttonLabel="Upload"
            filenameStatus="edit"
            iconDescription="Clear file"
            labelDescription="only .jpg files at 500mb or less"
            labelTitle="Upload image"

            />
            </div>
        </Form>
        </>
    )
}
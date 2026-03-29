import React, {useState} from "react";

const useSelectFile = () => {
    const [file, setFile] = useState<File | null>(null);
    const [fileList, setFileList] = useState<File[] | []>([]);

    const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const mainFile = e.target.files;
        if(mainFile && mainFile.length > 0) {
            setFile(mainFile[0]);
        }
    };

    const selectFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filesList = e.target.files;
        if(filesList && filesList.length !== 0) {
            setFileList(Array.from(filesList));
        }
    };

    const resetFile = () => {
        setFile(null);
        setFileList([])
    }

    return {
        selectFiles,
        selectFile,
        file,
        fileList,
        resetFile
    };
};

export default useSelectFile;
import React, {useCallback, useState } from 'react'
import {useDropzone} from 'react-dropzone'
import { FiUpload } from "react-icons/fi";
import { FaFileAlt } from "react-icons/fa";

import { Container } from './styles';

interface Props {
  onFileUploaded: (file: File) => void;
}

const Dropzone = ({ onFileUploaded }: Props) => {
  const [selectedFileUrl,setSelectedFileUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const fileUrl = URL.createObjectURL(file);
    setSelectedFileUrl(fileUrl);
    onFileUploaded(file);
  }, [onFileUploaded])

  const {acceptedFiles, getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    accept: '.txt, .csv'
  })

  return (
    <Container>
      <div className="dropzone" {...getRootProps()}>
        <input {...getInputProps()} accept=".txt, .csv" />
        {
          selectedFileUrl
            ? (<><FaFileAlt size={36} color="#4ECB79" /><h6>{acceptedFiles[0].name}</h6></>)
            : isDragActive
              ? <p><FiUpload />Drop here ...</p>
              : <p><FiUpload />Upload a data file</p>
        }
      </div>
    </Container>
  )
}

export default Dropzone;

'use client'

import { convertFileToUrl } from '@/lib/utils'
import Image from 'next/image'
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

type FileUploaderProps = {
  files: File[] | undefined,
  onChange: (files: File[]) => void
}


const FileUploader = ({ files, onChange }: FileUploaderProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onChange(acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}
      className='file-upload'
    >
      <input {...getInputProps()} />
      {files && files?.length > 0 ? (
        <Image 
          src={convertFileToUrl(files[0])}
          height={1000}
          width={1000}
          alt='uploaded image'
          className='max-h-[400px] overflow-hidden object-cover'
        />
      ) : (
        <>
          <Image
            src='/assets/icons/upload.svg'
            width={40}
            height={40}
            alt='upload' 
          />
          <div className='file-upload-label'>
            <p className='text-14-regular'>
              <span className='text-green-500'>Haz click</span> o arrastra y suelta
            </p>
            <p>
              SVG, PNG, JPG o GIF (máx. 800 x 400)
            </p>
          </div>
        </>
      )}
      {
        isDragActive ?
          <p>Suelta los archivos aquí ...</p> :
          <p>Arrastra y suelta los archivos aquí o haz click para seleccionarlos</p>
      }
    </div>
  )
}

export default FileUploader
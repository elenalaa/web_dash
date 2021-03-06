import React from 'react'

import { getMedia, postPosts } from '../../api';
import './Upload.css';
import { useDataContext } from '../../context/DataContext';

const Buttons = () => {
  const {files, setFiles, media,setMedia} =useDataContext()

  const save =async () => {
    await postPosts(files, setFiles)
    await setFiles([])
    await setMedia([])
    await getMedia(media,setMedia)
  }




  return (
      <div className="btn">
        <button className="btn btn-outline-primary" style={{width: "8rem", margin:"8px",}} onClick={()=>{save()}} >save</button>
      </div>
  )
}

export default Buttons;

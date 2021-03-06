import React, {useState} from 'react';
import {pdfjs} from "react-pdf";
import {deleteFile,updateFile} from '../../api';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import { useDataContext } from '../../context/DataContext';


const PreView = ({file}) => {
  const {media,setMedia} = useDataContext();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [time, setTime] = useState(file.showTime)
  const [date,setDate]= useState(file.expireTime)
  const withCredentials = true;
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const deletee = (data) => {
    deleteFile(withCredentials, data).then((res) => res === 200 ?setMedia(media.filter(id => id.id != file.id)):null)
    getUpdate()
   
  }
 
  const image =  (
    
    <>
      
      {file.type === "document/pdf" || file.type === "application/pdf" ?
        <div className="col-sm-12" style={{flexGrow: 1, justifyItems:"baseline", justifyContent:"row", }}>
          <div className="card shadow-sm" style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
          <div className="card-header">Title: {file.name}</div>
          <div className="card-body">
           <p>Type: {file.type}</p> 
            <p>UploadedBy: {file.uploadedBy}</p>
            <p>Filename: {file.filename}</p>
          <p>ShowTime: <input type="number" value={time / 1000} onChange={(e) => setTime(e.target.value * 1000)} /></p>
          <p>.s expireDate: <input type="datetime" value={date} onChange={(e) => setDate(e.target.value)} /></p></div>
          <div className="d-flex flex-column align-items-center">
          <button className="btn btn-outline-primary" style={{width: "18rem", margin:"5px", }} onClick={() => {
            const data = {file}
            data.file.showTime = time
            data.file.expireTime = date
            updateFile(data)
            }}>Update</button>
          <button className="btn btn-outline-dark" style={{width: "18rem", margin:"5px"}} onClick={() => {
            const data = {mediaId: file.id, name: file.filename}
            deletee(data)
            }}>Delete</button>
        </div></div></div> : file.type === "video/mp4" ?
        <div className="card shadow-sm" style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
        <div className="card-header">Title: {file.name}</div>
        <div className="card-body">
            <p>Type: {file.type}</p>  
            <p>UploadedBy: {file.uploadedBy}</p>
            <p>Filename: {file.filename} </p>
            <p>ExpireDate: <input type="datetime" value={date} onChange={(e) => setDate(e.target.value)} /></p></div>
            <div className="d-flex flex-column align-items-center"> 
              <button className="btn btn-outline-primary" style={{width: "18rem", margin:"5px", }} onClick={() => {
            const data = {file}
            data.file.showTime = time
            data.file.expireTime = date
            updateFile(data)
            }}>Update</button>
            <button className="btn btn-outline-dark" style={{width: "18rem", margin:"5px",}} onClick={() => {
              const data = {mediaId: file.id, name: file.filename}
              deletee(data)
            }}>Delete</button>
          </div></div> : console.log("wrong media")
}
      
            </>
  )
 
  return (
    
    <div style={{display: "flex" , flexDirection: "column"}}>{image}</div>
  )
}

export default PreView;
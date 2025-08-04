import React from 'react'
import closeIcon from "@i/close.svg";
function Modal({videos, setmodal}) {
    console.log(videos);
  return (
    <div className='modal'>
        <div className="modal__close" onClick={()=>setmodal(false)}><img src={closeIcon} alt="" /></div>
        
        {
            videos.results.length != 0 ? <div className="modal__window">
                <iframe width="1280" height="720" src={`https://www.youtube.com/embed/${videos.results[0].key}`} title="" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div> : <h1>Video topilmadi!!!</h1>
        }
    </div>
  )
}

export default Modal
import React, { Dispatch, SetStateAction } from 'react';

interface ModalProps {
   isVisible : boolean;
   setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

function Modal(props: ModalProps) {
   
  let { isVisible, setIsModalOpen } = props;

   let modalClassName = "modal__overlay";

   if (isVisible) {
      modalClassName += "modal__overlay show-modal";
   } else {
      modalClassName = "modal__overlay";
   }

   const cancelModal = () => {

   }

   return (
         <div className={modalClassName}>
            <div className="modal">
                <div className="modal__content">
                    <h2 className="title">Add/Edit article</h2>
                    <div className="inputs__container">
                        <input
                            value="input"
                            type="text"
                            name="title"
                            className="input"
                            placeholder="Please enter title" />
                        <input
                            value="input"
                            type="text"
                            name="tag"
                            className="input"
                            placeholder="Please enter tag" />
                        <input
                            value="input"
                            type="text"
                            name="author"
                            className="input"
                            placeholder="Please enter author" />
                        <input
                            value="input"
                            type="text"
                            name="date"
                            className="input"
                            placeholder="Please enter date" />
                        <input
                            value="input"
                            type="text"
                            name="imgUrl"
                            className="input"
                            placeholder="Please enter image url" />
                        <input
                            value="input"
                            type="text"
                            name="saying"
                            className="input"
                            placeholder="Please enter saying" />
                    </div>
                    <textarea
                        value="input"
                        name="content"
                        className="textarea"
                        cols={28}
                        rows={7}
                        placeholder="Please enter content"></textarea>
                    <div className="modal__buttons">
                        <button type="button" onClick={() => setIsModalOpen(false)} className="button">Cancel</button>
                        <button type="button" onClick={() => modalClassName = "modal__overlay"} className="button button--pink">Save</button>
                    </div>
                </div>
            </div>
        </div>
     )
}

export default Modal;
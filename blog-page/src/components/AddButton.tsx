import React from 'react';


function AddButton(props : any) {
    
    const dummyArticle = {
        id: 0,
        title: '',
        tag: '',
        author: '',
        date: '',
        imgUrl: '',
        saying: '',
        content: '',
    }

    return(
        <div className="add__container">
            <button
                type="button"
                onClick={() => {
                    props.visibleModal(true);
                    props.setNewArticle(dummyArticle);
                }}
                className="button"> + Add Article</button>
        </div>
    )
}
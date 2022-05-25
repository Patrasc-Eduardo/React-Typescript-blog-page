import axios from 'axios';
import { randomUUID } from 'crypto';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { IArticle } from './Article';

interface AddButtonProps {
    //isModalVisible: Dispatch<SetStateAction<boolean>>;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    setArticle: Dispatch<SetStateAction<IArticle>>;
    // setArticles: Dispatch<SetStateAction<IArticle[]>>;
    articles: IArticle[];
}

function AddButton(props : AddButtonProps) {
    //const [isModalVisible, setModalVisible] = useState(false);
    let {setIsModalOpen, setArticle, articles} = props;

    const dummyArticle = {
        id: 0,
        title: '',
        tag: '',
        author: '',
        date: '',
        imageUrl: '',
        content: '',
    }

    const changeModalVisisibilityCreateArticle =  async () => {
        setArticle(dummyArticle);
        setIsModalOpen(true);

        // now we fetch
        let randomId = Math.floor(Math.random()*(100-1+1)+1);
       
        await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(
        async (posts) => {
          let result = posts[randomId];
          dummyArticle.title = result.title;
        //   dummyArticle.id = result.id;
          dummyArticle.content = result.body;
          dummyArticle.tag = result.title;
          dummyArticle.date =  new Date().toDateString();
          var seed = Math.floor(Math.random() * 100) + 1;
          dummyArticle.imageUrl = 'https://picsum.photos/seed/' + seed + '/200/300';
          await fetch("https://jsonplaceholder.typicode.com/users/" + result.userId)
          .then(res => res.json())
          .then(user => {
              dummyArticle.id = user.id;
              dummyArticle.author = user.name;
          });
          
        }
      );
      console.log("dummyArticle " + console.log(JSON.stringify(dummyArticle)));
      setArticle(dummyArticle);
      articles.push(dummyArticle);
    }

    //fetch data and populate an article 

    return(
        <div className="add__container">
            <button
                type="button"
                className="button"
                onClick={changeModalVisisibilityCreateArticle}> + Add Article</button>
        </div>
    );
}

export default AddButton;
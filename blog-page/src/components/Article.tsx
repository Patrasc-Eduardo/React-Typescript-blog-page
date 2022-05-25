import React from 'react';

interface ArticleProps {
   articleData: IArticle;
}

export interface IArticle {
   id?: number;
   title: string;
   tag : string;
   author: string;
   date : string;
   imageUrl: string;
   content: string;
}

function Article(props: ArticleProps) {
   let {articleData} = props;
   return (
       <article>
            <h2 className="title">{articleData.title}</h2>
            <ul className="info__container">
                <li className="info__item">{articleData.tag}</li>
                <li className="info__item">Added by <span className="info__mark">{articleData.author}</span>
                </li>
                <li className="info__item">{articleData.date}</li>
            </ul>
            <img src={articleData.imageUrl} alt={articleData.title} />
            <div className="content__container">
                <p>{articleData.content}</p>
            </div>
        </article>
   )
}

export default Article;
import React from 'react';

interface ArticleProps {
    article: ArticleModel;
}

export interface ArticleModel {
    id: number;
    title: string;
    tag: string;
    author: string;
    date: string;
    imgUrl: string;
    saying: string;
    content: string;
}

function Article(props: ArticleProps) {
    return (
        <article>
            <h2 className="title">{props.article.title}</h2>
            <ul className="info__container">
                <li className="info__item">{props.article.tag}</li>
                <li className="info__item">Added by&nbsp;
                    <span className="info__mark">{props.article.author}</span>
                </li>
                <li className="info__item">{props.article.date}</li>
            </ul>
            <img src={props.article.imgUrl} alt="Bike" />
            <div className="content__container">
                <p>{props.article.content}</p>
            </div>
            <div className="readmore__container">
                <button type="button" className="button">Read More</button>
            </div>
        </article>
    );
}

export default Article;
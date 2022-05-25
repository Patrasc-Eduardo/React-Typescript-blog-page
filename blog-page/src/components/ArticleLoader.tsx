import React, { Dispatch, SetStateAction, useEffect } from 'react';
import {IArticle} from './Article';
import Article from './Article';

interface LoaderProps {
   articleData: IArticle;
   isLoaded: boolean;
//    setArticleLoaded : Dispatch<SetStateAction<boolean>>;
    articles: IArticle[];
}

function ArticleLoader(props: LoaderProps) {
    const {articleData, isLoaded, articles} = props;

    // if (isLoaded) {
    //     return (
    //         <Article articleData = {articleData}/>
    //     );
    // } else {
    //     return <div></div>
    // }
    return <div></div>
}

export default ArticleLoader;



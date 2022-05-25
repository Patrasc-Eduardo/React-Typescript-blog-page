import React, { Dispatch, SetStateAction } from 'react';
import { IArticle } from './Article';

interface DropdownOptionProps {
    article: IArticle;
    filterAuthorName : Dispatch<SetStateAction<string>>; 
}


function DropdownOption(props: DropdownOptionProps) {
    const {article, filterAuthorName} = props;
    return (
        <option value={article.author} onClick = {() => filterAuthorName(article.author)}>{article.author}</option>
    )
}

export default DropdownOption;
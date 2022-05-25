import React from 'react';
import { IArticle } from './Article';

interface DropdownOptionProps {
    article: IArticle;    
}

function DropdownOption(props: DropdownOptionProps) {
    const {article} = props;
    return (
        <option value={article.author}>{article.author}</option>
    )
}

export default DropdownOption;
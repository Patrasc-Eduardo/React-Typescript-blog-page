import React, { Dispatch, SetStateAction, useState } from 'react';
import { IArticle } from './Article';
import DropdownOption from './DropDownOption';

interface DropdownProps {
    articles: IArticle[];
    filterAuthorName : Dispatch<SetStateAction<string>>;
}

function Dropdown (props: DropdownProps) {
    const {articles, filterAuthorName } = props;

    return (
        <select name="authors" id="authors">
         <option>Select an author</option>
         {
          articles.map(article => {
            return (
              <DropdownOption article = {article} filterAuthorName = {filterAuthorName}/>
            )
          })
        }
        </select>
    );
}

export default Dropdown;
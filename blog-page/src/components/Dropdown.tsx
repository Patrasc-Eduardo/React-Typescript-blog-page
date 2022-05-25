import React from 'react';
import { IArticle } from './Article';
import DropdownOption from './DropDownOption';

interface DropdownProps {
    articles: IArticle[];
}

function Dropdown (props: DropdownProps) {
    const {articles} = props;
    return (
        <select name="authors" id="authors">
         {
          articles.map(article => {
            return (
              <DropdownOption article = {article} />
            )
          })
        }
        </select>
    );
}

export default Dropdown;
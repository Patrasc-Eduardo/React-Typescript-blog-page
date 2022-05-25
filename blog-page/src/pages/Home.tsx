import React, { useState, useEffect } from 'react';
import AddButton from '../components/AddButton';
import Article, { IArticle } from '../components/Article';
import Dropdown from '../components/Dropdown';
import Menu from '../components/Menu';
import Modal from '../components/Modal';

function Home () {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [article, setArticle] = useState(
    {
      id: 0,
      title: '',
      tag: '',
      author: '',
      date: '',
      imageUrl: '',
      content: '',
    } as IArticle);
    const [articles, setArticles] = useState([] as IArticle[]);

    const [articleIsLoaded, setArticleLoaded] = useState(false);
 
    return (
      <div className="container">
      <div className="container">
      <Menu />
      <Dropdown articles = {articles}/>
      <AddButton setIsModalOpen = {setIsModalOpen} setArticle = {setArticle} articles = {articles}/>
      <main>
        {
          articles.map(article => {
            return (
              <Article articleData = {article} />
            )
          })
        }
      </main>
      </div>
      <Modal 
      isVisible = {isModalOpen}
      setIsModalOpen = {setIsModalOpen}
      setArticleLoaded = {setArticleLoaded}
      />
      </div>
    );
}

export default Home;
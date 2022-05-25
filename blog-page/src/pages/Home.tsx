import React, { useState, useEffect } from 'react';
import AddButton from '../components/AddButton';
import Article, { IArticle } from '../components/Article';
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

    return (
      <div className="container">
      <div className="container">
      <Menu />
      <AddButton setIsModalOpen = {setIsModalOpen} setArticle = {setArticle} />
      <main>
        <Article articleData={article}/>
        <Article articleData={article}/>
        <Article articleData={article}/>
      </main>
      </div>
      <Modal 
      isVisible = {isModalOpen}
      setIsModalOpen = {setIsModalOpen}
      />
      </div>
    );
}

export default Home;
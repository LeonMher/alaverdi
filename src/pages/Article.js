import React from 'react'
import '../styles/article.style.css'
import ArticleContent from '../article-content'


function Article({ match }) {

    const name = match.params.name;

    const article = ArticleContent.find(article => article.name === name)




    return (
        <div className='article'>


            <h1>{article.title}</h1>

            {article.content.map((val) => {
                return (
                    <p>{val}</p>
                )

            })}



        </div>
    )
}

export default Article

import React from 'react'
import '../styles/article.style.css'
import ArticleContent from '../article-content'
import { Link } from 'react-router-dom'


function ArticlesList() {
    return (
        <div className='articlesList'>
            <h1>Articles Available</h1>
            {ArticleContent.map((val) => {
                return (
                    <ul>
                        <li>
                            <Link>{val.title}</Link>
                        </li>
                    </ul>
                )
            })}

        </div>
    )
}

export default ArticlesList

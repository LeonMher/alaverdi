import React, { useEffect } from 'react'
import '../styles/article.style.css'
import '../styles/list.style.css'
import ArticleContent from '../article-content'
import { Link } from 'react-router-dom'
import Aos from 'aos'


function ArticlesList() {

    useEffect(() => {


        Aos.init({ duration: 2000 })

    }, [])



    return (
        <div className='articlesList'>
            <div className='listContainer'>
                <h1>Articles Available</h1>

                {ArticleContent.map((article, key) => {
                    return (

                        <ul>
                            <li>
                                <Link key={key} to={`/article/${article.name}`}>
                                    <h3 data-aos="fade-right">{article.title}</h3>
                                    <div className='picFrame'>
                                        {article.picture}
                                    </div>
                                </Link>
                            </li>
                        </ul>

                    )
                })}
            </div>

        </div>
    )
}

export default ArticlesList

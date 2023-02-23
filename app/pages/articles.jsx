import {Article} from "../components/Article";
const articles = require('./dbArticles')

export default function ArticlesPage(){
    return(
        <div>
            <h1>Welcome to the articles page!</h1>
            <ul>
                {articles.map((article) => {
                    return(
                        <li key={article.id}>
                            <Article article={article}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};
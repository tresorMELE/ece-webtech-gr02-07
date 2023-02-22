import {Article} from "../components/Article";

const articles = [
      {
        id: 1,
        title: 'My article',
        content: 'Content of the article.',

      },
      {
        id: 2,
        title: 'My article 2',
        content: 'Content of the article 2',

      },

    ];

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
)};
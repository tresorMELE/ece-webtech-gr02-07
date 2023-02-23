import { useRouter } from "next/router";
import {Article} from "../../components/Article";
const articles = require('../dbArticles')

export default function ArticleId() {
    const router = useRouter();
    const query = router.query;
    const id = query.id;

    const myArticle = articles.find(article => article.id === parseInt(id))
    if (myArticle) {
        return (
            <Article article={myArticle} />
        )
    }else{
        return (
            <p>Pas d'article trouvé</p>
        );
    }
}
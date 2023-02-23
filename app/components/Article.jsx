export function Article({article}) {
    return (<p>{article?.title} : {article?.content}</p>)
}
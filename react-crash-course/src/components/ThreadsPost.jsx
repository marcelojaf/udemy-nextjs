import classes from './ThreadsPost.module.css';

function ThreadsPost(props){
    return <div className={classes.post}>
        <p className={classes.autor}>{props.autor}</p>
        <p className={classes.text}>{props.post}</p>
    </div>
}

export default ThreadsPost;
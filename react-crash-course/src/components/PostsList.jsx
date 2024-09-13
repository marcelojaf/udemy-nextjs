import ThreadsPost from "./ThreadsPost";
import classes from './PostsList.module.css';

function PostsList(){
    return <ul className={classes.posts}>
        <ThreadsPost autor="Marcelo" post="O Goiás me mata de raiva!!" />
        <ThreadsPost autor="Felipe" post="Go Pack! Go!"/>
    </ul>
}

export default PostsList;
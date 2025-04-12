import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostList.module.css';

function PostList(props) {
  const { posts } = props;
  return (
    <>
    <NewPost/>
    <div className={classes.posts}>
        {posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} />
        ))}
    </div>
    </>
  );
}

export default PostList;
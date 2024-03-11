import BlogPost from './BlogPost';
import blogData from '../data/BlogData';

function Blog() {
  return (
    <div className="blog">
      <h1 className="blog-header blogg ">The Bridal Buzz !</h1>
      {blogData.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Blog;

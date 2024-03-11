// src/components/BlogPost.js
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faShare,
  faComment,
} from '@fortawesome/free-solid-svg-icons';

function BlogPost({ post }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isCommenting, setIsCommenting] = useState(false);
  const [comment, setComment] = useState('');
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleCommentClick = () => {
    setIsCommenting(!isCommenting);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
   
    console.log('Comment submitted:', comment);
    setComment('');
    setIsCommenting(false);
  };

  const handleShareClick = () => {
    setIsShareMenuOpen(!isShareMenuOpen);
  };

  return (
    <div className="blog-post ">
      <h2 className="blog-title">{post.title}</h2>
      <p className="blog-metadata">
        {post.date} | By {post.author}
      </p>
      <p className="blog-content">{post.content}</p>

      {/* Like Button */}
      <button className={`like-button ${isLiked ? 'liked' : ''}`} onClick={handleLikeClick}>
        <FontAwesomeIcon icon={faThumbsUp} /> Like
      </button>

      {/* Comment Button */}
      <button className="comment-button" onClick={handleCommentClick}>
        <FontAwesomeIcon icon={faComment} /> Comment
      </button>

      {/* Comment Section */}
      {isCommenting && (
        <form className="comment-form" onSubmit={handleCommentSubmit}>
          <textarea
            placeholder="Write your comment here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      )}

      {/* Share Button */}
      <button className="share-button" onClick={handleShareClick}>
        <FontAwesomeIcon icon={faShare} /> Share
      </button>

      {/* Share Options */}
      {isShareMenuOpen && (
        <div className="share-options">
      
        </div>
      )}
    </div>
  );
}

BlogPost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogPost;

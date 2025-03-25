import { useEffect, useState } from 'react';
import './Comments.css';
import commentsService from '../../services/comments/commentsFirebase';

function Comment() {
  const [comments, setComments] = useState([]);

  const findAllComments = () => {
    let allComments = []; // Corregido el nombre de la variable
    commentsService.getAllComments()
      .then((res) => {
        res.forEach((d) => {
          const key = d.key;
          const data = d.val();
          allComments.push({
            key: key,
            name: data.name,
            comment: data.comment,
            value: data.value
          });
        });

        setComments([...allComments]); // Corregida la referencia a 'allComments'
      })
      .catch((e) => {
        console.error('Error fetching comments:', e); // Mejor mensaje de error
      });
  };

  useEffect(() => {
    findAllComments();
  }, []);

  return (
    <div className="comments-container"> {/* Corregida la clase CSS */}
      {comments.map((comment, index) => ( // Corregida la referencia a 'comments'
        <div className="comment" key={comment.key || index}> {/* Usar key única */}
          <h3>{comment.name}</h3>
          <p>{comment.comment}</p>
          <p>Rating: {comment.value}</p>
        </div>
      ))}
    </div>
  );
}

export default Comment;
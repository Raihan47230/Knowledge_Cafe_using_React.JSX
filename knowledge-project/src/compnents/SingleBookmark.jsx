
import PropTypes from 'prop-types'

const SingleBookmark = ({btn}) => {
     console.log(btn)
     const{authorName,title}=btn
     return (
          <div className='bg-gradient-to-r from-lime-300 to-lime-900 text-center font-bold rounded-lg py-4 px-4 m-5 text-white'>
               <h2> Author Name : {authorName}</h2>
               <p>Titale : {title}</p>
          </div>
     );
};
SingleBookmark.propTypes = {
 btn:PropTypes.object
}
export default SingleBookmark;


// authorAvatar
// : 
// "https://example.com/avatars/sophia.jpg"
// authorName
// : 
// "Sophia King"
// id
// : 
// "7"
// postDate
// : 
// "2023-08-18"
// readingTime
// : 
// "20 mins"
// tags
// : 
// (3) ['Artificial Intelligence', 'TensorFlow', 'Machine Learning']
// thumbnail
// : 
// "https://i.ibb.co.com/q7tv35d/toy-bricks-table-with-word-my-blog.jpg"
// title
// : 
// "Exploring Artificial Intelligence with TensorFlow"
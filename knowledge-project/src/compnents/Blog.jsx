import PropTypes from 'prop-types';

const Blog = ({alData,hendleBtn}) => {
     console.log(alData)
     
     
     return (
          <div className='mb-10'>
                <img className='rounded-lg' src={alData.thumbnail} alt="" />
               <div className='lg:flex justify-between'>
               <div><h3 className='mt-5 text-2xl'>Author Name : {alData.authorName} </h3>
               <h3>Title : {alData.title} </h3>
               <h3> Time : {alData.postDate}</h3>
               <p>Tag : {alData.tags}</p></div>
               
               <div><p>Reading Time : {alData.readingTime}</p></div>
               <br />
               
               </div>
               <button className='bg-yellow-300 py-3 px-6 rounded-xl mt-4' onClick={()=>hendleBtn(alData)}>Bookmarks</button>
          </div>
     );
};

Blog.propTypes={
     blog: PropTypes.object.isRequired
}
     


export default Blog;






// {id: '2', title: 'Mastering Python for Data Science', thumbnail: 'https://example.com/images/python-thumbnail.jpg', authorName: 'John Smith', authorAvatar: 'https://example.com/avatars/john.jpg', …}
// authorAvatar
// : 
// "https://example.com/avatars/john.jpg"
// authorName
// : 
// "John Smith"
// id
// : 
// "2"
// postDate
// : 
// "2023-09-10"
// readingTime
// : 
// "10 mins"
// tags
// : 
// (3) ['Python', 'Data Science', 'Machine Learning']
// thumbnail
// : 
// "https://example.com/images/python-thumbnail.jpg"
// title
// : 
// "Mastering Python for Data Science"
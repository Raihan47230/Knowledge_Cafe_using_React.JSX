import SingleBookmark from "./SingleBookmark";
import PropTypes from 'prop-types'

const Bookmark = ({btn}) => {
     return (
          <div >
              <h1>Boolmark : {btn.length}</h1> 
              {
               btn.map(data=><SingleBookmark key={data.id}  btn={data}></SingleBookmark>)
              }
          </div>
     );
};
Bookmark.propTypes = {
     btn : PropTypes.object
}
export default Bookmark;



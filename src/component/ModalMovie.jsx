import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ModalMovie({ movies, show, handleClose, addToFavList }) {
  
  function handelSubmit(e){
    e.preventDefault();
    let comment=e.target.comment.value;
    addToFavList(movies,comment);
  }
  
  async function addToFavList(movies,comment){
    const url=`${process.env.REACT_APP_SERVER}/addMovies`;
    const data={
      title : movies.title,
      overview : movies.overview,
      release_date : movies.release_date,
      poster_path : movies.poster_path,
      comment:comment
    };
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
    
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    const data1=await response.json()
    console.log(data1);
  }
  
  // worg code update 
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{movies.id}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p> Release date : {movies.release_date}</p>
      </Modal.Body>
      <Form onSubmit={handelSubmit} style={{ margin: '10px' }}>
        <Form.Label>Add Comment</Form.Label>
        <Form.Control name='comment' type="text" placeholder="Enter comment" />
        <Form.Text className="text-muted">
          We'll never share your comment with anyone else.
        </Form.Text>
        <Button variant="primary" type='submit' onClick={handleClose}>Save changes</Button>
      </Form>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      
      </Modal.Footer>
    </Modal>
  )
}
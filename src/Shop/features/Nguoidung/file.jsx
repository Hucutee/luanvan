import React, {useState} from 'react';
import axios from 'axios';

function Filehinh() {

  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0]); console.log(event);
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    const url = 'c:';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });

  }

  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
          <h1>React File Upload</h1>
          <input type="file" onChange={handleChange}/>
          <button onClick={handleSubmit}>Upload</button>
        </form>
    </div>
  );
}

export default Filehinh;
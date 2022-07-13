import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [click, setClick] = useState(false)
  // useEffect(() => {
  //   const apiData = ['posts/bookmarks/', 'posts/trending/', 'posts/']
  //   //const apiData = ['posts','posts','posts','posts']
  //   if (click === true) {
  //     const promises = apiData.map((apis) => {
  //       return (
  //         // axios.get(`https://jsonplaceholder.typicode.com/${apis}`,)
  //         axios.get(`https://stage-api.nitrx.com/api/v1/${apis}`, { headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYwMjI2NDE0LCJqdGkiOiIxZjk3MjU3MGYxNTI0MDcxOTdkNTcwOGY1OTI2ZmMxZiIsInVzZXJfaWQiOjEwOTd9.Eo_WgnQgp1A_2i5MRz9CqII1EMln0DRZ3zHs8Olq2IM` } })
  //       )
  //     });
  //     Promise.all(promises)
  //       .then((response) => {
  //         //response handling
  //       })
  //       .catch((error) => {
  //         //error handling
  //       });
  //   }
  // })
  

  useEffect(() => {
    axios.get('https://stage-api.nitrx.com/api/v1/posts/', { headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYwMjI2NDE0LCJqdGkiOiIxZjk3MjU3MGYxNTI0MDcxOTdkNTcwOGY1OTI2ZmMxZiIsInVzZXJfaWQiOjEwOTd9.Eo_WgnQgp1A_2i5MRz9CqII1EMln0DRZ3zHs8Olq2IM` } })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      // axios.get('https://stage-api.nitrx.com/api/v1/posts/bookmarks/', { headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYwMjI2NDE0LCJqdGkiOiIxZjk3MjU3MGYxNTI0MDcxOTdkNTcwOGY1OTI2ZmMxZiIsInVzZXJfaWQiOjEwOTd9.Eo_WgnQgp1A_2i5MRz9CqII1EMln0DRZ3zHs8Olq2IM` } })
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });

      axios.get('https://stage-api.nitrx.com/api/v1/posts/trending/', { headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYwMjI2NDE0LCJqdGkiOiIxZjk3MjU3MGYxNTI0MDcxOTdkNTcwOGY1OTI2ZmMxZiIsInVzZXJfaWQiOjEwOTd9.Eo_WgnQgp1A_2i5MRz9CqII1EMln0DRZ3zHs8Olq2IM` } })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },[])
  return (
    <div className="App">
      <button onClick={() => setClick(true)}>
        Api Call
      </button>
    </div>
  );
}
export default App;
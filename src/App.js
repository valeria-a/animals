import { useState } from 'react';
import './App.css';
import Content from './Content/Content';
import SearchForm from './SearchForm/SearchForm';
import {IMG_DATA} from './data'

function App() {

  const [submittedAnimal, setSubmittedAnimal] = useState(null)

  return (
    <>
      <SearchForm setSubmittedAnimal={setSubmittedAnimal}/>
      {submittedAnimal &&
        <Content picturesList={IMG_DATA[submittedAnimal]} />}
    </>
  );
}

export default App;

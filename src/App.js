import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard'



// I put a comment on the first card to make sure I'm using parent/child relationships correct

function App() {
  return (
    <div className="App">
      <PersonCard firstName = {"Jane"} lastName = {"Doe"} age = {45} hairColor = {"Black"}>
        <h4>This person's first!</h4>
      </PersonCard>
      <PersonCard firstName = {"John"} lastName = {"Smith"} age = {88} hairColor = {"Brown"} />
      <PersonCard firstName = {"Millard"} lastName = {"Fillmore"} age = {50} hairColor = {"Brown"} />
      <PersonCard firstName = {"Maria"} lastName = {"Smith"} age = {62} hairColor = {"Brown"} />
    </div>
  );
}

export default App;

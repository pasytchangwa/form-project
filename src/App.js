import React, {useState} from "react";
import text from './data';

function App() {
  let data = text;
  const [paragraph, setParagraph] = useState(0);
  const [presented, setPresented] = useState([])

  const handleChange = (e) => {
    let x = e.target.value;
    setParagraph(x);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let ammount = parseInt(paragraph);

    if (paragraph <= 0) {
      ammount = 1;
    }
    if (paragraph > data.length) {
      ammount = data.length;
    }

    let newData = data.slice(0, ammount);
    setPresented(newData)
    console.log(newData);
  }


  return (
    <main>
      <section className='section-center'>
        <h3>Tired of boring lorem ipsum?</h3>
        <form className='lorem-form' onSubmit={handleSubmit}>
          <label htmlFor='paragraphs'>paragraphs: </label>
          <input
            type='number'
            name='paragraphs'
            id='paragraphs'
            value={paragraph}
            onChange={handleChange}
          />
          <button className='btn' type='submit'>
            Generate
          </button>
        </form>
        <div className='lorem-text'>
          {presented.map((present, index) => {
            return <p key={index}>{present}</p>;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;

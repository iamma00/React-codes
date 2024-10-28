import React ,{useState} from "react";

const quotes = [
    'You have within you, right now, everything you need to deal with whatever the world can throw at you.' ,
    'Character is power.' ,
    'Never be limited by other peoples limited imaginations.',
    'Only a life lived for others is a life worthwhile.',
    'The only impossible journey is the one you never begin.',
    'The best way to predict your future is to create it.',
    'If you fell down yesterday stand up today.',
    'Success is not final, failure is not fatal: It is the courage to continue that counts',
]

function App(){

    const [quote ,setQuote] = useState(quotes[0])

    function randomizeQuote(){
        const randomQuote =  quotes[Math.floor(Math.random()*quotes.length)] 
        setQuote(randomQuote)
    }

    return (
        <div className="App">
            <div>{quote}</div>
            <button onClick={randomizeQuote}>Click Me</button>
        </div>
    )
}

export default App

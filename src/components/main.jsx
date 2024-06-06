import React from "react"
import { useState,useEffect } from "react"
function SpellCheck(){
const [input , setInput] = useState("")
const [suggestedText, setSuggestedText] = useState("");

    const customDictionary = {
        teh: "the",
        wrok: "work",
        fot: "for",
        exampl: "example",
      }

      const keys = Object.keys(customDictionary);
      const values = Object.values(customDictionary);

      const handleInputChange = (e) => {
        setInput(e.target.value);
      };


//       


useEffect(() => {
    const words = input.split(" ").map(word => word.toLowerCase());
    for (const word of words) {
      if (customDictionary[word]) {
        setSuggestedText(customDictionary[word]);
        return;
      }
    }
    setSuggestedText("");
  }, [input, customDictionary]);
return(
    <div>
        <h1>Spell CHeck</h1>
        <textarea 
        onChange={handleInputChange}
        placeholder="Enter text"
        rows={5}
        cols={40}
        />
            
            {suggestedText && (
        <p>
          Did you mean: <strong>{suggestedText}</strong>?
        </p>
            )}
    </div>
)
}
export default SpellCheck

import { useEffect, useState } from "react";

export default function Hello() {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        console.log("User Input:", inputValue);
    }, [inputValue]); 

    return (
        <div>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="enter a value" 
            />
        </div>
    );
}

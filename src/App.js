import { useState } from "react";
import { Comments } from "./components";

function App() {
  const [input, setInput] = useState("");
  return (
    <div className='App'>
      <Comments />
    </div>
  );
}
export default App;

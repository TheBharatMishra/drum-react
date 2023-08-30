// import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <main className="flex flex-row justify-center items-center h-screen border-8 border-purple-950 bg-red-500">
      <div>
        <div className="border-8 p-8 m-4 bg-pink-400 border-purple-900 rounded">
          Q
        </div>
        <div className="border-8 p-8 m-4 bg-pink-400 border-purple-900 rounded">
          A
        </div>
        <div className="border-8 p-8 m-4 bg-pink-400 border-purple-900 rounded">
          Z
        </div>
      </div>
      <div>
        <div className="border-8 p-8 m-4 bg-pink-400 border-purple-900 rounded">
          W
        </div>
        <div
          // onKeyDown={(event: Event) => {
          //   if (event.keyCode === "Q") alert(1);
          // }}
          className="border-8 p-8 m-4 bg-pink-400 border-purple-900 rounded"
        >
          <audio src="../assets/Heater-1.mp3"></audio>S
        </div>
        <div className="border-8 p-8 m-4 bg-pink-400 border-purple-900 rounded">
          X
        </div>
      </div>
      <div>
        <div className="border-8 p-8 m-4 bg-pink-400 border-purple-900 rounded">
          E
        </div>
        <div className="border-8 p-8 m-4 bg-pink-400 border-purple-900 rounded">
          D
        </div>
        <div className="border-8 p-8 m-4 bg-pink-400 border-purple-900 rounded">
          C
        </div>
      </div>
    </main>
  );
}

export default App;

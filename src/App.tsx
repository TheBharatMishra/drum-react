function App() {
  const playin = () => {
    // if (e.key == "41")
    // let toBePlayed: any = document.getElementById("Qel");
    // console.log(document.getElementsByTagName("div")[4].toString());
    document.getElementById("Qel")?.play();
    const dectohex = (decimalnum) => decimalnum.toString(36);
    // const hextodec = (hexnum) => parseInt(hexnum, 16);

    console.log(dectohex(65));
    // console.log(document.getElementById("Qel")?.play());s

    // toBePlayed?.play();
  };
  return (
    <>
      <main className="flex flex-row justify-center items-center h-screen border-8 border-purple-950 bg-red-500">
        <div>
          <div
            onClick={playin}
            className="border-8 p-8 m-4 bg-pink-400 border-purple-900 rounded cursor-grab"
          >
            Q
          </div>
          <div
            id="A"
            className="border-8 p-8 m-4 bg-pink-400 border-purple-900 rounded"
          >
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
          <div className="border-8 p-8 m-4 bg-pink-400 border-purple-900 rounded">
            S
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

          <audio id="Qel" src="src\assets\Heater-1.mp3" />
          <audio id="Wel" src="assets\Heater-2.mp3" />
          <audio id="Eel" src="assets\Heater-3.mp3" />
          <audio id="Ael" src="assets\Heater-4_1.mp3" />
          <audio id="Ael" src="assets\Heater-6.mp3" />
          <audio id="" src="assets\Cev_H2.mp3" />
          <audio src="assets\Cev_H2.mp3" />
        </div>
      </main>
    </>
  );
}

export default App;

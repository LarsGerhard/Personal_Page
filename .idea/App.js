import './App.css';

function App() {
    return (
        <div className="App">
            <Banner/>
            <p className={"App-body"}>
                Here's some text to display!!!
                If I do an indent, does it do anything? Or does it automatically resize the whole thing?
            </p>

        </div>
  );
}

function Banner(){
    return(
        <div className="Desktop-Banner">
            <p className={"Desktop-Banner-Site-Name"}>
                Thaseus Karkabe-Olson
            </p>

            <div className={"Desktop-Banner-Pages"}>
                <p>
                    Home
                </p>

                <p>
                    Active Pre-Class Research
                </p>

            </div>

        </div>
    )
}

export default App;


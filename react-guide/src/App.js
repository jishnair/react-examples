import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    const movies= [
      {id:0, title: "Avengers", overview: "The story of avengers"},
      {id:1, title: "Spiderman", overview: "The stroy of spiderman"}

    ]

    this.state = {
      row: [<p>this is row1</p>, <p>this is row2</p>, <p>this is row3</p>]
    };
  }
  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="images.png" />
              </td>
              <td width="12" />
              <td>
                <h1>MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input placeholder="Enter search term" />
        {this.state.row}
      </div>
    );
  }
}

export default App;

import React from 'react'
import Search from './components/Search';

class App extends React.Component {
  getSearchProps = (word) => {
    console.log(word);
  }
  state = {  }
  render() { 
    return ( 
      <div className="App">
        <Search word={this.getSearchProps} />
      </div>
     );
  }
}
 
export default App;

import './App.css';
import React from 'react';

class ComponenteCiclo extends React.Component { 
  
  componentWillUnmount() {
    alert('El componente se va a desmontar');
  }
 
  render() {
    return <div>
      <h1 className='hola'>Hola Krugers!</h1> 
    </div>;
  }
}
 
class App extends React.Component {
  state = { display: true };
 
  render() {
    let comp;
    if (this.state.display) {
      comp = <ComponenteCiclo />;
    }
    return (
      <div>
        {comp}
        <button className='boton' onClick={()=> this.setState({ display: !this.state.display }) }>
          Componente
        </button>
      </div>
    );
  }
}

export default App;

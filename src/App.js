import React,{Component} from 'react';
import './App.css';
import Header from './components/Header';
import Products from './components/Products';

class App extends Component{
  render(){
    var users=[
      {
        id:1,
        name: 'Dat',
        age: 21
      },
      {
        id: 2,
        name:'Huyen',
        age: 20
      },
      {
        id :3,
        name: 'Su',
        age: 20
      }
    ]
      var element = users.map((users, index)=>{
          return <div key={users.id}>
              <h2>Tên: {users.name}</h2>
              <h3>Tuổi :{users.age}</h3>
            </div>
          
      }
       
      )
    
    return(
      <div>
        <Header />
        <Products/>
        
        <hr />
          {element}
      
        
      </div>
    )
      
  }
};

export default App;

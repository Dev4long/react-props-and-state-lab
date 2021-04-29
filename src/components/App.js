import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

   onChangeType = (e) => {
   this.setState({
     filters:{
       type:e.target.value
     }
   })
    
    
    // this.setState({type:this.setState.filters.type})

  };

  
  onFindPetsClick = () => {
    let filter = this.state.filters.type
    console.log(filter)
    if(filter === 'all'){
      fetch("/api/pets")
      .then(res => res.json())
      .then(data => 
        this.setState({
         pets:data
        })
      )
    } else{
      fetch(`/api/pets?type=${filter}`)
      .then(res => res.json())
      .then(data => 
        this.setState({
         pets:data
        })
      )
    }
  }
  
  onAdoptPet = (id) => {
    if(id === this.state.pets.id){
      this.state.pets.isAdopted = true
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType = {this.onChangeType} onFindPetsClick = {this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onFindPetsClick={this.onFindPetsClick} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

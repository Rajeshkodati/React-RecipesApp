import React from 'react';
import './App.css';
import {recipes} from "./source/tempList"
import RecipeList from "./components/recipeList";
import RecipeDetails from "./components/RecipeDetails";
import { recipe } from './source/tempDetails';
class App extends React.Component{
    state = {
      recipes :[],
      url:"https://www.food2fork.com/api/search?key=67619c600ee2bb47d153664c7e5b1e27 ",
      base_url:"https://www.food2fork.com/api/search?key=67619c600ee2bb47d153664c7e5b1e27",
      details_id:35382,
      pageIndex:1,
      search:'',
      query:"&q=",
      error: ''
    }
    async getRecipes(){
      try{
        const data = await fetch(this.state.url);
        const recipeData = await data.json();
        if(recipeData.recipes.length === 0){
          this.setState({
            error: "Sorry but your searchItem is not hear"
          })
        }else{
          this.setState(() =>{
              return {recipes:recipeData.recipes}
          })
        }

        this.setState({
          recipes: recipeData.recipes
        });
      }catch(error){
          alert(error);
      }
    }
    componentDidMount(){
     this.getRecipes();
    // this.setState({recipes : recipes})
    }

    displayPage = index => {
      switch(index){
        default:
        case 1:
          return <RecipeList recipes={this.state.recipes}
                  handleDetails={this.handleDetails}
                  value={this.state.search}
                  handleChange={this.handelSearch}
                  handleSubmit={this.handleSubmit}
                  error={this.state.error}/>;
        case 0:
          return  <RecipeDetails id={this.state.details_id} handleIndex={this.handleIndex}/>;
      }
    }
    handleIndex = index => {
      this.setState({pageIndex: index})
    }
     
    handleDetails =  (index, id) => {
      this.setState({
        details_id: id,
        pageIndex: index

      })
    }

    handelSearch = (e) => {
       this.setState({
         search:e.target.value
       })
    }
    
    handleSubmit = (e) => {
      e.preventDefault()
      const {query,search,base_url} = this.state;
      this.setState(() => {
        return {url:`${base_url}${query}${search}`, search:""}
      }, () => {
        this.getRecipes()
      })
    }
    render(){
       const {recipes} = this.state;
      return (
        <div className="App">
          {this.displayPage(this.state.pageIndex)}
        </div>
      );
    }
  
}

export default App;

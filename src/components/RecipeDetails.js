import React from "react";
import {recipe} from "../source/tempDetails";

class RecipeDetails extends React.Component {
    // state = { 
    //     recipe: recipe,
    //     url:`https://www.food2fork.com/api/get?key=602da1bfe0f05d0f1ef18bc7ad1effad&rId=${this.props.id}`
    // }

    // async componentDidMount(){
    //     try{
    //         const data = await fetch(this.state.url);
    //         const recipeData = await data.json();
    //         this.setState({
    //             recipes: recipeData.recipes
    //         }, () => console.log(this.state.recipes, "recipes"));
    //         }catch(error){
    //             alert(error);
    //     }
    //    // this.setState({recipe: recipe});
    // }

    state ={
        recipe:recipe
    }
    async componentDidMount(){
        const id = this.props.id;
        const url = `https://www.food2fork.com/api/get?key=67619c600ee2bb47d153664c7e5b1e27&rId=${id}`
        try{
            const data = await fetch(url);
            const recipeData = await data.json();
            this.setState(() => {
                return {recipes: recipeData.recipes}
            });
        }catch(error){
            alert(error);
        }
    }
    render() { 
        const {
            image_url,
            publisher,
            ingredients,
            publisher_url,
            source_url,
            title
        } = this.state.recipe
        const {handleIndex} = this.props
        return ( 
            <>
              <div className="container">
                <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <button className="btn btn-warning  text-capitalize mb-5"
                    onClick={() => handleIndex(1)}>
                        back to recipe list
                    </button>
                    <img src={image_url} className="d-block w-100" alt="recipe"/>
                </div>
                <div className="col-10 mx-auto col-md-6 my-3">
                   <h6 className='text-uppercase'>{title}</h6>
                   <h6 className="text-warning text-slanted text-capitalize">
                        Provided By {publisher}
                    </h6>
                    <a  href={publisher_url} 
                        className="btn btn-primary mt-2   text-capitalize"
                        target="_blank"
                        rel="noopener noreferrer">
                            publisher webpage
                    </a>
                    <a  href={source_url} 
                        className="btn btn-success mt-2 mx-3  text-capitalize"
                        target="_blank"
                        rel="noopener noreferrer">
                        recipe url
                    </a>
                    <ul className="list-group mt-4">
                        <h2 className="mt-3 mb-4">Ingredients</h2>
                        {
                           ingredients.map((item, index) => {
                              return(
                                  <li 
                                  key={index}
                                   className="list-group-item text-slated"
                                  >{item}
                                  </li>
                              )
                           })
                        }
                    </ul> 
                </div>
                </div>
              </div>
            </>
         );
    }
}
 
export default RecipeDetails;
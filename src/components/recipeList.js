import React from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";
class RecipeList extends React.Component {
    state = {  }
    render() { 
        const {recipes, handleDetails, value, handleChange, handleSubmit,error} = this.props;
        return ( 
            <>
             <RecipeSearch value={value} handleChange={handleChange} handleSubmit={handleSubmit}/>
              <div className="container my-5" >
                  <div className="row">
                      <div className="col-10, mx-auto col-md-6 text-center
                      text-uppercase mb3">
                        <h1>Recipes List</h1>
                      </div>
                  </div>
                  <div className="row">
                      {
                          error ? <h1>{error}</h1> :(
                            
                                recipes && recipes.length && recipes.map(recipe => {
                                  return(
                                      <Recipe 
                                      key={recipe.recipe_id}
                                      recipe={recipe}
                                      handleDetails ={() => handleDetails(0, recipe.recipe_id)}
                                      />
                                  )
                              })
                          )
                      }
                  

                  </div>
              </div>
            </>
         );
    }
}
 
export default RecipeList;
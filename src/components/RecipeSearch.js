import React from "react";

class RecipeSearch extends React.Component {
    state = {  }
    render() { 
        const {value, handleChange, handleSubmit} = this.props
        return ( 
            <div className="container">
                <div className="row">
                   <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                       <h1 className="text-slated text-capitalize">
                           search for recipe with {" "}<strong className="text-danger">
                            Food2Fork
                           </strong>
                       </h1>
                       <form className="mt-4" onSubmit={handleSubmit}>
                        <label htmlFor="search" className="text-capitalize">
                           type recipe seperated by comma
                        </label>
                        <div className="input-group">
                            <input name="search" 
                            type="text"
                            placeholder="chicken,onion"
                            className="form-control"
                            value={value}
                            onChange={handleChange}
                        />
                        <div className="input-group-append">
                          <button type="submit"
                           className="input-group-text bg-primary text-white"
                           >
                              <i className="fas fa-search"></i>
                          </button>    
                        </div>
                        </div>
                       </form>
                   </div> 
                </div>
            </div>
         );
    }
}
 
export default RecipeSearch;
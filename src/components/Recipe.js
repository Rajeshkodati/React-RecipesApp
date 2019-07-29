import React from "react";
class Recipe extends React.Component {
    state = {  }
    render() { 
        const {
            image_url,
            title,
            recipe_id,
            publisher,
            source_url,
            recipe
        } = this.props.recipe;

        const {handleDetails} = this.props;
        return ( 
            <>
                <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                    <div className="card">
                       <img alt="recipe" 
                       style={{height:'14rem'}}
                       src={image_url}
                       className="img-card-top"/>
                       <div className="card-body text-capitalize">
                           <h6>{title}</h6>
                           <h6 className="text-warning text-slanted">
                              Provided By {publisher}
                           </h6>
                       </div>
                       <div className="card-footer">
                        <button className="btn btn-primary text-capitalize" onClick={handleDetails}>
                            details
                        </button>
                        <a  href={source_url} 
                        className="btn btn-success mx-2 text-capitalize"
                        target="_blank"
                        rel="noopener noreferrer">
                            recipe url
                        </a>
                       </div>
                    </div>
                </div>

            </>
         );
    }
}
 
export default Recipe;
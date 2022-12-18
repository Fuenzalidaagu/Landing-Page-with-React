import React from "react";
import PropTypes from 'prop-types';


export function Jumbotron(props){
    return (
        <div className="container-fluid  d-inline  text-start">
            <div className="jumbotron m-3 bg-light p-5">
                <h1 class="display-4">{props.title}</h1>
                <p class="lead">
                      {props.text}
                </p>
                <button class="btn btn-primary">
					{props.button}
				</button>
            </div>
        </div>
    )
}

Jumbotron.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    button: PropTypes.string
  };
  
Jumbotron.defaultProps = {
    title: 'A warm welcome',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate neque quas quia accusantium totam. Natus culpa ipsum eaque.',
    button: 'Call to action!'
  };

export default Jumbotron;



import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types"; 

export function Card(props) {
	return (
		<div className="col-3 card-deck">
			<div className="card m-3">
				<img
					className="card-img-top"
					src={props.img}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">
						{props.text} 
					</p>
				</div>
				<div className="card-footer text-center">
					<button type="button" className="btn btn-primary">
						{props.button}
					</button>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    button: PropTypes.string,
	img: PropTypes.string
  };
  
Card.defaultProps = {
    title: 'Card title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    button: 'Click me for more!',
	img: rigoImage
  };

export default Card;
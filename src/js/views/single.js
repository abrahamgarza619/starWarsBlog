import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export function Single({props}) {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params.id)
	console.log(store.people[params.id]);
	const person = store.people[params.id];
	return (
		<div className="jumbotron">
			<h1 className="display-4">{person.name}</h1>
			<hr className="my-4" />
<			Link to="/">
			<span className="btn btn-primary btn-lg" href="#" role="button">
				Back home
			</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};

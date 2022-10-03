import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "./Dropdown";
import { Context } from "../store/appContext";
import { func } from "prop-types";

export const Navbar = () => {
	const store = useContext(Context);
	const favorite = store.store.favorite;
	console.log(favorite ==- null)
	const placeholder = (
		<a className="dropdown-item" href="#nogo">
			Add favorites
		</a>
	)
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">Star Wars</span>
      </Link>
      <div className="ml-auto">
	  	<Dropdown count={favorite.length}>
			{ favorite ==- null ? placeholder : favorite.map((elm) => {
				return (
					<a className="dropdown-item" href="#nogo">
						{elm.name}
				  	</a>
				)
			})}
		</Dropdown>
      </div>
    </nav>
  );
};

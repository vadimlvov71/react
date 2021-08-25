import axios from "axios";
//import React from "react";
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import goods from './Goods';
/////
const baseURL = "/api/categories";

export default function Categories() {
	const history = useHistory();
	const [categories, setCategory] = useState(null);
	const [count, setCount] = useState(0);
	////////
	const handleRoute = (cat_translit) =>{ 
		//console.log("cat_translit" + cat_translit);
		history.push("?cat=" + cat_translit);
	  }
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
		setCategory(response.data);
    });
    
   
  }, []);

  if (!categories) return null;
  /*function setArgument(cat_translit){
	  goods.getgoods(cat_translit);
	  console.log("cat_translit" + cat_translit);
  }*/
	
  return (
    <div>
	<div className="card">
		<div className="card-heading">
			<a data-toggle="collapse" data-target="#collapseOne">Categories</a>
		</div>
		<div id="collapseOne" className="collapse show" data-parent="#accordionExample">
			<div className="card-body">
				<div className="shop__sidebar__categories"><p>Вы кликнули {count} раз(а)</p>
					<ul className="nice-scroll">
						{ categories.map(category =>
							<li key={category.id}><a onClick={() => handleRoute(category.cat_translit)} >{category.name}({category.total}) </a></li>
						)}
					</ul>
				</div>
			</div>
		</div>
	</div>		
    </div>
  );
}


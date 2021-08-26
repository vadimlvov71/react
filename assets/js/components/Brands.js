import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
const baseURL = "/api/brands";

export default function Brands() {
	const history = useHistory();
	const [brands, setBrand] = React.useState(null);
	////////
	const handleRoute = (brand_url) =>{ 
		history.push("?brand=" + brand_url);
	}
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
		setBrand(response.data);
    });
  }, []);

  if (!brands) return null;

  return (
    <div>
	<div className="card">
		<div className="card-heading">
			<a data-toggle="collapse" data-target="#collapseOne">Brands</a>
		</div>
		<div id="collapseOne" className="collapse show" data-parent="#accordionExample">
			<div className="card-body">
				<div className="shop__sidebar__categories">
					<ul className="nice-scroll">
						{ brands.map(brand =>
							<li key={brand.id}><a onClick={() => handleRoute(brand.url)}>{brand.name} {brand.url}</a></li>
						)}
					</ul>
				</div>
			</div>
		</div>
	</div>		
    </div>
  );
}


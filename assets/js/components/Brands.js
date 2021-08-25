import axios from "axios";
import React from "react";

const baseURL = "/api/brands";

export default function Brands() {
  const [brands, setBrand] = React.useState(null);

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
							<li key={brand.id}><a href=''>{brand.name}</a></li>
						)}
					</ul>
				</div>
			</div>
		</div>
	</div>		
    </div>
  );
}


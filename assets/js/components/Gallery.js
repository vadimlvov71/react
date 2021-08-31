import React, { useState } from "react"
import axios from "axios";
const baseURL = "/api/gallery/1";
export default function Gallery({item}) {
    const [gallery, setGallery] = useState(null);
    
	////////
	
	React.useEffect(() => {
		axios.get(baseURL).then((response) => {
			setGallery(response.data);
		});
	}, []);

    if (!gallery) return null;
    return (
        <div className="row">
        <div className="col-lg-3 col-md-3">
            <ul className="nav nav-tabs" role="tablist">
                {gallery.map(galleryItem =>
                    <li key={galleryItem.id}>{galleryItem.name}</li>
                )}
            </ul>
        </div>
        <div className="col-lg-6 col-md-9">
            <div className="tab-content">
                <div className="tab-pane" id="tabs-1" role="tabpanel">
                       
                        <div className="product__details__pic__item">
                            <img src={window.location.origin + `/img/${item.img}`} alt="" />
                        </div>
                    </div>
                    <div className="tab-pane" id="tabs-2" role="tabpanel">
                        <div className="product__details__pic__item">
                            
                        </div>
                    </div>
                    <div className="tab-pane active" id="tabs-3" role="tabpanel">
                        <div className="product__details__pic__item">
                            <img src={window.location.origin + `/img/${item.img}`} alt="" />
                        </div>
                    </div>
                    <div className="tab-pane" id="tabs-4" role="tabpanel">
                        <div className="product__details__pic__item">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
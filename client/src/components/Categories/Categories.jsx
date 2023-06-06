import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://img.faballey.com/images/Product/ILG00019Z/d3.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/product/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/908934/pexels-photo-908934.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <button>
            <Link className="link" to="/product/1">
              Sale
            </Link>
          </button>
        </div>
      </div>

      <div className="col">
        <div className="row">
          <img
            src="https://4.bp.blogspot.com/-nzGWskFm-KY/WmmTeyu1ToI/AAAAAAAAGDA/8Qy5fZKYKlcuapHlferYvgP0QNS_ZOgbgCLcBGAs/s1600/Indian-Pant-Style-Dress-Designs-2018-for-Women-2.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/product/1">
              Sale
            </Link>
          </button>
        </div>
      </div>

      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://assets.ajio.com/medias/sys_master/root/20220617/4ASV/62ac820eaeb26921af36258b/-473Wx593H-464497062-pink-MODEL.jpg"
                alt=""
              />
              <button>
                <Link className="link" to="/product/1">
                  Sale
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images-static.nykaa.com/media/catalog/product/d/c/dc84615twentydrsdrs2312.jpg"
                alt=""
              />
              <button>
                <Link className="link" to="/product/1">
                  Sale
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://www.brides.com/thmb/nheGoxaMXYs5-pFP3A8nZQr7MHU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Wedding_Dress_Styles-677cd9661cff41968ffab34741e65054.png"
            alt=""
          />
          <button>
            <Link className="link" to="/product/1">
              Sale
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;

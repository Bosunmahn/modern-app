import { google, slack, atlassian, dropbox, shopify } from "./import";
import "./brand.css";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="google" />
      </div>
      <div>
        <img src={atlassian} alt="google" />
      </div>
      <div>
        <img src={dropbox} alt="google" />
      </div>
      <div>
        <img src={shopify} alt="google" />
      </div>
   
    </div>
  );
};
export default Brand;

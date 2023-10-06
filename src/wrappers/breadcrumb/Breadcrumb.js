import PropTypes from "prop-types";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";

const BreadcrumbWrap = ({pages}) => {
  return (
    <div className="breadcrumb-area bg-light" style={{paddingTop:"100px",paddingBottom:"30px"}}>
      <div className="container">
        <Breadcrumb>
            {pages?.map(({ path, label }, i) => i !== pages.length - 1 ? (
                <Breadcrumb.Item key={label} linkProps={{to: path}} linkAs={Link}>
                  {label}
                </Breadcrumb.Item>
            ) : (                
              <Breadcrumb.Item key={label} active>
                {label}
              </Breadcrumb.Item>
            ))}
        </Breadcrumb>
      </div>
    </div>
  );
};

BreadcrumbWrap.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  })).isRequired
}

export default BreadcrumbWrap;

import React from 'react';
import { Link } from 'react-router-dom';


const HeaderItem = ({
  label,
  linkTo,
}) => (
  <Link
    to={linkTo}
    className="item"
  >
    {label}
  </Link>
)

export default HeaderItem;

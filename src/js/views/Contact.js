import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import { ContactCard } from '../component/ContactCard';

import "../../styles/home.css";

export const Contact = () => {

  const {store, actions} = useContext(Context)

  return (
    <>
    <div className="container mt-5">
      <div>
        <Link to={"/add"}>
        <button type="button" class="btn btn-outline-success text-light"><i class="fa-solid fa-address-book">+ Add </i></button>
        </Link>
      </div>
      <div> <ContactCard/> </div>
    </div>
    </>
  )
}


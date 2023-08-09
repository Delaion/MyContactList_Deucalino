import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';

// useNavigate Hook to acces react router and navigate
import { Link, useParams, useNavigate } from 'react-router-dom';


export const EditContact = () => {

    const { store, actions } = useContext(Context)
    const { id } = useParams()
    const navigate = useNavigate()

    // Update state of edited contact
    // Get by id
    const [editedContact, setEditedContact] = useState({
        avatarURL: store.contacts[id - 1].avatarURL,
        name: store.contacts[id - 1].name,
        surname: store.contacts[id - 1].surname,
        email: store.contacts[id - 1].email,
        phone: store.contacts[id - 1].phone,
        address: store.contacts[id - 1].address,
    })


    // Add edited contact to list
    const handleSubmit = (e) => {
        e.preventDefault();
        actions.editContact(parseInt(id), editedContact);
        (navigate("/")); // returns to contact list
    }


    return (
        <>
            <div className='container mt-5 mb-1'>
                <form onSubmit={handleSubmit}>

                    <div className='mb-3'>
                        <h2 className='formHeader mt-1'>Edit contact</h2>
                    </div>
                    <div className="input-group mb-3">
                    <label className="form-label">Profile Image</label>
                    <input name="img" type="url" className="form-control bg-dark bg-opacity-70 text-light" placeholder='Type the URL between " " please.' value={editedContact.avatarURL} onChange={(e) => setEditedContact({ ...editedContact, avatarURL: e.target.value })} required ></input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Full name</label>
                       
                    </div>
                   
                    <div className="input-group mb-3">
                          <input name="name" type="text" class="form-control" placeholder='Type contact first name' value={editedContact.name} onChange={(e) => setEditedContact({ ...editedContact, name: e.target.value })} ></input>
                             <span className="input-group-text">&</span>
                          <input name="name" type="text" class="form-control" placeholder='Type contact last name' value={editedContact.surname} onChange={(e) => setEditedContact({ ...editedContact, surname: e.target.value })} ></input>
                    </div> 
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input name="email" type="email" class="form-control" placeholder='user@email.com' value={editedContact.email} onChange={(e) => setEditedContact({ ...editedContact, email: e.target.value })} ></input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Phone number</label>
                        <input name="phone" type="text" class="form-control" placeholder='5555-5555' value={editedContact.phone} onChange={(e) => setEditedContact({ ...editedContact, phone: e.target.value })} ></input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input name="address" type="text" class="form-control" placeholder='Street, City, Country.' value={editedContact.address} onChange={(e) => setEditedContact({ ...editedContact, address: e.target.value })}></input>
                    </div>

                    <Link to="/">
                        <button type="submit" class="formCancelButton btn"><i class="fa-solid fa-file-signature">To list</i></button>
                    </Link>


                    <button type="submit" class="formAddButton btn"><i class="fa-sharp fa-solid fa-floppy-disk">Save </i></button>

                </form>
            </div>
        </>
    )
}


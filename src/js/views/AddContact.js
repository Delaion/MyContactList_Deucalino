import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';


export const AddContact = () => {

    // Retrieve actions from store
    const { store, actions } = useContext(Context)

    // Update "contacts" objetcts with new entries
    const [newContact, setNewContact] = useState({
        avatarURL:"",
        name: "",
        surname:"",
        email: "",
        phone: "",
        address: "",
    })


    // Add contact (handle submit)
    const handleSubmit = (e) => {
        // Prevent refreshing after submit
        e.preventDefault();
        actions.checkFormFields(newContact);

        
        // Clear input fields after submit
        setNewContact({
            avatarURL:"",
            name: "",
            surname:"",
            email: "",
            phone: "",
            address: "",
        })

    }

    return (
        <>
            <div className='container mt-5 mb-1 gb-sexondary'>
                 <form onSubmit={handleSubmit}>

                    <div className='mb-3'>
                        <h2 className='formHeader mt-1'>Add a dude!...Duda!...duda...!</h2>
                    </div>
                    <div className="input-group mb-3">
                    <label className="form-label">Profile Image</label>
                    <input name="email" type="url" className="form-control bg-dark bg-opacity-70 text-light" placeholder='Type the URL between " " please.' value={newContact.avatarURL} onChange={(e) => setNewContact({...newContact, avatarURL: e.target.value})} required ></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Full name</label>
                        <div className="input-group mb-3">
                          <input name="name" type="text" className="form-control bg-dark bg-opacity-70 text-light" placeholder='Type contact first name' value={newContact.name} onChange={(e) => setNewContact({...newContact, name: e.target.value})} required></input>
                             <span className="input-group-text">&</span>
                          <input type="text" className="form-control bg-dark bg-opacity-70 text-light" placeholder=" Last name" value={newContact.surname} onChange={(e) => setNewContact({...newContact, surname: e.target.value})} required aria-label="Server"/>
                        </div> 
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input name="email" type="email" className="form-control bg-dark bg-opacity-70 text-light" placeholder='woopygoldberg@notsougly.com' value={newContact.email} onChange={(e) => setNewContact({...newContact, email: e.target.value})} required ></input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Phone number</label>
                        <input name="phone" type="text" className="form-control bg-dark bg-opacity-70 text-light" placeholder='936 84 89 336' value={newContact.phone} onChange={(e) => setNewContact({...newContact, phone: e.target.value})} required></input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input name="address" type="text" className="form-control bg-dark bg-opacity-70 text-light" placeholder='Where  is da place to be you...?' value={newContact.address} onChange={(e) => setNewContact({...newContact, address: e.target.value}) } required></input>
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


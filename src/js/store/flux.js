const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: [
				{
					id: 1,
					avatarURL:"https://static.wikia.nocookie.net/rap/images/e/e5/Biggie_Smalls_Mural_Little_Haiti.jpg/revision/latest?cb=20190412211232&path-prefix=es",
					name: "Notorious",
					surname:" Big King.",
					email: "king@gmail.com",
					phone: "+1 122 46 22 11",
					address: "Gangsters Paradise and Hustlers,1"
				},
				{
					id :2,
					avatarURL:"https://upload.wikimedia.org/wikipedia/commons/2/29/Miguel_de_Unamuno_Meurisse_1925.jpg",
					name: "Miguel",
					surname:" de Unamuno y Jugo",
					email: "daniel@email.com",
					phone: "000 000 003",
					address: "Av. Ni con Hunos ni con Hotros,sn"
				},
				{
					id :3,
					avatarURL:"https://media.licdn.com/dms/image/C4D03AQHfvoLy_Q0kUg/profile-displayphoto-shrink_800_800/0/1623748819801?e=1697068800&v=beta&t=4Uc55-dIYL45KpdMKptPUH7yp6YPZCt3pdlOv6TmHDg",
					name: "Deucalino Muvuma",
					surname:" Muvuma",
					email: "muvuma@email.com",
					phone: "61144423",
					address: "Lost in React Context Street,1"
				},
				{
					id :4,
					avatarURL:"",
					name: "4Geeks",
					surname:" Academy",
					email: "4geeksacademy@4geeks.com",
					phone: "91 234 51 22",
					address: "Slapping Deucalino Street,1"
				}
			],

			contactDeleted: null,
			showModal: false,
		},

		actions: {

				// Adding new contact to the list
				addContact: (contact) =>{
					// Get from store
					let contactList = getStore().contacts;
					const newContact = {id: contactList.length +1, ...contact};
					// Adds one more contact to the list
					setStore({ contacts: [...contactList, newContact]});
				},

				// Check empty fields in input form when adding
				checkFormFields: (newContact) =>{
					const { avatarURL, name,surname, email, phone, address} = newContact
					if (avatarURL && name && surname && email && phone && address) {
						getActions().addContact(newContact);
					}
				},

				// Editing contact from the list
				editContact: (id, editedContact) =>{
					// Get from store
					let contactList = getStore().contacts;
					// Find contact index and update
					const contactIndex = contactList.findIndex(contact => contact.id === id);
					if (contactIndex !== -1){
						const editedContacts = [...contactList];
						editedContacts[contactIndex] = {id, ...editedContact};
						setStore({ contacts: editedContacts});
					}
				},


				// Deleting contact
				deleteContact: (contact) =>{
					// Get from store
					let contactList = getStore().contacts;
					// Keep all except current id
					setStore({contacts: contactList.filter((item) => item !== contact)})
					getActions().closeDeleteModal();
				},

				

				

				
				

















			// ACTIONS BELOW ARE FOR BOILERPLATE DEMO
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

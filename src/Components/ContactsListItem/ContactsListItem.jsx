const ContactsListItem = ({contacts,filterItem}) => {
    {if(filterItem !==""){
    contacts.filter(el=>{
        console.log(el.name);
        return el.name
    }
         )
    }}
    return ( <>{contacts.map(contact=><li key={contact.id}><p>{contact.name}:{contact.number}</p></li>)}</> );
}

export default ContactsListItem;

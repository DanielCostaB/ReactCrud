import React, { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import firebaseDb from "../firebase.js";

const Contacts = () => {

  var [contactObjects,setContactObjects] = useState({})

  useEffect(()=>{
    firebaseDb.child('contacts').on('value',snapshot=>{
      if (snapshot.val() != null)
      setContactObjects({
        ...snapshot.val()
      })
    })
  },[])

  const addOrEdit = obj =>{
    firebaseDb.child('contacts').push(
      obj,
      err => {
        if (err)
          console.log(err)
      }
    )
  }

    return (
      <>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4 text-center">Contactss Register</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-5">
          <ContactForm addOrEdit={addOrEdit}/>
        </div>
        <div className="col-md-7">
          <div>list of contacts</div>
        </div>
      </div>
      </>
    );
  }

export default Contacts;
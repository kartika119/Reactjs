// import React from 'react';
import axios from 'axios';

function Apicall(){
    axios.get('www.example.com/api/get/1').then(response=>{
        console.log("hello from api");
        console.log(response);
    })
}

Apicall();

export default Apicall;
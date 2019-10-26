import React, { Component } from 'react';
import {render} from "react-dom";
import Form from "react-jsonschema-form";
import axios from 'axios';

const apiEndPoint = "https://localhost:3000";

const invokeAjaxCall = async ({formData}) => {
    console.log({formData});
    //const {data: post} = await axios.post(apiEndPoint, form);
}


const schema = require("../json_forms/rating.json");



class Review extends Component {
    render(){
        return(<Form schema = {schema}
        onSubmit = {invokeAjaxCall}/>);
    };
}
 
export default Review;
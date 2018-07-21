import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
axios.defaults.baseURL='http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization']='AUTH TOKEN';
axios.defaults.headers.post['Content-Type']='Application/Json';
axios.interceptors.request.use(request=>{
console.log(request);
//Edit Config file
return request;
},error=>{

    console.log(error);
});
axios.interceptors.response.use(response=>{
    console.log(response);
    //Edit Config file
    return response;
    },error=>{
    
        console.log(error);
    })

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();

/**
 * EasyHTTP Libray
 * Library for making HTTP reqests
 *
 * @version 3.0.0
 * @author George Grekis
 * @license MIT
 * 
 */


// const { resolve, reject } = require("q");

class EassyHTTP {
    // //  Make an HTTP GET Request
    async get(url) {
        const response = await fetch(url);

        const resData = await response.json();
        return resData;
    }

    // Make an HTTP POST Request
    async post(url, data) {

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;


    }


    // Make an HTTP Put Request 
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData = await response.json();
        return resData;

    }


    // Make an HTTP Delete Request 
    async delete(url) {
        const responce = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const resData = await 'Resource Deleted...';
        return resData;

    }


}



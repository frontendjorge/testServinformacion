import React, { Component } from 'react';
import { url_base_service } from "./constans/api_url";

class Data extends Component {
  
    constructor() {
        super();
        this.handleUpdateClick = this.handleUpdateClick.bind(this);
      }
    
    componentDidMount(){
        this.handleUpdateClick();
        
    }
    
      handleUpdateClick = () => {  
    
        const api_service =  url_base_service;
    
        fetch(api_service).then( resolve => {
            return resolve.json();
        }).then( data => {
            this.setState(
                {
                    data: data
                }
            );
    
            
            console.log(data);
            
            var dataTable = data.map(function(dats) {
                return "<tr><td>" + dats.id + "</td><td>" + dats.firstName + "</td><td>" + dats.lastName + "</td></tr>";
              })
              .join("");
            
            document.getElementById('resultData').insertAdjacentHTML('beforebegin', dataTable);

            

        });
        
    };
   
     render() {
       
   
       return (
         <div>

             

             <table id="example" className="table table-striped table-bordered col-lg-12 col-md-12 col-xs-12">
        <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                
            </tr>
        </thead>
        <tbody id="resultData">
           
            
        </tbody>
        <tfoot>
            <tr>
                <th>ID</th>
                <th>Firts Name</th>
                <th>Last Name</th>
                
            </tr>
        </tfoot>
    </table>
         </div>  
         
       );
     }
   }
   
   export default Data;
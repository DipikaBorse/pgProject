import React from 'react'
import { Card } from "react-bootstrap";
import "./Resources.css"

export const Resources = () => {
  return (
   < div className='resources'>
    <nav>
        
   
   <ul className='tags'> 
    <li><a href="Resources">Articles</a></li>
    <li> <a href="Visteblogs">Blog Post</a></li>
    <li>   <a href="Vistpod">PodCast</a></li>
    <li>   <a href="Book">Book</a></li>
   
 
    

   </ul>   
   </nav>
   <hr></hr>
   <div>
<div className='art'>

   <Card >
     <Card.Body  style={{ width: '25rem' }}>
          <Card.Title> <a href="First">12 Resources for Hispanic Entrepreneurs</a></Card.Title>
          <Card.Text>
          <img className='first-img' src="/articles/800px-Man_talking_with_female_salesperson_in_a_car_showroom_by_senivpetro.jpg" alt="" /> 
          <hr></hr>
        
     
          </Card.Text>
          </Card.Body>
         </Card>

         <Card className='art2'>
     <Card.Body  style={{ width: '25rem' }}>
          <Card.Title><a href="Second">7 Ways to Protect Your Small Business from Risk </a></Card.Title>
          <Card.Text>

              <img className='first-img' src="/articles/second.jpg" alt="" />
          
         
          </Card.Text>
          </Card.Body>
         </Card>

         <Card className='art2'>
     <Card.Body  style={{ width: '25rem' }}>
          <Card.Title><a href="Third">Opportunities and Obstacles for Rural Entrepreneurs</a></Card.Title>
          <Card.Text>
          <img className='first-img' src="/articles/third.jpg" alt="" />
          
          </Card.Text>
          </Card.Body>
         </Card>
         </div>
   
       <div className='art'>
      

<Card >
  <Card.Body  style={{ width: '25rem' }}>
       <Card.Title> <a href="Fourth">Top Five Reasons why Entrepreneurs Fail</a></Card.Title>
       <Card.Text>
       <img className='first-img' src="/articles/factors-that-cause-business-failures.jpg" alt="" /> 
       
     
  
       </Card.Text>
       </Card.Body>
      </Card>
{/* 
 <Card className='art2' >
  <Card.Body  style={{ width: '25rem' }}>
       <Card.Title><a href="Fifth">Being Your Own Boss Can Pay Off, but Not Always with Big Pay</a></Card.Title>
       <Card.Text>

           <img className='first-img' src="/articles/resize.jpg" alt="" />
       
      
       </Card.Text>
       </Card.Body>
      </Card> */}
   

       </div>
       
         </div>
      
         </div>
      


  );
};
export default Resources;
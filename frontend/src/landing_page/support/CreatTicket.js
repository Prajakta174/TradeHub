import React from 'react';
function CreatTicket() {
    return ( 
             <div className='container'>
                <div className='row p-5 mt-5 mb-5'>
                    <h1 className='fs-2'>To create a ticket, select a relevant topic </h1>
                    <div className='col-md-4 col-sm-12 mt-5 mb-5'>
                        <h4 className=''>
                           <i class="fa fa-plus-circle" aria-hidden="true"></i> Accounting Opening
                        </h4>
                        
                        <ul>
                     <li className=' mt-5'> <a href="#"  style={{textDecoration:"none",lineHeight:"2.5"}}>Resident individual  </a> </li>   
                     <li >  <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}} >Minor  </a> </li>  
                      
                     <li > <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Non Resident Indian (NRI)  </a>   </li> 
                     <li >  <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Company, Partnership, HUF and LLP  </a> </li>  
                     <li >  <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}} > Glossary  </a>  </li>
                      </ul>
                      
                    </div>

                    <div className='col-md-4 col-sm-12 mt-5 mb-5'>
                        <h4 className=''>
                           <i class="fa fa-user-circle" aria-hidden="true"></i> Your Zerodha Account 
                        </h4>
                        
                        <ul>
                     <li className=' mt-5'> <a href="#"  style={{textDecoration:"none",lineHeight:"2.5"}}>Your Profile </a> </li>   
                     <li >  <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}} >Account modification</a> </li>  
                      
                     <li > <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Nomination</a>   </li> 
                     <li >  <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Client Master Report (CMR) and Depository Participant (DP) </a> </li>  
                     <li >  <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}} >Transfer and conversion of securities</a>  </li>
                      </ul>
                      
                    </div>

                    <div className='col-md-4 col-sm-12 mt-5 mb-5'>
                        <h4 className=''>
                           <i class="fa fa-bar-chart" aria-hidden="true"></i> Kite
                        </h4>
                        
                        <ul>
                     <li className=' mt-5'> <a href="#"  style={{textDecoration:"none",lineHeight:"2.5"}}>IPO</a> </li>   
                     <li >  <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}} >Trading FAQs</a> </li>  
                      
                     <li > <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}></a>Margin Trading Facility (MTF) and Margins   </li> 
                     <li >  <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Charts and order </a> </li>  
                     <li >  <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}} >Alerts and Hudges</a>  </li>
                     <li >  <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}} >General</a>  </li>
                      </ul>
                      
                    </div>

                    <div className='col-md-4 col-sm-12 mt-5 mb-5'>
                        <h4 className=''>
                           <i class="fa fa-inr" aria-hidden="true"></i> Funds
                        </h4>
                        
                        <ul>
                     <li className=' mt-5'> <a href="#"  style={{textDecoration:"none",lineHeight:"2.5"}}>Add money  </a> </li>   
                     <li >  <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}} >Withdraw money </a> </li>  
                      
                     <li > <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Add bank account   </a>   </li> 
                     <li >  <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>eMandates</a> </li>  
                     
                      </ul>
                      
                    </div>

                    <div className='col-md-4 col-sm-12 mt-5 mb-5'>
                        <h4 className=''>
                           <i class="fa fa-circle-o-notch" aria-hidden="true"></i>Console
                        </h4>
                        
                        <ul>
                     <li className=' mt-5'> <a href="#"  style={{textDecoration:"none",lineHeight:"2.5"}}>Portfolio </a> </li>   
                     <li >  <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}} >Corporate action</a> </li>  
                      
                     <li > <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Funds statement</a>   </li> 
                     <li >  <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Reports</a> </li>  
                     <li >  <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}} >Profile</a>  </li>
                     <li >  <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}} >Segment</a>  </li>
                      </ul>
                      
                    </div>

                    <div className='col-md-4 col-sm-12 mt-5 mb-5'>
                        <h4 className=''>
                           <i class="fa fa-registered" aria-hidden="true"></i> Coin
                        </h4>
                        
                        <ul>
                     <li className=' mt-5'> <a href="#"  style={{textDecoration:"none",lineHeight:"2.5"}}>Mutual Fund </a> </li>   
                     <li >  <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}} >National Pension Scheme (NPS)</a> </li>  
                      
                     <li > <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Fixed Deposite (FD)</a>   </li> 
                     <li >  <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Payment and Orders</a> </li>  
                     <li >  <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}} >General </a>  </li>
                      </ul>
                      
                    </div>
                </div>

             </div>
     );
}

export default CreatTicket;
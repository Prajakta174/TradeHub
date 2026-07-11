import React from 'react';

function Stats() {
    return ( 
     <div className='container p-2 mb-5'>
        <div className='row p-2'>
            <div className='col-lg-6 col-sm-12  p-5'>
                <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                <h2 className='fs-4 '>Customer-first always</h2>
                <p className='text-muted'>That's why 1.3+ crore customers turst Zerodha with Rs.3.5+ lakh crores worth of equity investment.</p>

                
                <h2 className='fs-4'>No spam or gimmicks</h2>
                <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like</p>

               
                <h2 className='fs-4'>The Zerodha univers</h2>
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our investment in 30+ fintech startups offer you tailored sevices specific to your need.</p>

               
                <h2 className='fs-4'>Do better with money</h2>
                <p className='text-muted'>With initiatives like Nudge and kill Switch, we don't just facilitate transaction, but actively hellp you to do better with your moeny</p>

                
            </div>

            <div className='col-lg-6 clo-sm-12  p-5'>
                <img src='media/images/ecosystem.png' style={{width:"90%"}} />
                <div className='text-center'>
                    <a href='' className='mx-5' style={{textDecorationLine:"none"}}>Explore our product <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
</a>
                    <a href='' style={{textDecorationLine:"none"}}>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>

        </div>
     </div>
     );
}

export default Stats;
import React from 'react'

export const JournalEntry = () => {
    return (
        <div className='journal__entry pointer'>
            <div 
                className='journal__entry-picture'
                style={{
                    backgroundSize:'cover',
                    backgroundImage:'url(https://lh3.googleusercontent.com/proxy/EBKSAcEMPwcKT5PI-0pCDqeP4f0b2teVeWTrR0p_rFY4uAv2wx3fuj3KihB-Q3VDRp3Ic2IfKRv4BRuACYIAigwp_o7ZObTX85Uim6AuxTMGxsPAS7FU6xY52uf6JbMyS9kj)'
                }}

            ></div>
            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    Un nuevo dia
                </p>
                <p className='journal__entry-content'>
                    Est dolor velit deserunt nulla velit ut.
                </p>
            </div>
            <div className='journal__entry-date-box'>
                <samp>Monday</samp>
                <h4>28</h4>
            </div>
            
        </div>
    )
}

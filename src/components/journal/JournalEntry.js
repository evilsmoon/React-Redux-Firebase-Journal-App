import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import {activeNote} from '../../actions/notes'
export const JournalEntry = ({ id, date, title, body, url }) => {

    const noteDate = moment(date)


    // console.log(noteDate)
    const dispatch = useDispatch();
    const handelEntryClick = ()=>{
        console.log(id)
        dispatch(
            activeNote(id,{
                date, 
                title, 
                body, 
                url
            })
        );
    }
    return (
        <div 
            className='journal__entry pointer'
            onClick={handelEntryClick}
        >
            {

                url &&
                <div
                    className='journal__entry-picture'
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${url})`
                    }}

                ></div>
            }
            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    {title}
                </p>
                <p className='journal__entry-content'>
                    {body}
                </p>
            </div>
            <div className='journal__entry-date-box'>
                <samp>{noteDate.format('dddd')}</samp>
                <h4>{noteDate.format('Do')}</h4>
            </div>

        </div>
    )
}

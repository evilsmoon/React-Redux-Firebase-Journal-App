import React from 'react'
import { useDispatch } from 'react-redux';
import { endLoginEmailPassword } from '../../actions/auth';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

    const dispatch = useDispatch();
    const handelLogout = () => {
        console.log('logout')
        dispatch(
            endLoginEmailPassword()
        )
    }
    return (
        <aside className='journal__sidebar'>
            <div className='journal__sidebar-navbar'>
                <h3 className='mt-5'>
                    <i className='far fa-moon'></i>
                    <samp> Gabriel</samp>
                </h3>

                <button
                    className='btn'
                    onClick={handelLogout}
                >
                    logout
            </button>

            </div>
            <div className='journal__new-entry'>
                <i className='far fa-calendar-plus fa-5x'></i>
                <p className='mt-5'>
                    new Entry
                </p>
            </div>
            <JournalEntries />
        </aside>
    )
}

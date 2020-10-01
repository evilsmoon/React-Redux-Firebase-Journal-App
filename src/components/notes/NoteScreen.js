import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className='notes__main-content'>
            <NotesAppBar />

            <div className='notes__content'>
                <input
                    type='text'
                    placeholder='some awesome title'
                    className='notes__title-input'
                />
                <textarea
                    placeholder='What happened today'
                    className='notes__textarea'
                >

                </textarea>
                <div className='notes__image'>
                    <img
                        src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/blog/play/dota_heroes.png'
                        alt='dota 2'
                    />

                </div>
            </div>
        </div>
    )
}

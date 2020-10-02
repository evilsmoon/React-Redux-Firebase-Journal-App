import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, starDeleting } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {


    
    const { active: note } = useSelector(state => state.notes)

    const [formValues, handelInputChange, reset] = useForm(note)

    const activeId = useRef(note.id)
    
    const { body, title ,id } = formValues;

    const dispatch = useDispatch();

    useEffect(() => {

        if (note.id !== activeId.current) {
            reset(note)
            activeId.current = note.id
        }

    }, [note, reset])

    useEffect(() => {
        dispatch(
            activeNote(formValues.id,{...formValues})
        );

    }, [formValues,dispatch])


    const  handelDelete = ()=>{
        dispatch(
            starDeleting(id)
        )
    }
    return (
        <div className='notes__main-content'>
            <NotesAppBar />

            <div className='notes__content'>
                <input
                    type='text'
                    placeholder='some awesome title'
                    className='notes__title-input'
                    name='title'
                    value={title}
                    onChange={handelInputChange}
                />
                <textarea
                    placeholder='What happened today'
                    className='notes__textarea'
                    name='body'
                    value={body}
                    onChange={handelInputChange}
                >

                </textarea>
                {
                    (note.url)
                    &&
                    <div className='notes__image'>
                        <img
                            src={note.url}
                            alt='dota 2'
                        />

                    </div>
                }
            </div>
            <button 
                className='btn btn-danger'
                onClick={handelDelete}
            >
                Delete
            </button>
        </div>
    )
}

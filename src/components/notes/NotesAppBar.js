import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {
    
    const dispatch = useDispatch();

    const {active} = useSelector(state => state.notes)
    // console.log(active)
    const  handelSave = ( )=>{
        dispatch(
            startSaveNote(active)
        )
    }

    const handelUploadPicture = ( ) =>{
        document.querySelector('#fileSelector').click();
    }
    const handelFileChange = ( e ) =>{
        const file =e.target.files[0];
        if(file ){
            dispatch(
                startUploading(file)
            )
        }
    }
    return (
        <div className='notes__appbar'>
            <span>30 sep 2020</span>
           
           <input 
                id='fileSelector'
                type='file'
                name='file'
                style={{display:"none"}}
                onChange={ handelFileChange }
           />
            <div>
                <button 
                    className='btn'
                    onClick={handelUploadPicture}
                >
                    Picture
                </button>
                <button 
                    className='btn'
                    onClick={handelSave}
                >
                    Save
                </button>

            </div>
        </div>
    )
}

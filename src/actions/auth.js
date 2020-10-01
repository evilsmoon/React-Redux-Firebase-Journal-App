import Swal from 'sweetalert2'
import { types } from "../types/types"
import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { startLoading, finishLoading } from "./ui";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {


        dispatch(
            startLoading()
        );
        firebase.auth().signInWithEmailAndPassword(email, password).then(({ user: { uid, displayName } }) => {
            if (uid) {
                dispatch(
                    login(uid, displayName)
                )

                dispatch(
                    finishLoading()
                );

            }
        }).catch(err => {
            dispatch(
                finishLoading()
            );
            Swal.fire('Error',err.message,'error')
            // console.log(err)
        });

    }
}

export const startRegisterWithEmailPassword = (name, email, password) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(async ({ user }) => {
            await user.updateProfile({ displayName: name })
            dispatch(
                login(user.uid, user.displayName)
            )
        }).catch(err => {
            Swal.fire('Error',err.message,'error')
            
        });
    }
}
export const endLoginEmailPassword = () => {

    return async( dispatch ) => {
        await firebase.auth().signOut();
        dispatch(
            logout()
        );
    }
}
export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider).then(({ user: { uid, displayName } }) => {
            // console.log(userCred);
            dispatch(
                login(uid, displayName)
            )
        })

    }

}
export const logout = ()=>(
    {
        type:types.logout
    }
)

export const login = (uid, displayName) => (
    {
        type: types.login,
        payload: {
            uid,
            displayName
        }

    }

)

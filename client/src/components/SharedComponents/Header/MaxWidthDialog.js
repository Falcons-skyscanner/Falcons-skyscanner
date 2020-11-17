import React from "react";
import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core'
import SignIn from "./SignIn";



export default function MaxWidthDialog() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>
            <Button variant="outlined" color="primary" className="login_button" onClick={handleClickOpen}> Log In </Button>
            <Dialog
                maxWidth={"xs"}
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogContent>
                    <div>
                        <div className="Dialog">
                            <img className='Dialog__image' src='https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' alt='ss' />
                        </div>
                        <div>
                            <SignIn />
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary"> Close </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
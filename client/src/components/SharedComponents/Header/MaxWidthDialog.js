import React from "react";
import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core'
import SignIn from "./SignIn";



export default function MaxWidthDialog({placeholder}) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>
            <Button variant="outlined" color="primary" className="login_button" onClick={handleClickOpen}> {placeholder} </Button>
            <Dialog
                maxWidth={"xs"}
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogContent>
                    <div>
                        <div className="Dialog">
                            <img className='Dialog__image' src='https://media.istockphoto.com/vectors/sunset-with-bungalows-on-sea-resort-aircraft-in-the-sky-mountain-and-vector-id940018518?k=6&m=940018518&s=612x612&w=0&h=UIjqrOGVmE1g5Dt-k36kKAvWEzENoDQEEWz9cVXiTSA=' alt='ss' />
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
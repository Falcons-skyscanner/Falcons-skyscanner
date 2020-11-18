import React from "react";
import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core'
import { Link } from 'react-router-dom'



export default function SelectDialog({addTicket,userTicket}) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
        addTicket(userTicket)
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>
            <Button color="primary" className="login_button" onClick={handleClickOpen}> Select </Button>
            <Dialog
                maxWidth={"xs"}
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogContent>
                    <div>
                        <div className="Dialog">
                            <img className='Dialog__image' src='https://lh3.googleusercontent.com/proxy/OMsm84LnhNDyF3MB9_ixBwkOnecsgT7F12Qy1uf5pGnfPpDbWYyXluN2_WQq70ZoYkrhClEOJN7EWjgc-mntifL6VZtmkmk' alt='ss' />
                        </div>
                        <div className="AddDialog">
                            <h3>Added successfully</h3>
                            <Link to="/profile" style={{ textDecoration: "none" }}>
                                <Button  onClick={handleClose} color="primary"> go to checkout </Button>
                            </Link>
                            <DialogActions>
                                <Button  onClick={handleClose} color="primary"> Close </Button>
                            </DialogActions>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
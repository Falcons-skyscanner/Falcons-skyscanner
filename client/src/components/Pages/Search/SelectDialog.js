import React from "react";
import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core'
import { Link } from 'react-router-dom'



export default function SelectDialog({addTicket,userTicket,success,setsuccess}) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
        addTicket(userTicket)
    };
    const handleClose = () => {
        setOpen(false)
        setsuccess(false)
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
                            <img className='Dialog__image' src='https://ownacademy.co/wp-content/uploads/2018/10/Tick_Mark_Dark-512.png' alt='ss' />
                        </div>
                        <div className="AddDialog">
                            <h3>{ success ? 'Added successfully' : 'Already added'} </h3>
                            <Link to="/profile" style={{ textDecoration: "none" }}>
                                <Button  onClick={handleClose} color="primary">go to checkout </Button>
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
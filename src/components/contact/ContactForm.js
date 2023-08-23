import '../../styles.css'
import {useState} from "react";
import {Grid, TextField} from "@mui/material";


function Contact(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')


    return(
        <div className={'contact-form-container'}>
            <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" sm = {12} spacing={2}>
                <Grid item sm={9}>
                    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" sm = {12}>

                    <Grid item sm={8}>
                        <TextField
                            required
                            id="name"
                            label="Nume"
                            name="name"
                            margin="normal"
                            sx={{width: '100%'}}
                        />
                    </Grid>
                    <Grid item sm={8}>
                    <TextField
                            fullWidth
                            required
                            id="email"
                            label="Email"
                            name="email"
                            margin="normal"
                        />
                    </Grid>
                    <Grid item sm={8}>
                        <TextField
                            fullWidth
                            required
                            id="phone"
                            label="Telefon"
                            name="phone"
                            margin="normal"
                        />
                    </Grid>
                    <Grid item sm={8}>
                        <TextField
                            fullWidth
                            required
                            id="message"
                            label="Mesaj"
                            name="message"
                            margin="normal"
                            multiline
                        />
                    </Grid>
                </Grid>
                </Grid>


                <Grid item sm={3}>
                    <Grid container direction="column" justify="flex-start" alignItems="center">
                        <Grid item>
                            ana are mere priaga ga sga dgsjidbgijasg bogin ajogb sojagba ojb
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Contact;
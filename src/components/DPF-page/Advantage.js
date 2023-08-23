import {Grid} from "@mui/material";

function Advantage({title, text, icon}){

    return (
            <Grid item sm={4}>

                <h2>
                    {title}
                </h2>
                <p>
                    {text}
                </p>


            </Grid>
    );
}

export default Advantage
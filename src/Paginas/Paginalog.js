import React, {useState} from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, FormControlLabel } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom";

function LoginPage(){

    //Styles
    const paperStyle={padding :20,height:'30vh',width:280, margin:"20px auto"};
    const avatarStyle={backgroundColor:'rgba(0, 0, 0, 0.54)'};
    const btnstyle={margin:'8px 0', backgroundColor:'rgba(0, 0, 0, 0.54)'};
    const inputStyle={margin:'4px 0', borderColor:'rgba(0, 0, 0, 0.54)'};
    const typoStyle={marginTop:'10px'};
    
    // Attributes
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState();
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(email === "kognit@gmail.com" && password === "123")
        {
            navigate("/home");
        }
        else{
            setError("Email ou senha incorretos!")
        }
    }

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockIcon/></Avatar>
                    <h2 style={{marginBottom: '15px'}}>Login</h2>
                </Grid>
                <form onSubmit={handleSubmit}>
                <TextField label='Username' placeholder='Enter username' onChange={e=>setEmail(e.target.value)} style={inputStyle} fullWidth required/>
                <TextField label='Password' placeholder='Enter password' onChange={e=>setPassword(e.target.value)} style={inputStyle} type='password' fullWidth required/>

                
                <Button type='submit' onSubmit={handleSubmit} color='primary' variant="contained" style={btnstyle} fullWidth>Entrar</Button>
                {error?<Typography color="error">{error}</Typography>:null}
                </form>
              
              
            </Paper>
        </Grid>
    )
}

export default LoginPage
import { Button, TextField } from "@mui/material";

export default function Home() {
  
  return (
    <main className='bg-slate-300 h-screen flex justify-center items-center'>
        <div className='border border-black w-80 h-96 text-center flex flex-col justify-evenly items-center'>
                <h2 >Sign-in</h2>
                <TextField className="" id="text-field-email" label="E-mail" variant="outlined" />
                <TextField id="text-field-password" label="Password" variant="outlined" type="password" />
                <span className="hover:text-sky-700 hover:cursor-pointer ">Esqueci a senha</span>
                <Button variant="contained">Entrar</Button>
        </div>
    </main>
  );
}

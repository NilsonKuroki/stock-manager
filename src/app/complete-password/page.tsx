import { Button, TextField } from "@mui/material";

export default function CompletePassword() {
  return (
    <main className='bg-slate-300 h-screen flex justify-center items-center'>
        <div className='border border-black w-80 h-96 text-center flex flex-col justify-evenly items-center'>
                <h2 >Cadastre uma senha:</h2>
                <TextField className="" id="text-field-email" label="Nova senha" variant="outlined" />
                <TextField id="text-field-password" label="Confirme sua nova senha" variant="outlined" type="password" />
                <Button variant="contained">Salvar</Button>
        </div>
    </main>
  );
}

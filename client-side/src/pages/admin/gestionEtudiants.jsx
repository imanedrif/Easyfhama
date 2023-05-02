import React, { useState, useEffect } from 'react';
import '../../assets/css/admin/admin-dashboard.css'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, IconButton, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import axios from 'axios';
import Swal from 'sweetalert2';

const GestionEtudiants = () => {
    const [etudiants, setEtudiants] = useState([]);
    const [open,setOpen] = useState(false);
    const [isloading,setIsloading] = useState(false)
    const [input, setInput ] = useState([])
    const [isEditing,setIsEditing] = useState(false)

    const handleClickOpen = ()=>{
        setOpen(true)
    }
    const handleClose = ()=>{
        setOpen(false)
    } 
    const handleInput = (e) =>{
        setInput({...input,[e.target.name] : e.target.value})
    }
    
    const handleSave = (e)=>{
        e.preventDefault()
        const data = {
            nom: input.nom,
            email: input.email,
            filliere: input.filliere,
            classe: input.classe,
            password: input.password
        }
        axios.post(`http://localhost:8000/api/etudiants/add-etudiant`,data).then(res=>{
            console.log(res)
            if(res.status === 200){
                setIsloading(!isloading)
            }
            setOpen(false)
            
        })
        .catch(error => {
            console.log(error);
        });
    }
    
    const handleEdit = ()=>{
        setIsEditing(!isEditing)
    }
    
    const handleDelete = (e,id)=>{
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/etudiants/delete-etudiant/${id}`).then(res=>{
            console.log(res)
            if(res.status===200){
                setIsloading(!isloading)
                Swal("Deleted!",res.data.message,"success")
            }
            else if(res.status === 404){
                Swal("Error",res.data.message,"error");
            }
        })
    }
    useEffect(() => {
        axios.get(`http://localhost:8000/api/etudiants/`)
        .then(res => {
            if (res.status === 200) {
                console.log(res.data);
                setEtudiants(res.data.etudiant);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }, [isloading]);
    
    const handleUpdate = ()=>{

    }
    
  return (
    <div className='justify_information'>
        <div className='dashboard-header'>
        <h1>Liste des etudiants</h1>
        <Button variant="outlined" startIcon={<PersonAddIcon/>} onClick={handleClickOpen}>Ajouter</Button>
        </div>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Nom complet</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Filliere</TableCell>
                    <TableCell>Classe</TableCell>
                    <TableCell>Abonnement</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {etudiants.map((etudiant,index)=>(
                    <TableRow key={index}>
                        <TableCell>{isEditing ?(
                            <input type='text' name='nom' value={input.nom} onChange={handleInput} className='editInput'/>
                        ):(
                            `${etudiant.id}`
                            )}
                        </TableCell>
                        <TableCell>{etudiant.nom}</TableCell>
                        <TableCell>{etudiant.email}</TableCell>
                        <TableCell>{etudiant.filliere}</TableCell>
                        <TableCell>{etudiant.classe}</TableCell>
                        <TableCell>{etudiant.abonnement}</TableCell>
                        <TableCell>
                        <IconButton variant="outlined" color="error" onClick={(e)=>handleDelete(e,etudiant.id)}><DeleteIcon/></IconButton>
                        <IconButton variant="outlined" color="primary" onClick={handleEdit}><EditIcon/></IconButton>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
                
        </Table>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Ajouter un etudiant</DialogTitle>
            <DialogContent>
                <input type='text' name='nom' value={input.nom} onChange={handleInput} placeholder='Nom complet'/><br />
                <input type='email' name='email' value={input.email} onChange={handleInput} placeholder='Nom@gmail.com'/>
            </DialogContent>
                <FormControl variant="standard" sx={{ m: 4, maxWidth:160 }}>
                    <InputLabel id="demo-simple-select-standard-label">Filliere</InputLabel>
                        <Select
                            name='filliere'
                            value={input.filliere}
                            onChange={handleInput}
                            >
                            <MenuItem value=''>
                                <em>choisir votre filliere</em>
                            </MenuItem>
                            <MenuItem value={"Science physique"}>Science physique</MenuItem>
                            <MenuItem value={"Science math"}>Science math</MenuItem>
                            <MenuItem value={"Science math A"}>Science math A</MenuItem>
                            <MenuItem value={"Science math B"}>Science math B</MenuItem>
                            <MenuItem value={"Sciences Expérimentales"}>Sciences Expérimentales</MenuItem>
                            <MenuItem value={"Sciences économiques"}>Sciences économiques</MenuItem>
                            <MenuItem value={"Sciences et technologies mécaniques"}>Sciences et technologies mécaniques</MenuItem>
                            <MenuItem value={"Sciences et technologies électriques"}>Sciences et technologies électriques</MenuItem>
                            <MenuItem value={"Sciences Gestion Comptable"}>Sciences Gestion Comptable</MenuItem>
                        </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 4, maxWidth: 160 }}>
                    <InputLabel id="demo-simple-select-standard-label">Classe</InputLabel>
                    <Select
                        name='classe'
                        value={input.classe}
                        onChange={handleInput}
                        >
                        <MenuItem value=''>
                            <em>choisir votre classe</em>
                        </MenuItem>
                        <MenuItem value={"Tronc commun"}>Tronc commun</MenuItem>
                        <MenuItem value={"1ère BAC"}>1ère BAC </MenuItem>
                        <MenuItem value={"2ème BAC"}>2ème BAC</MenuItem>
                    </Select>
                </FormControl>
                <input type='password' name='password' value={input.password} onChange={handleInput}placeholder='mot de passe' /><br />
            <DialogActions>
                <Button onClick={handleClose}>Fermer</Button>
                <Button onClick={handleSave}>Enregistrer</Button>
            </DialogActions>
        </Dialog>
    </div>
  );
};

export default GestionEtudiants;

import React, {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";

function DetalhesUsuario (){
    const {id} = useParams();
    const [usuario, setUsuario] = useState({});

    useEffect(() => {
        fetch(`https://reqres.in/api/users/${id}`)
        .then(response => response.json())
        .then(data => {
            if(data.data){
                setUsuario({
                    id: data.data.id,
                    nome: data.data.first_name,
                    sobrenome: data.data.last_name,
                    email: data.data.email,
                    avatar: data.data.avatar
                })
            }
        })
    }, [id])

    if(usuario.id !== undefined){
        return <> 
            <h1>{usuario.nome} {usuario.sobrenome}</h1>
            <img src={usuario.avatar} alt={usuario.nome}/>
            <p>{usuario.email}</p>
            <Link to="/usuarios">Voltar</Link>
        </>
    }


    return (
        <div>
            <h2>USUARIO NÃO ENCONTRADO</h2>
            <Link to="/usuarios">Voltar</Link>
        </div>
    );
}

export default DetalhesUsuario;
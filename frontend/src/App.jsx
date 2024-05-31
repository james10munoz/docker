import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [nombre, setNombre] = useState('');
    const [nombres, setNombres] = useState([]);

    useEffect(() => {
        listarNombres();
    }, []);

    const listarNombres = async () => {
        try {
            const response = await axios.get('http://localhost:4000/listar');
            setNombres(response.data);
        } catch (error) {
            console.error('Error al listar nombres:', error);
        }
    };

    const registrarNombre = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/registrar', { nombre });
            setNombre('');
            listarNombres();  // Actualizar la lista de nombres
        } catch (error) {
            console.error('Error al registrar nombre:', error);
        }
    };

    return (
        <div>
            <h1>Registro de Nombres</h1>
            <form onSubmit={registrarNombre}>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ingrese su nombre"
                />
                <button type="submit">Registrar</button>
            </form>
            <h2>Lista de Nombres</h2>
            <ul>
                {nombres.map((item, index) => (
                    <li key={index}>{item.nombre}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;

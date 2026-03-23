let notas = [
    { id: 1, materia: "Matemáticas", calificacion: 9 },
    { id: 2, materia: "Historia", calificacion: 8 }
];

exports.obtenerNotas = (req, res) => {
    res.json(notas);
};

exports.agregarNota = (req, res) => {
    const nuevaNota = {
        id: notas.length + 1,
        ...req.body
    };
    notas.push(nuevaNota);
    res.json(nuevaNota);
};

exports.eliminarNota = (req, res) => {
    const id = parseInt(req.params.id);
    notas = notas.filter(nota => nota.id !== id);
    res.json({ mensaje: "Nota eliminada" });
};

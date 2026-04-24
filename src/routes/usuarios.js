import db from "../database.js";

router.post('/usuarios', (req, res) => {
    const { nome, cpf, email } = req.body;
    const stmt = db.prepare("INSERT INTO usuarios (nome, cpf, email) VALUES (?, ?, ?)");
    stmt.run(nome, cpf, email);
    res.send("Usuário criado com sucesso");
});

router.put('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const { nome, cpf, email } = req.body;
    const stmt = db.prepare("UPDATE usuarios SET nome = ?, email = ? WHERE id_usuario = ?");
    stmt.run(nome, email, id);
    res.send("Usuário atualizado com sucesso");
});

router.delete('/:id', (req,res)=>{
    db.prepare('DELETE FROM usuarios WHERE id_usuario = ?').run(req.params.id);
    res.send("Usuário deletado com sucesso");
});

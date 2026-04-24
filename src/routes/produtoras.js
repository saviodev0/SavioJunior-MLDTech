import db from "../database.js";

router.post("/produtora", (req,res)=>{
    const {nome, cnpj, website} = req.body;
    const stmt = db.prepare("INSERT INTO produtoras (nome, cnpj, website) VALUES (?, ?, ?)");
    stmt.run(nome, cnpj, website);
    res.send("Produtora criada com sucesso");
});

router.get("/produtora", (req,res)=>{
    const stmt = db.prepare("SELECT * FROM produtoras");
    const produtoras = stmt.all();
    res.json(produtoras);
});



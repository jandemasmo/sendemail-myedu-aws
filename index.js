const app = require("./src/app");
const port = process.env.PORT || 3003


app.listen(port, () => {
    try {
        console.log(`Servidor rodando na porta ${port}`)
    } catch (error) {
        console.log(error)
    }
})


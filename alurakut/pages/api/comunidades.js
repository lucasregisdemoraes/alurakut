import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if(request.method === 'POST') {
        const TOKEN = 'b48b3c958b6b6171ff1c8ed6e65795'
        const client = new SiteClient(TOKEN);

        // Validar os dados, antes de cadastrar
        const registroCriado = await client.items.create({
            itemType: "976138", // ID do Model  de "Communities" criado pelo Dato
            ...request.body,
            // title: "Comunidade de Teste",
            // imageUrl: "https://github.com/omariosouto.png",
            // creatorSlug: "lucasregisdemoraes",
        })

        console.log(registroCriado)

        response.json({
            dados: 'teste teste teste',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada do GET, mas no POST tem!'
    })
}
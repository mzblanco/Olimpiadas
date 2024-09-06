

function pesquisar()
{
    let section = document.getElementById('resultados-pesquisa')
    let campoPesquisa = document.getElementById("campo-pesquisa").value


    let resultados="";
    let titulo = "";
    let descricao = "";
    let tags = "";

   

    if (!campoPesquisa)
    {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
        return
    }


    for (let item of dados)
    {
        titulo = item.titulo.toLowerCase()
        descricao = item.descricao.toLowerCase()
        tags = item.tags.toLocaleLowerCase()

        if ((titulo.includes(campoPesquisa)) || (descricao.includes(campoPesquisa))||(tags.includes(campoPesquisa)))
        {
        resultados += ` <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${item.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${item.descricao}</p>
                    <a href=${item.link} target="_blank">Mais informações</a>
                </div>`
        }
        
    }
    if (!resultados)
    {
        resultados = "<p>Nada foi encontrado. </p>"
    }
        
    section.innerHTML = resultados
}
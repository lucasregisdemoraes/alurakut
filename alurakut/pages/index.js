import React from 'react';
import MainGrid from '../src/componentes/MainGrid'
import Box from '../src/componentes/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';  
import { ProfileRelationsBoxWrapper } from '../src/componentes/ProfileRelations';

function ProfileSidebar(propriedades) {
  return (
    <Box as="aside">
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }}/>
      <hr />
  
        <p>
          <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
            @{propriedades.githubUser}
          </a>
        </p>
        <hr />

        <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const usuarioAleatorio = 'lucasregisdemoraes'
  const [comunidades, setComunidades] = React.useState([{
    id: '2432143254255454345315',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'    
  }]);
  // console.log(comunidades)
  // const comunidades = ['Alurakut'];
  
  // 
  // 
  const pessoasFavoritas = [
    'juunegreiros', 
    'omariosouto', 
    'peas', 
    'rafaballerini', 
    'marcobrunodev', 
    'felipefialho'
]

  return (
    <>
    <AlurakutMenu />
    <MainGrid>
      {/*        */}
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <ProfileSidebar githubUser={usuarioAleatorio} />
      </div>
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box>
          <h1 className="title">
            Bem vindo(a)
          </h1>

          <OrkutNostalgicIconSet />
        </Box>

        <Box>
          <h2 className="subTitle">O que você deseja fazer?</h2>
          <form onSubmit={function handleCriandoComunidade(e) {
            e.preventDefault();
            const dadosDoForm = new FormData(e.target);

            console.log(dadosDoForm.get('title'));
            console.log(dadosDoForm.get('image'));
            
            const comunidade = {
              id: new Date().toISOString(),
              title: dadosDoForm.get('title'),
              image: dadosDoForm.get('image'),
            }
            const comunidadesAtualizadas = [...comunidades, comunidade];
            setComunidades(comunidadesAtualizadas)            
          }}>
            <div>
              <input 
              placeholder="Qual var ser o nome da sua comunidade?"
              name="title"
              aria-label="Qual var ser o nome da sua comunidade?"
              type="textSecondaryColor"
              />
            </div>
            <div>
              <input 
              placeholder="Coloque uma URL para usarmos de capa" 
              name="image" 
              aria-label="Coloque uma URL para usarmos de capa" 
              />
            </div>

            <button>
              Criar comunidade
            </button>
          </form>
        </Box>
      </div>
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Comunidades ({comunidades.length})
          </h2>
        <ul>
            {comunidades.map((itemAtual) => {
              return (
                <li key={itemAtual.id}>
                  <a href={`/users/${itemAtual.title}`}>
                    <img src={itemAtual.image} />
                    <span>{itemAtual.title}</span>
                  </a>
                </li>
                )
              })}
            </ul>
        </ProfileRelationsBoxWrapper>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
          Pessoas da comunidade ({pessoasFavoritas.length})
          </h2>

          <ul>
            {pessoasFavoritas.map((itemAtual) => {
              return (
                <li key={itemAtual}>
                  <a href={`/users/${itemAtual}`} key={itemAtual}>
                    <img src={`https://github.com/${itemAtual}.png`} />
                    <span>{itemAtual}</span>
                  </a>
                </li>
                )
              })}
            </ul>
        </ProfileRelationsBoxWrapper>
      </div>
    </MainGrid>
    </>
  )
}

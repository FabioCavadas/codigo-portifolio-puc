<h2><b>Criação de App utilizando React</b></h2>

<p>Abrir o terminal e executar o comando abaixo para criação de uma app com a última versão do React</p>

- npx create-react-app@latest aplicacaocra

<p>
Obs: pode ser necessário a instalação de algum pacote adicional, em meu caso foi necessário instalar o react-app@5.0.1, com o comando abaixo:
</p>

- create-react-app@5.0.1

<p>Após instalação de todos os pacotes necessários, abra o código no VSCode para observar toda a estrutura.</p>

- cd aplicacaocra
- code .

<p>Diretórios e arquivos:

*Public* - Contém elementos estáticos do site, imagens, icone, manifest.json(configurações para ter um pwa)

*index.html*, contém a <div id="root"></div> que é a responsável por renderizar os componentes visuais.

*Src* - parte dinâmica do site, arquivos de scripts.

*index.js*, contém os arquivos de bootstrap do react, criando o componente raiz da aplicação.

*root.render( )* - é o ponto de entrada principal onde o React gerencia a árvore de componentes dentro do DOM

*<react.StrictMode></react.StrictMode>* - componente do React que ajuda a identificar problemas potenciais no seu aplicativo durante o desenvolvimento não afetando ou gerando impactos ao ambiente de produção.

*App.js* - implementação do componente visual do react.

*Sintaxe jsx*  - mistura html com javascript.

</p>

<p>iniciar o servidor de desenvolvimento</p>

- npm start

Documentação [React](https://react.dev/)


<h2><b>Criação de App utilizando Vite</b></h2>

- npm create vite@latest aplicacaovite

<p>
Obs: Podera abrir uma mensagem sinlaizando que é preciso instalar o seguinte pacote vite@5.2.3
</p>

- create-vite@5.2.3

<p>Ao executar o comando será perguntado qual framework iremos trabalhar:

- vanilla 
- vue 
- React 
- Preact 
- Lit 
- Svelt 
- Others
</p>

Selecione *React*

<p>Na sequencia será necessário escolher a ferramenta de linguagem</p>

- Typscript 
- Javascript

Selecione *Javascript*

<p>Após instalação de todos os pacotes necessários, abra o código no VSCode para observar toda a estrutura.</p>

- cd aplicacaovite -> Acessar o diretório da app
- npm install -> Para instalar as dependências da app
- npm run dev -> Disparar o processo de build e colocar no ar o servidor de desenvolvimento

<p>Caso seja pressionado a telca 'h', será mostrada as teclas de atalho:</p>

r - restart servidor
u - show server url
o - open in browser
c - clear console
q - quit

<p>
Obs:
Não é necessário remover as tags <react.StrictMode>, componente do React que somente aparece no html em modo desenvolvimento, quando for executado um build na app, será removido e serve para ter verificação de falhas em tempo de execução dentro do navegador enquanto estiver com o servidor de desenvolvimento ativo.
</p>

<p>Subistituições de modulos a quente, atualização da app com o servidor ativo, será percebido no terminal, a informação mostrado abaixo:

*[vite] hmr update /src/App.jsx (x3)*
</p>

Documentação [Vite](https://vitejs.dev/)

<h3><b>Criação de Demos:</b></h3>

- npm create vite@latest demo-react-componentebasico - Criar app demo
- npm run deve - Iniciar servidor de desenvolvimento
- ctrl c - Finalizar execução


<h4><b>demo_react_eventosbasicos</b></h4>

<p>
Mostra o comportamento de dois botões
<b>Eventos</b> suportados pelo React: (https://react.dev/learn/responding-to-events)

<b>Onclick</b> - é utilizado para adicionar manipuladores de eventos de clique a elementos JSX.
<b>handClik</b> - é uma convenção comum em React e outras bibliotecas/componentes de UI baseados em JavaScript para definir e gerenciar eventos de clique. No contexto do React, é tipicamente um método de instância em um componente de classe ou uma função em um componente funcional que é chamada quando um elemento HTML é clicado.

<b>Bubbling</b> - ao clicar no botão ele exibe uma mensagem, o evento sobe na estrutura da arvore propagando-se para os elementos pai na hierarquia DOM, o elemento que encapsula o DOM dentro da árvore possui tratador? sim, ele exibirá uma nova mensagem.

<b>Stop Propagation</b>, o botão exibe uma única mensagem sinalizando que o botão foi clicado e não se propagou para a div

<b>Hooks</b> - funções especíais no ciclo de vida dos componentes criados pelo React.
Hooks suportados:  (https://react.dev/reference/react)

</p>
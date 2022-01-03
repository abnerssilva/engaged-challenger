# Prova Técnica EngagED - Pessoa Desenvolverdora Front-end Plena Vue.js


Projeto não precisa ser executado para testes. Publiquei a aplicação como um subdomínio do meu site. [Clique aqui para testar a aplicação](http://engagedchallenger.abnersouza.dev.br)

Aplicação desenvolvida como parte do processo seletivo para o cargo de Pessoa Desenvolvedora Front-end Plena Vue.js na EngagED S.A.


## Considerações

* Aplicação desenvolvida em VueJS + VueRouter;
* Funcionalidades:
  1. Listagem de Personagens: 
   - [x] Essa página além da listagem dos personagens da série deve permitir filtrar os personagens por nome;
   - [x] Ao selecionar um personagem da lista a interface deve direcionar o usuário para a página desse personagem;
  
  2. Página do personagem:
   - [x] Essa página deve exibir além das informações do personagem quais episódios ele aparece;
   - [x] Ao selecionar um dos episódios que o personagem participou, a interface deve direcionar o usuário para a página desse episódio;
  
  3. Página do episódio:
   - [x] Essa página deve exibir além das informações do episódio quais personagens aparecem nele;
   - [x] Ao selecionar um dos personagens que aparecem no episódio, a interface deve direcionar o usuário para a página desse personagem.


* Plus:
   - [x] Utilizado sistema de grid com cards e efeito rotate(180º) via css. Detalhes constam no verso do card após clique;
   - [x] O Layout responsivo;
   - [x] Lazyload de Imagens.


* Tecnologias:
   - [x] Utilizado HTML5, CSS3 (Flex e Grid), JavaScript e TypeScript (somente no recebimento de props nos componentes filhos);
   - [x] Utilizado Sass;
   - [x] Utilizado Tailwind como facilitador de manipulação CSS;
   - [x] Otimizações para aumentar a velocidade de renderização; Ex.: Lazyload
   - [x] Vue-Apollo para consumo da API em graphQL.


## Códigos construídos/manipulados

1. Assets
   1. Diretório src/assets/css/index.css;
   2. Diretório src/assets/scss/fonts.scss;
   3. Diretório src/assets/scss/app.scss

2. Components
   1. Diretório src/components/Character.vue;
   2. Diretório src/components/CharacterCard.vue;
   3. Diretório src/components/Episode.vue;
   4. Diretório src/components/Error.vue;
   5. Diretório src/components/Loading.vue.
   
3. Router
   1. Diretório src/routes/index.js

4. Views
   1. Diretório src/views/Home.vue;
   2. Diretório src/views/Characters.vue;
   3. Diretório src/views/About.vue;
   4. Diretório src/views/Episodes.vue;

5. App
   1. Diretório src/App.vue

6. Main
   1. Diretório src/main.js


# Obrigado pela Oportunidade!!! ;-)

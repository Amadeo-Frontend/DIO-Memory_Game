# <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Ghost.png" alt="Ghost" width="35" height="35" /> Halloween Memory Game <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Jack-O-Lantern.png" alt="Jack-O-Lantern" width="35" height="35" />

Bem-vindo ao **Halloween Memory Game**, um jogo da memória temático de Halloween desenvolvido em HTML, CSS e JavaScript. Teste sua memória encontrando todos os pares de cartas assustadoras enquanto desfruta de efeitos sonoros imersivos! 👻🧛🧟‍♂️

## 🎯 Visão Geral

Este projeto é um jogo da memória simples e divertido com tema de Halloween. O objetivo é encontrar todos os pares de cartas correspondentes o mais rápido possível. Agora, com **efeitos sonoros** e **música de fundo**, a experiência é ainda mais envolvente. Quando dois cartões não correspondem, eles tremem para indicar o erro. Ao encontrar todos os pares, uma notificação aparece para parabenizá-lo pela vitória! 🥳

## 🚀 Funcionalidades

- **Embaralhamento Aleatório**: As cartas são embaralhadas a cada novo jogo.
- **Animação de Virada**: As cartas viram com uma animação suave.
- **Efeito de Shake**: Quando dois cartões não correspondem, eles tremem.
- **Efeitos Sonoros**: Sons são reproduzidos ao virar cartas, ao encontrar pares correspondentes e ao errar.
- **Música de Fundo**: Uma música ambiente é tocada durante o jogo, com opção para ativar ou desativar.
- **Notificação de Vitória**: Um toast aparece quando todos os pares são encontrados.
- **Reinício do Jogo**: Opção para reiniciar o jogo a qualquer momento.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura do jogo.
- **CSS3**: Estilização e animações.
- **JavaScript**: Lógica do jogo, manipulação do DOM e gerenciamento de áudio.

## 🎮 Como Jogar

1. Abra o jogo (<a href="https://dio-memory-game.vercel.app/">Clique Aqui</a>).
2. Aproveite a **música de fundo** que começa automaticamente (pode ser necessário interagir com a página dependendo do navegador).
3. Para silenciar ou reativar a música de fundo, clique no botão de som no canto superior esquerdo.
4. Clique em uma carta para virá-la e ouça o **som de virar**.
5. Clique em outra carta para tentar encontrar o par correspondente.
6. Se as cartas corresponderem, elas permanecerão viradas e um **som de correspondência** será reproduzido.
7. Se não corresponderem, elas irão tremer, um **som de erro** será tocado, e as cartas virarão de volta após a animação.
8. Repita até encontrar todos os pares.
9. Ao vencer, um toast aparecerá no canto superior direito.

## 📷 Demonstração



https://github.com/user-attachments/assets/5c16453d-1f76-49b2-bae4-066d8813dcc3



## 📝 Explicação do Código

### Manipulação do DOM com JavaScript

O JavaScript desempenha um papel crucial no funcionamento do jogo, sendo responsável por criar dinamicamente os elementos, gerenciar a lógica do jogo, responder às interações do usuário e controlar os efeitos sonoros.

#### 1. **Embaralhamento das Cartas**

Para garantir que cada jogo seja único, as cartas são embaralhadas aleatoriamente usando o algoritmo de **Fisher-Yates**. Isso reorganiza os elementos do array de emojis de forma aleatória antes de criar os cartões.

#### 2. **Criação Dinâmica dos Cartões**

As cartas são criadas dinamicamente e adicionadas ao DOM:

- **Criação de Elementos**: Para cada emoji no array embaralhado, um novo elemento de carta é criado.
- **Atributos e Classes**: Cada carta recebe classes CSS para estilização e um atributo que armazena o emoji correspondente.
- **Eventos**: Um ouvinte de evento de clique é adicionado a cada carta, permitindo que o jogo responda quando o usuário interage com ela.
- **Inserção no DOM**: As cartas são adicionadas ao elemento contêiner do jogo presente no DOM.

#### 3. **Manipulação de Eventos**

Quando o usuário clica em uma carta, o jogo verifica se ela pode ser virada (não está já aberta ou correspondida) e a vira, mostrando o emoji. As cartas abertas são armazenadas em um array para comparação.

#### 4. **Verificação de Correspondência**

Quando duas cartas estão abertas:

- **Correspondência Correta**:
  - As cartas permanecem viradas.
  - Um **som de correspondência** é reproduzido.
  - Os eventos de clique são removidos dessas cartas.
- **Correspondência Incorreta**:
  - As cartas tremem usando uma animação de shake.
  - Um **som de erro** é tocado.
  - Após a animação, as cartas são viradas de volta.

#### 5. **Controle de Estado**

Durante a verificação, cliques adicionais são desabilitados para evitar interferências. Após a comparação, os cliques são reabilitados.

#### 6. **Adição de Efeitos Sonoros**

- **Elementos de Áudio Dinâmicos**: Os sons são gerenciados dinamicamente pelo JavaScript, criando objetos de áudio para cada efeito sonoro e para a música de fundo.
- **Efeitos Sonoros nos Eventos**:
  - **Virar Carta**: Um som é tocado ao virar cada carta.
  - **Correspondência Correta**: Ao encontrar um par, um som de sucesso é reproduzido.
  - **Correspondência Incorreta**: Se as cartas não correspondem, um som de erro é tocado.
- **Música de Fundo**: Uma música ambiente toca durante o jogo, iniciando automaticamente ao carregar a página (dependendo das políticas do navegador, pode ser necessário interagir com a página primeiro).
- **Controle de Música**: Um botão fixo no canto superior esquerdo permite que o jogador ative ou desative a música de fundo a qualquer momento, atualizando o ícone de acordo com o estado (🔊 para ligado, 🔇 para desligado).

#### 7. **Verificação de Vitória**

O jogo verifica se todas as cartas foram correspondidas. Se sim, uma notificação (toast) aparece, e o jogo pode ser reiniciado.

### Animações com CSS

As animações melhoram a experiência do usuário, fornecendo feedback visual e tornando o jogo mais envolvente.

#### 1. **Animação de Virada de Carta**

As cartas têm um efeito de virada que é conseguido através de transformações 3D em CSS:

- **Estado Inicial**: As cartas estão viradas para baixo.
- **Virando a Carta**: Quando abertas, uma classe é adicionada, e a carta gira para revelar o emoji.
- **Transições Suaves**: As transições permitem que a mudança ocorra de forma suave.

#### 2. **Animação de Shake**

Quando o jogador seleciona um par incorreto:

- **Aplicação da Animação**: Uma classe de animação é adicionada às cartas incorretas.
- **Efeito Visual**: As cartas tremem horizontalmente, indicando a correspondência incorreta.
- **Remoção da Animação**: Após a animação, a classe é removida, e as cartas são viradas de volta.

#### 3. **Toast de Vitória com Barra de Progresso**

Ao vencer o jogo:

- **Notificação**: Um toast aparece no canto superior direito.
- **Barra de Progresso**: Uma barra visual indica o tempo restante antes do toast desaparecer.
- **Animação Sincronizada**: A duração da animação da barra corresponde ao tempo de exibição do toast.

## 📱 Testando a Responsividade

- **Desktop**: As cartas manterão o tamanho máximo definido, e o layout permanecerá semelhante ao original.
- **Tablets**: As cartas e textos serão levemente reduzidos para caberem adequadamente.
- **Smartphones**: O layout se ajustará para ocupar a largura da tela, com cartas menores e textos ajustados.
- **Pequenos Smartphones**: O jogo permanecerá funcional, com elementos adequadamente dimensionados.

## 🎶 Considerações sobre Áudio

- **Compatibilidade de Navegadores**: Alguns navegadores podem bloquear a reprodução automática de áudio. Se a música de fundo não iniciar automaticamente, interaja com a página (clicando em qualquer lugar) ou use o botão de som para ativá-la.
- **Formatos de Áudio**: Os sons são fornecidos em formatos amplamente suportados para garantir compatibilidade.
- **Controle de Volume**: O volume padrão dos sons e da música de fundo foi ajustado para proporcionar uma experiência agradável, mas pode variar dependendo do dispositivo.

## 🤝 Contribuições

Contribuições são bem-vindas! Se você encontrar um bug, tiver uma sugestão de melhoria ou quiser adicionar uma nova funcionalidade, sinta-se à vontade para criar um issue ou pull request. Siga estas etapas:

1. Faça um fork do repositório.
2. Crie um novo branch com sua contribuição (`git checkout -b feature/minha-contribuicao`).
3. Faça commit das suas alterações (`git commit -am 'Adiciona minha contribuição'`).
4. Faça push para o branch (`git push origin feature/minha-contribuicao`).
5. Abra um Pull Request.

## ⚙ Suporte

Se você encontrar algum problema ou tiver dúvidas sobre o uso deste projeto, por favor, abra um issue para discussão.

Desenvolvido com <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Sparkling%20Heart.png" alt="Sparkling Heart" width="25" height="25" /> por Amadeo Bon para contribuir com a comunidade. Boa navegação!

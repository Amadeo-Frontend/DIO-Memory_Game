# 🎃 Halloween Memory Game 🎃

Bem-vindo ao **Halloween Memory Game**, um jogo da memória temático de Halloween desenvolvido em HTML, CSS e JavaScript. Teste sua memória encontrando todos os pares de cartas assustadoras! 👻🧛🧟‍♂️

## 🎯 Visão Geral

Este projeto é um jogo da memória simples e divertido com tema de Halloween. O objetivo é encontrar todos os pares de cartas correspondentes o mais rápido possível. Quando dois cartões não correspondem, eles tremem para indicar o erro. Ao encontrar todos os pares, uma notificação aparece para parabenizá-lo pela vitória! 🥳

## 🚀 Funcionalidades

- **Embaralhamento Aleatório**: As cartas são embaralhadas a cada novo jogo.
- **Animação de Virada**: As cartas viram com uma animação suave.
- **Efeito de Shake**: Quando dois cartões não correspondem, eles tremem.
- **Notificação de Vitória**: Um toast aparece quando todos os pares são encontrados.
- **Reinício do Jogo**: Opção para reiniciar o jogo a qualquer momento.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura do jogo.
- **CSS3**: Estilização e animações.
- **JavaScript**: Lógica do jogo e manipulação do DOM.

## 🎮 Como Jogar

1. Abra o jogo em seu navegador.
2. Clique em uma carta para virá-la.
3. Clique em outra carta para tentar encontrar o par correspondente.
4. Se as cartas corresponderem, elas permanecerão viradas.
5. Se não corresponderem, elas irão tremer e virarão de volta após a animação.
6. Repita até encontrar todos os pares.
7. Ao vencer, um toast aparecerá no canto superior direito.

## 📷 Demonstração



https://github.com/user-attachments/assets/a6f44381-3aaf-47df-ad3c-1d3559c45dae



## 📝 Explicação do Código

### Manipulação do DOM com JavaScript

O JavaScript desempenha um papel crucial no funcionamento do jogo, sendo responsável por criar dinamicamente os elementos, gerenciar a lógica do jogo e responder às interações do usuário.

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
  - Os eventos de clique são removidos dessas cartas.
- **Correspondência Incorreta**:
  - As cartas tremem usando uma animação de shake.
  - Após a animação, as cartas são viradas de volta.

#### 5. **Controle de Estado**

Durante a verificação, cliques adicionais são desabilitados para evitar interferências. Após a comparação, os cliques são reabilitados.

#### 6. **Verificação de Vitória**

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

## 🤝 Contribuições

Contribuições são bem-vindas Se você encontrar um bug, tiver uma sugestão de melhoria ou quiser adicionar uma nova funcionalidade, sinta-se à vontade para criar um issue ou pull request. Siga estas etapas:

1. Faça um fork do repositório.
2. Crie um novo branch com sua contribuição (`git checkout -b feature/minha-contribuicao`).
3. Faça commit das suas alterações (`git commit -am 'Adiciona minha contribuição'`).
4. Faça push para o branch (`git push origin feature/minha-contribuicao`).
5. Abra um Pull Request.

## ⚙ Suporte 

Se você encontrar algum problema ou tiver dúvidas sobre o uso deste projeto, por favor, abra um issue para discussão.

Desenvolvido com ❤️ por Amadeo Bon para contribuir com a comunidade. Boa navegação!


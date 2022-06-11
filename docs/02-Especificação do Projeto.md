# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="01-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários. 

## Personas

|   Regina Gonçalves   |                                    |                |
|--------------------|------------------------------------|----------------------------------------|
|![regina](https://user-images.githubusercontent.com/91505442/164085434-c3ed4fd0-8c56-44aa-b943-fea130f8f9b3.png)|**Idade**: 29 - **Ocupação**: Mestre em geoprocessamento, funcionária de uma empresa de engenharia e meio ambiente **Papel**: doadora de recursos para ONGs. Adotante. |Aplicativos: Instagram, Linkedin, Aplicativos diversos.|
|**Motivações:** Estabilidade, Flexibilidade, Tarefa realizada  |**Frustrações:** Desorganização, Pessoas negativas, Desinteresse |**Hobbies:** Trilhas, Slackline  | 
<br>

|   Carina Gomes   |                                    |                |
|--------------------|------------------------------------|----------------------------------------|
|![carina](https://user-images.githubusercontent.com/91505442/164091491-3629a877-2464-4595-85d5-03d7ed57e7ed.png)|**Idade:** 45 - **Ocupação:** Proprietária de uma empresa nacional de grande porte - **Papel:** Doadora de recursos para ONGs  |Aplicativos: Instagram, Linkedin, Aplicativos diversos.|
|**Motivações:** Atividades dentro do prazo, Clientes, Equipe unida  |**Frustrações:** Atrasos, Perdas |**Hobbies:** Viajar, Jardinagem  |

<br>

|   Guilherme Santos   |                                    |                |
|--------------------|------------------------------------|----------------------------------------|
|![guilherme](https://user-images.githubusercontent.com/91505442/164117354-6f08c3ad-5f31-4442-b8de-82538bf8b1dc.png)|**Idade:** 39 - **Ocupação:** Funcionário de uma ONG de animais, responsável pela triagem de possíveis adotantes - **Papel:** facilitador do processo de adoção de animais  |Aplicativos: Instagram, Linkedin, Aplicativos de bancos.|
|**Motivações:** Generosidade, Comprometimento |**Frustrações:** Destruição do meio ambiente, Grosseria  |**Hobbies:** Leitura, Natação |

<br>

|   Bernardo Almeida   |                                    |                |
|--------------------|------------------------------------|----------------------------------------|
|![bernardo](https://user-images.githubusercontent.com/91505442/164119873-3c97363f-e0cc-4ab7-929c-7b4ac302eff9.png)|**Idade:** 32 - **Ocupação:** fundador de uma instituição para adoção animal - **Papel:** empreendedor do ramo de adoção de animais |Aplicativos: Instagram, WhatsApp, TikTok.|
|**Motivações:** Bem estar animal, Família, Amigos  |**Frustrações:** Descompromisso, Estresse, instabilidade  |**Hobbies:** Pintura, Tocar violão  |



## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários. 

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Regina Gonçalves    | fácil acesso a informações sobre animais de estimação para adoção (RF-03, RF-04)| conseguir adotar um gato/cachorro com mais facilidade |
|Regina Gonçalves    |achar instituições que precisam de ajuda com alimentação (RF-06)           |que eu possa ajudar com pacotes de ração esporadicamente |
|Guilherme Santos    |fazer o cadastro de pessoas que queiram adotar (RF-02)                     |que o processo de adoção seja mais ágil e seguro         |
|Guilherme Santos    |manter um registro de animais para adoção atualizado, com seus dados, cores e perfil de personalidade (RF-04) |que os adotantes tenham fácil acesso as informações destes animais  |
|Carina Gomes        |encontrar instituições de adoção de  animais, que precisem de ajuda de custo (RF-06) |para contribuir financeiramente todos os meses |
|Bernardo Almeida    |Localizar voluntários com interesse em oferecer lar temporário (RF-05)     |Para que o animal possa te um lar até o dia da adoção, assim a instituição tenha espaço para abrigar mais animais.|
|Bernardo Almeida    |um site para cadastro de animais e pessoas que queiram adotar (RF-01, RF-02) |para facilitar a união entre um animal de estimação e seu futuro tutor |

<br>

## Requisitos do Projeto

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir. 

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve apresentar em sua página principal, a apresentação do site, seu objetivo, os serviços prestados, depoimentos de usuários, e um link para cadastro.  | ALTA | 
|RF-002|Na página de cadastro, deve haver uma opção de Login ou Cadastro, separado entre acesso de Usuário ou ONG.  | ALTA | 
|RF-003|O site deve possuir uma página de busca, onde o Usuário poderá visualizar a lista de animais para doação. | ALTA | 
|RF-004|Na mesma página de busca do RF-03, deve haver um filtro para pesquisas avançadas (cidade, tipo de animal, idade, ONG, etc).| ALTA | 
|RF-005|O site deve possuir uma página de login, na qual o usuário possa inserir seu login e senha após cadastrar-se.| ALTA | 
|RF-006|À escolha do usuário, o site deve possuir uma opção para adoção definitiva ou temporária. | MÉDIA |
|RF-007|O site deve ter uma página para Apoiadores, onde o Usuário poderá realizar doações para ONGs ou para o site. | MÉDIA |
|RF-008|O site deve ter uma página para Usuários ou ONGs consultarem seu perfil. | BAIXA |
|RF-009|O site deve ter uma página para contato de Usuários ou ONGs, com a equipe do site. | BAIXA |
|RF-0010|Deve ter uma página com a história do site. | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001|O Projeto deve estar disponível em um ambiente acessível publicamente na Internet (Github).  | ALTA | 
|RNF-002|O site deverá ser responsivo, permitindo o acesso em diversos tamanhos de tela. |  MÉDIA | 
|RNF-003|O site deve ser desenvolvido com as tecnologias HTML, CSS e Javascript.  |  MÉDIA | 
|RNF-004|O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge) |  ALTA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01| O projeto deverá estar pronto para testes até 12/06/2022.  |
|RE-02|O Projeto Final (Front End) deverá ser entregue até 26/06/2022. |

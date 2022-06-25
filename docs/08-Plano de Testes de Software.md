# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


#Os requisitos para realização dos testes de software são:
•	Site publicado na internet;
•	Navegador da internet – Chrome, Firefox ou Edge;
•	Conectividade de internet para acesso de plataformas (APIS).

Os testes funcionais a serem realizados no site são descritos a seguir:

Caso de teste – Visualizar a página de login.

Requisitos associados - 
RNF-01	O Projeto deve estar disponível em um ambiente acessível publicamente na Internet (Github). 
RNF-02	O site deverá ser responsivo, permitindo o acesso em diversos tamanhos de tela.
RNF-03	O site deve ser desenvolvido com as tecnologias HTML, CSS e Javascript. 
RNF-04	O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge)
RF-005	O site deve possuir uma página de login, na qual o usuário possa inserir seu login e senha após cadastrar-se.

Objetivo do teste - Verificar se é possível visualizar todas as funções de uma página de login, como inserção de usuário e senha, botão de entrada e esquecimento de senha.
Passos – 
1)	Acessar o navegador;
2)	Inserir o endereço do site;
3)	Visualizar a página de login.

Critérios de êxito – 
•	Deve haver um formulário para inserção de e-mail e senha;
•	Deve haver um botão para que usuário possa logar.


Caso de teste 2 – Acessar site com e-mail e senha válidos.

Requisitos associados - 
RNF-01	O Projeto deve estar disponível em um ambiente acessível publicamente na Internet (Github). 
RNF-02	O site deverá ser responsivo, permitindo o acesso em diversos tamanhos de tela.
RNF-03	O site deve ser desenvolvido com as tecnologias HTML, CSS e Javascript. 
RNF-04	O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge)
RF-005	O site deve possuir uma página de login, na qual o usuário possa inserir seu login e senha após cadastrar-se.

Objetivo do teste - Verificar se é acessar o site com usuário e senha e ao clicar no botão de entrar, o usuário logar ou não no site.
Passos – 
1)	Acessar o navegador;
2)	Inserir o endereço do site;
3)	Visualizar a página de login;
4)	Inserir e-mail;
5)	Inserir senha;
6)	Clicar no botão “Entrar”;

Critérios de êxito – 
•	Caso insira dados correto, retornar mensagem de sucesso;
•	Caso insira dados incorretos, retornar mensagem de falha.


Caso de Teste 3 - Cadastro Padrão ONG

Requisitos Associados -
RF-02 - Na página de cadastro, deve haver uma opção de Login ou Cadastro, separado entre acesso de Usuário ou ONG.

Objetivo do Teste -
Verificar se o cadastro de Ong está acontecendo normalmente

Passos -
1) Acessar o Navegador
2) Informar o endereço do Site
3) Visualizar a página principal
4) Clicar em Cadastro no menu
5) Escolher a opção Ong e clicar
6) Preencher todos os campos
7) Clicar no botão Cadastre-se

Critérios de Êxito -
Após o procedimento ser realizado, a tela deverá ser alterada, apresentando uma tela com todos os dados preenchidos pelo usuário.

Caso de Teste 4 – Visualização dos dados cadastrados

Requisitos Associados -
RF-07 - O site deve ter uma página para Usuários ou ONGs consultarem seu perfil.

Objetivo do Teste -
Verificar se os dados estão sendo exibidos corretamente na página de dados cadastrados.

Passos -
1) Acessar o Navegador
2) Informar o endereço do Site
3) Visualizar a página principal
4) Clicar em Cadastro no menu
5) Escolher a opção Ong e clicar
6) Preencher todos os campos
7) Clicar no botão Cadastre-se

Critérios de Êxito -
Após o procedimento ser realizado, a tela deverá ser alterada, apresentando uma tela com todos os dados preenchidos pelo usuário.


Caso de teste 5 – Visualizar a página de Cadastro de Adotante.
Requisitos associados - RNF-01 O Projeto deve estar disponível em um ambiente acessível publicamente na Internet (Github). RNF-03 O site deve ser desenvolvido com as tecnologias HTML, CSS e Javascript. RNF-04 O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge) RF-005 O site deve possuir uma página com e cadastro de Adotante, na qual o usuário possa inserir seus dados para cadastrar.
Objetivo do teste - Verificar se é possível visualizar  e inserir os dados no formulario.

Passos –
1.	Acessar o navegador;
2.	Informar o endereço do Site
3.	Visualizar a tela de cadastro de Adotante
4.	Preencher todos os campos
5.	Clicar no botão Cadastre-se
Critérios de Êxito - Após o procedimento ser realizado o formulario preenchido será apagado demonstrando que foi cadastrando o Adotante.

Caso de teste 6 – Visualizar Cadastros realizados de Adotante.
Requisitos associados - RNF-01 O Projeto deve estar disponível em um ambiente acessível publicamente na Internet (Github). RNF-03 O site deve ser desenvolvido com as tecnologias HTML, CSS e Javascript. RNF-04 O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge) RF-005 O site deve possuir uma página com e cadastro de Adotante, na qual o usuário possa inserir seus dados para cadastrar.
Objetivo do teste - Verificar se é possível visualizar  os cadastros realizados 

Passos –
1.	Acessar o navegador;
2.	Informar o endereço do Site
3.	Visualizar a tela de cadastro de Adotante
4.	Clicar no botão Listar
Critérios de Êxito - Após o procedimento ser realizado será apresentado todos os cadastros realizados de Adotante.



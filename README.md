# Projeto Integrador - Achou Serviço

🛠️ Achou Serviço

Achou Serviço é uma plataforma que conecta clientes a prestadores de serviços de diferentes áreas.
O sistema funciona como um marketplace: o cliente busca o serviço desejado, encontra prestadores cadastrados, entra em contato via WhatsApp e, após negociação, o prestador gera uma Ordem de Serviço (OS) dentro da plataforma.
Projeto desenvolvido como parte do Projeto Integrador da faculdade.

---

##📌 Objetivo

Oferecer uma plataforma simples, intuitiva e segura para aproximar clientes e prestadores, facilitando o contato, a formalização de serviços e a valorização do trabalho através de avaliações e conteúdos no blog.

---

##📋 Requisitos do Sistema

##✅ Requisitos Funcionais (RF)

Cadastro e Perfis

RF01: O sistema deve permitir o cadastro de clientes e prestadores.
RF02: O sistema deve permitir que clientes e prestadores editem seus dados.
RF03: O prestador deve poder cadastrar categorias de serviço, descrição e área de atendimento.

Autenticação

RF04: O sistema deve permitir login com email e senha.
RF05: O sistema deve diferenciar perfis de cliente e prestador.

Busca e Seleção

RF06: O cliente deve poder pesquisar prestadores por tipo de serviço.
RF07: O cliente deve poder filtrar prestadores por localização, preço e avaliação.
RF08: O sistema deve exibir informações do prestador, incluindo botão de contato via WhatsApp.

Solicitação e Ordem de Serviço

RF09: O cliente deve poder iniciar contato com prestadores via WhatsApp.
RF10: O prestador deve poder criar uma OS vinculada a um cliente após a negociação.
RF11: A OS deve conter serviço solicitado, valor, data/hora e status.
RF12: O sistema deve permitir atualização do status da OS.

Avaliações

RF13: O cliente deve poder avaliar o prestador após a conclusão do serviço.
RF14: O sistema deve calcular e exibir a média de avaliações no perfil do prestador.

Área de Blog (Prestador)

RF15: O prestador deve poder criar, editar e excluir artigos no blog.
RF16: Os artigos devem ser exibidos no perfil do prestador.

---

##⚙️ Requisitos Não Funcionais (RNF)

Usabilidade

RNF01: Interface responsiva e intuitiva.
RNF02: Disponível inicialmente em português.

Desempenho

RNF03: Busca deve responder em até 3 segundos.
RNF04: Suporte a pelo menos 500 usuários simultâneos.

Segurança

RNF05: Senhas criptografadas.
RNF06: Autenticação via tokens (JWT/OAuth).
RNF07: Apenas usuários autenticados podem acessar áreas restritas.

Confiabilidade

RNF08: Backup diário dos dados.
RNF09: Uptime mínimo de 99%.

Escalabilidade

RNF10: O sistema deve permitir expansão de usuários sem grandes mudanças.

Manutenibilidade

RNF11: Código deve seguir boas práticas e estar documentado.
RNF12: Deve permitir fácil incluso de novas funcionalidades.

---

##👥 Equipe
- Fabio Henrique   
- Igor Ibiapino 
- Miguel Matias

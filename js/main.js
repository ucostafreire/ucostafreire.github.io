// script.js

// Função para carregar páginas dinamicamente
/* Este arquivo vai gerenciar o carregamento dinâmico das páginas e a validação do formulário.*/
function loadPage(page) {
    const content = document.getElementById('content');

    switch (page) {
        case 'inicio':
            content.innerHTML = `
                <h1>Bem-vindo ao meu Portfólio Pessoal</h1>
                <p>Este é o meu portfólio onde você pode saber mais sobre mim, minha formação e Curriculum Vitae.</p>
            `;
            break;
        case 'sobre':
            content.innerHTML = `
<h1>Sobre Mim</h1>
        <p><b>Olá, eu sou Francisco Ubiratan Costa Freire. </b></b>
        </p><br>

        <p> Com mais de 25 anos de experiência profissional. Minha trajetória profissional se iniciou na indústria de
            plásticos, onde desenvolvi habilidades em gestão de estoque e ferramentas como Kambam e 5S. <br>

            Ao longo dos anos, construí uma carreira sólida na área de Engenharia Civil, com foco em manutenção
            industrial, gestão de equipes multidisciplinares, planejamento e controle de obras, elaboração de orçamentos
            e fiscalização de trabalhos. <br>

            Minhas experiências em empresas renomadas como Natura, ISS, M&RBR Engenharia e CGE Companhia Geral de
            Edificações LTDA me proporcionaram um vasto conhecimento em diferentes áreas, como:</p><br>
        <ul class="list">
            <li>Manutenção predial e industrial</li>
            <li>Gerenciamento de projetos</li>
            <li>Coordenação de equipes</li>
            <li>Elaboração de propostas e orçamentos</li>
            <li>Fiscalização e controle de obras</li>
        </ul><br>
        <p>Minha formação acadêmica sólida, completada por uma busca constante por aprimoramento profissional, me
            permitiu construir base para minha carreira: </p><br>
        <ol class="list">
            <li>Técnico em Edificações - Escola Técnica Vasco Antônio Venchiarutti</li>
            <li>Engenheiro Civil - UniAnchieta – Centro Universitário Padre Anchieta</li>
            <li>Licenciatura em Matemática - Uniplena Educacional</li>
            <li>No momento cursando Bacharelado em Engenharia de Software - UNINTER Centro Universitário Internacional
                (conclusão prevista para julho de 2026)</li>
        </ol><br>

        <p>Atualmente, dedico-me ao ensino como professor de educação do ensino médio pelo governo do estado de São
            Paulo, compartilhando meus conhecimentos e experiências com os futuros profissionais.</p><br>
        <h2>Competências</h2><br>
        <ul class="list">
            <li>Microsoft Office;</li>
            <li>Construção;</li>
            <li>Orçamento;</li>
            <li>Microsoft Office;</li>
            <li>Matemática.</li><br><br>

        </ul>
            `;
            break;
        case 'formacao':
            content.innerHTML = `
        <h1>Formação Educacional</h1><br>
        <h3>Minha formação educacional</h3><br>

        <ul class="list">
            <li>
                <b>UNINTER Centro Universitário InternacionalUNINTER Centro Universitário Internacional</b><br>
                Bacharelado engenharia de software , Programação de Computadores - Aplicativos EspecíficosBacharelado
                engenharia de software , Programação de Computadores - Aplicativos Específicos
                jul de 2026
            </li><br>
            <li><b>UniAnchieta – Centro Universitário Padre Anchieta </b><br>
                Engenheiro Civil</li><br>
            <li><b>Escola Técnica Vasco Antônio Venchiarutti</b><br>
                Tecnico em edificações

            </li>
        </ul>
            `;
            break;
        case 'portfolio':
            content.innerHTML = `
        <h1>Portfólio</h1><br><br>
        <h3>Aqui estão alguns dos meus trabalhos:</h3><br>
        <h4>GOVERNO DO ESTADO DE SÃO PAULO</h4>
        <h5>professor</h5>
        <p>Tempo integral desde fevereiro de 2021 até o momento</p><br>

        <h4>CGE COMPANHIA GERAL DE EDIFICAÇÕES LTDACGE COMPANHIA GERAL DE EDIFICAÇÕES LTDA</h4>
        <H5>Engenheiro Civil</H5>
        <p>1 ano 4 meses de abril de 2018 até julho de 2019</p>
        <p>Planejamento, gerenciamento, compras técnicas, execução e fiscalização de obras. Elaboração de planilhas e
            documentos para concorrência, participação em licitações e execução de pavimento rígido na sede do município
            de Ipixuna/AM. Competências: Construção · Orçamento · Microsoft Office</p><br>
        <h4>M&Rbr Engenharia</h4>
        <h5>Assistente de engenharia</h5>
        <p>2 anos 6 meses de agosto de 2015 até janeiro de 2018</p>
        <p>Planejamento de atividades técnicas das obras no ramo industrial, bem como a fiscalização na execução de
            trabalhos, levantamento e especificação de materiais e mão de obra, para elaboração de planilhas
            orçamentárias.Planejamento de atividades técnicas das obras no ramo industrial, bem como a fiscalização na
            execução de trabalhos, levantamento e especificação de materiais e mão de obra, para elaboração de planilhas
            orçamentárias.</p><br>
        <h4>ISS A/S</h4>
        <h5>Supervisor de manutenção</h5>
        <p>2 anos 4 meses de julho de 2012 até outubro de 2014</p>
        <p>Gestão de equipes multidisciplinares em grande grupo de Shopping Center e Hospitais.</p><br>
        <h4>Gutierrez Empreendimentos e Participações Ltda</h4>
        <h5>Técnico em edificações</h5>
        <p>1 ano 3 meses de maio de 2011 até julho de 2012</p>
        <p>Gestão de equipe Civil e Pintura, Planejamento, manutenção, conservação e reabilitação da pista e pátio do
            aeroporto de Viracopos.Gestão de equipe Civil e Pintura, Planejamento, manutenção, conservação e
            reabilitação da pista e pátio do aeroporto de Viracopos.</p><br>
        <h4>Manserv Montagem e Manutenção LTDA</h4>
        <h5>Supervisor de manutenção</h5>
        <p>4 anos 6 meses de novembro de 2006 até abril de 2011</p>
        <h5>Líder de equipe Civil</h5>
        <p>9 meses de março de 2006 até novembro de 2006</p>
        <h5>Pintor</h5>
        <p>abril de 2005 a março de 2006 - 1 ano</p> <br>
        <h4>BJP Manutenção e Operação de Utilidades LTDA</h4>
        <h5>Pintor Industrial</h5>
        <p>2 anos 9 meses de julho de 2002 até março de 2005</p><br>
        <h4>ASTRA S/A INDÚSTRIA E COMÉRCIO</h4>
        <h5>Ajudante GeralAjudante Geral</h5>
        <p>2 anos 10 meses de janeiro de 1995 até outubro de 1997</p><br>
            `;
            break;
        case 'contato':
            content.innerHTML = `
        <h1>Contato</h1>
        <form>
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" required></textarea>

            <button type="submit">Enviar</button>
        </form>
            `;
            break;
        default:
            content.innerHTML = `<p>Página não encontrada.</p>`;
    }
}

// Função para validar o formulário de contato
function validateForm() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    alert('Formulário enviado com sucesso!');
    return true;
}

// Carregar página inicial ao abrir o site
window.onload = () => {
    loadPage('inicio');
}
/* loadPage: Carrega o conteúdo da página solicitada dinamicamente, atualizando o elemento main com o ID content.
validateForm: Valida os campos do formulário de contato, verificando se todos os campos estão preenchidos antes de enviar.
window.onload: Garante que a página inicial seja carregada automaticamente ao abrir o site.*/
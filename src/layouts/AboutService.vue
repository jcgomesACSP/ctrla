<template>
  <div>
    <menu-component></menu-component>
    <div class="container-fluid" id="about-service">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6">
              <p id="p-about-title">Sobre o Serviço</p>
              <p id="p-about-body">
                Control A (Control All) é a plataforma inovadora, fácil de usar,
                segura e gratuita, voltada exclusivamente para os operadores do
                comércio exterior, de iniciantes a super experientes nas
                operações de importação e exportação.
              </p>
              <p id="p-about-continue-body">
                Foi criada pela São Paulo Chamber of Commerce / Associação
                Comercial de São Paulo, com o apoio do CECIEx, para facilitar as
                operações de comércio exterior das empresas brasileiras.
              </p>
            </div>
            <div class="col-lg-6">
              <div id="screen">
                <img src="../assets/OS971A1.png" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="explanation">
      <p id="p-title-explanation">
        Você que é indústria, produtor, fabricante, empresa comercial
        importadora e exportadora, trading company ou prestador de serviço do
        comércio exterior poderá a partir de agora:
      </p>
      <ul>
        <li>
          <p id="p-control">Controlar</p>
          <div id="control-explanation">
            todos os procedimentos envolvidos em uma importação e/ou exportação:
            <br />
            características da operação, negociação, providências pré-embarque,
            <br />
            emissão de documentos, processo aduaneiro e conclusão financeira.
          </div>
        </li>
        <li>
          <p id="p-share">Compartilhar</p>
          o fluxo de cada etapa de vários processos com sua equipe.
        </li>
        <li>
          <p>Conectar-se</p>
          com potenciais fornecedores e receber as melhores propostas.
        </li>
      </ul>
    </div>

    <div id="plataform-for-all">
      <p>
        A plataforma une todos os <b>processos</b> de forma <b>automatizada</b>,
        disponibilizando os <b>modelos de documentos</b> e com a
        <b>emissão automática</b> de alguns deles.
      </p>
    </div>
    <hr />

    <div class="container-fluid" id="services">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-4">
              <p id="p-emission-service">Emissão de Documento Automático</p>
            </div>
            <div class="col-lg-4 exportation-body">
              <p id="p-exportation-service">Exportação</p>
              <ul>
                <li>Proforma</li>
                <li>Commercial Invoice</li>
                <li>Packing List</li>
                <li>DU-E</li>
                <li>Carta instruções despachante</li>
                <li>Carta instruções transportadora</li>
                <li>Carta instruções banco</li>
              </ul>
            </div>
            <div class="col-lg-4 importation-body">
              <p id="p-importation-service">Importação</p>
              <ul>
                <li>DUIMP Espelho</li>
                <li>Carta instruções despachante</li>
                <li>Carta instruções transportadora</li>
                <li>Carta instruções banco</li>
                <li>Relatório do custo total da operação</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr />

    <div id="final-message">
      <p id="p-final-message-title">
        Você consegue controlar, acompanhar e analisar todos os seus
        procedimentos de importação e exportação em um só lugar, mesmo que você
        tenha diversas operações ocorrendo ao mesmo tempo.
      </p>

      <p id="p-final-message-body">É grátis! Faça o login e comece a usar!</p>

      <button class="btn btn-info btn-start-now">Começar agora gratuitamente</button>
    </div>
  </div>
</template>

<style scoped>
#about-service {
  margin-top: 138px;
  margin-right: 104px;
  width: 100%;
  height: 434;
}

#p-about-title {
  margin-top: 52px;
  margin-left: 82px;
  font: Open Sans;
  font-size: 32px;
  font-weight: bold;
}

#p-about-body {
  margin-top: 48px;
  margin-left: 84px;
  margin-right: 132px;
  font: Open Sans;
  font-size: 24px;
  font-weight: normal;
}

#p-about-continue-body {
  margin-top: 48px;
  margin-left: 84px;
  margin-right: 132px;
  font: Open Sans;
  font-size: 17px;
  font-weight: normal;
}

#explanation {
  background-color: #0a465a;
  height: 368px;
  margin-top: 43px;
}

#explanation ul {
  display: flex;
  list-style: none;
}

#explanation ul li {
  width: calc(100%/3);
  display: block;
  padding: 0 15px;
  color: #fff;
  padding-top: 40px;
  padding-left: 44px;
}

#explanation ul li:nth-child(1) {
  width: 50%;
}



#p-title-explanation {
  font: Open Sans;
  font-size: 18px;
  font-weight: normal;
  color: #fff;
  padding-top: 72px;
  padding-left: 84px;
  width: 1272px;
}

/* #p-control {
    padding-left: 82px;
    font: Open Sans;
    color: #fff;
    font-size: 32px;
    font-weight: normal;
}

#control-explanation {
    font: Open Sans;
    font-size: 18px;
    font-weight: normal;
    color: #fff;
    padding-left: 84px;    
}

#p-share {
    padding-left: 82px;
    font: Open Sans;
    color: #fff;
    font-size: 32px;
    font-weight: normal;
} */

/* ul {
    list-style: none;
} */

#plataform-for-all {
  margin-top: 96px;
  margin-left: 84px;
  margin-right: 84px;
  font-size: 32px;
}

hr {
  margin-right: 84px;
  margin-left: 84px;
  margin-top: 96px;
}

#services {
  margin-top: 64px;
  margin-left: 84px;
}

#p-emission-service {
  font: Open Sans;
  font-size: 40px;
  font-weight: bold;
  width: 304px;
  height: 153px;
}

#p-exportation-service {
  width: 175px;
  height: 41px;
  font: Open Sans;
  font-size: 32px;
  font-weight: bold;
  color: #39b4d2;
}

#p-importation-service {
  width: 175px;
  height: 41px;
  font: Open Sans;
  font-size: 32px;
  font-weight: bold;
  color: #39b4d2;
}

.exportation-body ul {
  margin-top: 37px;
  width: 338px;
  height: 161px;
}

.exportation-body ul li {
  font-size: 18px;
  font-weight: normal;
  font: Open Sans;
}

.importation-body ul {
  margin-top: 37px;
  width: 338px;
  height: 161px;
}

.importattion-body ul li {
  font-size: 18px;
  font-weight: normal;
  font: Open Sans;
}

#final-message {
    margin-top: 80px;
    margin-left: 84px;
    margin-right: 97px;
    width: 1259px;
    height: 60px;
}

#p-final-message-title {
    font: Open Sans;
    font-size: 24px;
    font-weight: normal;
}

#p-final-message-body {
    margin-top: 64px;
    margin-left: 434;
    margin-left: 434px;
    font-weight: bold;
    font-size: 32px;
}

.btn-start-now {
    margin-top: 60px;
    margin-left: 594px;
    margin-left: 594px;
    margin-bottom: 82px;
}
</style>

<script>
import MenuComponent from "../components/Menu.vue";
export default {
  components: {
    MenuComponent,
  },
};
</script>
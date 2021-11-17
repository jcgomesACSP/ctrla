<template>
  <div>
    <div class="menu-nav">
      <nav :class="secondPage ? 'navbar navbar-expand-lg fixed-top navbar-second-page' : 'navbar navbar-main-page navbar-expand-lg fixed-top'" role="navigation">
        <a class="navbar-brand" href="/">
          <img
            src="../assets/logo_ctrl_+A_claro.png"
            width="84"
            height="72"
            alt="Ctrl A"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto ul-align-menu">
            <li class="nav-item active">
                <router-link class="nav-link" :to="{name: 'about'}">
                    Sobre o Serviço
                </router-link>
            </li>
            <li class="nav-item">
              <a :class="secondPage ? 'nav-link' : 'nav-link-second-page'" href="#">Funcionalidades</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Como Funciona</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Dúvidas Frequentes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Parcerias e Benefícios</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <button class="btn btn" id="btn-login" type="submit">
                Login
            </button>
            <button class="btn btn-info" id="btn-cadastrar" type="submit">
              Cadastre-se
            </button>
          </form>
        </div>
      </nav>
    </div>
  </div>
</template>
<style scoped>
.menu-nav {
  background: none;
  border: none;
}

.nav-link {
  font: Open Sans;
  font-style: SemiBold;
  font-size: 14px;
  line-height: 19px;
  line-height: 100%;
  vertical-align: Top;
  color: #ffffff;
  text-shadow: 1px 1px#000;
  margin-right: 60px;
}

.nav-link-second-page {
  font: Open Sans;
  font-style: SemiBold;
  font-size: 14px;
  line-height: 19px;
  line-height: 100%;
  vertical-align: Top;
  color: #000;
  margin-right: 60px;
}

.navbar-brand {
  margin-right: 100px;
  margin-left: 60px;
}

.menu-nav .navbar-main-page {
  background: rgba(50, 50, 50, 0.7);
}

.menu-nav .navbar-second-page {
  background: #fff
}

#btn-cadastrar {
  border-radius: 3px;
  width: 128px;
  height: 48px;
  margin-right: 84px;
}

#btn-login {
  border-radius: 3px;
  border-color: #39b4d2;
  color: #39b4d2;
  width: 90px;
  height: 48px;
  margin-right: 20px;
}
</style>

<script>
export default {
  data() {
    return {
      secondPage: false
    }
  }
};
</script>
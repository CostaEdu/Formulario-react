import React from "react";
import logo from "../../components/img/logo/logo-black.png"

export default function Forgot() {
  return (
    <div className='container py-5 h-100'>
      <div className='row d-flex justify-content-center align-items-center h-100'>
        <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
          <div className='card bg-light text-white'>
            <div className='card-body p-5 text-center'>
              <div className='md-4'>
                <img
                  src={logo}
                  onClick='redirectHome()'
                  role='button'
                  className='img-fluid w-25 p-2 mb-2'
                  alt='Voltar para a página inicial'
                />
                <h2 className='text-black fs-5 mb-3'>Esqueceu sua senha?</h2>
                <form id='form-email'>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='form-control form-control-lg'
                    placeholder='Digite seu E-mail'
                    required
                  />
                  <input
                    className='btn btn-outline-dark btn-lg px-5 mt-3 mb-3'
                    type='submit'
                    value='Enviar'
                    id='submit'
                  />
                </form>
              </div>

              <div>
                <p className='mb-0 text-black'>
                  Não tem uma conta?
                  <a
                    href='../pages/cadastro.html'
                    className='links links-color fw-bold'
                  >
                    Cadastre-se
                  </a>
                </p>
              </div>
              <div>
                <p className='mb-0 text-black'>
                  Já possui uma conta?
                  <a
                    href='../pages/login.html'
                    className='links links-color fw-bold'
                  >
                    Entre
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
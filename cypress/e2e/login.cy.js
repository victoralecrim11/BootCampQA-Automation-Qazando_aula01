/// <reference types="cypress" />

// funcionalidade
describe('Login', () => {

  beforeEach(() => {
    cy.visit('https://automationpratice.com.br/login')
    cy.wait(2000) // Aguarda a página carregar
    cy.viewport("iphone-6") // Redimensiona a tela para o tamanho do iPhone 6
  });

  it('deve fazer login com sucesso', () => {

    //preecnhe email e senha
    cy.get('#user').type('victoralecrim11@gmail.com')
    cy.get('#password').type('Majuvil@1109')

    //QUANDO 
    //clica em entrar
    cy.get('#btnLogin').click()

    //ENTÃO
    //valida a mensagem
    cy.get('#swal2-title').should('be.visible')
    cy.get('#swal2-title').should('have.text', 'Login realizado')

  })

  it('E-mail invalido', () => {


    //preecnhe email e senha
    cy.get('#user').type('dhbirfeibhebf')
    cy.get('#password').type('Majuvil@1109')

    //clica em entrar
    cy.get('#btnLogin').click()

    cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
  })

  it('Senha invalida', () => {

    //preecnhe email e senha
    cy.get('#user').type('victoralecrim11@gmail.com')
    cy.get('#password').type('123')
    //clica em entrar
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should('have.text', 'Senha inválida.')
  })


  it('Senha vázia', () => {

    //preecnhe email e senha
    cy.get('#user').type('victoralecrim11@gmail.com')
    //clica em entrar
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should('have.text', 'Senha inválida.')
  })

  it('E-mail vázio', () => {

    //preecnhe senha
    cy.get('#password').type('Majuvil@1109')
    //clica em entrar
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
  })

  it('Todos os campos vazios', () => {
    //clica em entrar
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
  })


})



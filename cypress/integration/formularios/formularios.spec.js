/// <reference types="Cypress" />


context('Formularios',()=>{
    //primero se define la url, en este caso toma la baseUrl+ cy.visit.
    beforeEach(()=>{
        cy.viewport(1280, 720) // Ancho: 1280px, Alto: 720px
        cy.visit('/');
    })

   
    it('Test #1 : Evitar envio vacio en campos requeridos',()=>{
        cy.get('#g4072-fullname').clear(); // Vaciar el campo de nombre
        cy.get('#g4072-email').clear(); // Vaciar el campo de email

        cy.get('#contact-form-4072 > form').submit(); //envio el formulario
        cy.contains('Full Name is required'); //Verifico que el mensaje de error de nombre exista
        cy.contains('Email requires a valid email address'); //Verifico que el mensaje de error de email exista
        

    })
    
    it('Test #2 : Evitar envio con email vacio',()=>{
        cy.get('#g4072-fullname').clear(); // Vaciar el campo de nombre
        cy.get('#g4072-email').clear(); // Vaciar el campo de email

        cy.get('#g4072-fullname').type('Juan');
        cy.get('#contact-form-4072 > form').submit(); //envio el formulario

        cy.contains('Email requires a valid email address'); //Verifico que el mensaje de error de nombre exista

    })

    it('Test #3 : Evitar envio de nombre vacio',()=>{
        cy.get('#g4072-fullname').clear(); // Vaciar el campo de nombre
        cy.get('#g4072-email').clear(); // Vaciar el campo de email

        cy.get('#g4072-email').type('mail@mail.com');
        cy.get('#contact-form-4072 > form').submit(); //envio el formulario

        cy.contains('Full Name is required'); //Verifico que el mensaje de error de nombre exista

    })

    
    it('Test #4 : Validacion tipo de dato en nombre ',()=>{
        cy.get('#g4072-fullname').clear();

        cy.get('#g4072-fullname').type('Saul123!@#');
        cy.get('#g4072-email').type('saul@mail.com');

        cy.get('#contact-form-4072 > form').submit();
        cy.contains('Your message has been sent').should('not.be.visible'); 

    });
     
    it('Test #5 : Validacion de tipo de dato en email',()=>{
        cy.get('#g4072-fullname').type('Saul');
        cy.get('#g4072-email').type('saul');

        cy.get('#contact-form-4072 > form').submit();
        cy.contains('Email requires a valid email address');
    });

    it('Test #6 : Longitud maxima en nombre',()=>{
        cy.get('#g4072-fullname').clear();
        cy.get('#g4072-fullname').type('ñasldkjfñlaksdjfñlaskjdflñkasjflñkasjfñlkasjdflkjasñlkdfjlaskjdflñaskjflaksjdflñaskjdflñaksdjfñlaskjflakñsdjfñlkasjdflñkasjdflñaksjdfñlkasjdflñkajsdflñkjasdlñkfjalñskdjfaslñkdjflaksdjflaksdjflñaskjdfklasdjflaskdjflakñsdjflaskdjflaksjdflkasdjflkasdjflaskdjlkasdjflñaksjdflñaksdj');
        cy.get('#g4072-email').clear();
        cy.get('#g4072-email').type('saul@mail.com');
        cy.get('.wp-block-jetpack-button > .wp-block-button__link').click();

    });

 
    it('Test #7 : Longitud minima en nombre',()=>{
        cy.get('#g4072-fullname').clear();
        cy.get('#g4072-fullname').type('a');
        cy.get('#g4072-email').clear();
        cy.get('#g4072-email').type('saul@mail.com');
        cy.get('.wp-block-jetpack-button > .wp-block-button__link').click();

        cy.contains('Your message has been sent').should('not.exist');
    });
    
   
    it('Test #8 : Longitud maxima en email',()=>{
        cy.get('#g4072-fullname').clear();
        cy.get('#g4072-fullname').type('asdasdas');
        cy.get('#g4072-email').clear();
        cy.get('#g4072-email').type('ñklasjdhfoñasdhbfklñajsdhbgvlkasjdhbfkjasdhbflkasjdhfklasjhdfljkasdhflkasjhfaklsjdhflaksjdhflkasjdhflasjkdhfklasjdhfkljasdhfklajshdfkljasdhfkljashdfkljashdfkljashdfkljashdlfjkhasldkjfh@mail.com');
        cy.get('.wp-block-jetpack-button > .wp-block-button__link').click();
        cy.get('.wp-block-jetpack-button > .wp-block-button__link').click();
        cy.get('#g4072-email').clear();
        cy.get('#g4072-email').type('oiuyrwqiouyroiquweyriouqweyruioqwyeriuqwyeriuqyweioruyqwiueryoiquwyeruioqweyruiqwyeriouqweyriuoqweyrouiqweyruioqweyrioqwueyrioqwuyerioqwueyriqwuoeyrioquweyriuqwyeriouqwyeoruiyqwoeuiryqiowueyrqiowuey@mail.com');
        cy.get('.wp-block-jetpack-button > .wp-block-button__link').click();

        cy.contains('Your message has been sent').should('not.exist');
    });

   
    it.only('Test #9 : Formato de email',()=>{
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#g4072-fullname').clear();
        cy.get('#g4072-fullname').type('saul');
        cy.get('#g4072-email').clear();
        cy.get('#g4072-email').type('mail');
        cy.get('.wp-block-jetpack-button > .wp-block-button__link').click();
        /* ==== End Cypress Studio ==== */

        cy.get('#contact-form-4072 > form').submit();
        cy.contains('Email requires a valid email address');
    });

  
    it('Test #10 : Formulario completo',()=>{

        cy.get('#g4072-fullname').type('saul'); 
        cy.get('#g4072-email').type('saul@mail.com'); 
        cy.get('#g4072-phonenumber').type('+543816999999');
        cy.get('#g4072-qatools-button').click();
        cy.get('#ui-id-2').click();
    
        cy.get('#contact-form-4072 > form').submit();
        cy.contains('Your message has been sent')
    
    });

    
    
})


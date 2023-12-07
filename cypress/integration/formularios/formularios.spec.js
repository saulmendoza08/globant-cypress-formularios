/// <reference types="Cypress" />


context('Formularios',()=>{
    //primero se define la url, en este caso toma la baseUrl+ cy.visit.
    beforeEach(()=>{
        cy.viewport(1280, 720) // Ancho: 1280px, Alto: 720px
        cy.visit('/');
    })

    /**
     *  Verifica que no se permita enviar el formulario 
     *  si se dejan campos obligatorios vacíos y que se 
     *  muestren los mensajes de error correspondientes.
     */
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

    /**
     * Verifica que se realice la validación correcta para
     * los diferentes tipos de datos en los campos del formulario 
     * (por ejemplo, correo electrónico, número de teléfono, fecha, etc.).
    */
    it('Test #4 : Validacion tipo de dato en nombre ',()=>{
        cy.get('#g4072-fullname').clear();

        cy.get('#g4072-fullname').type('Saul123!@#');
        cy.get('#g4072-email').type('saul@mail.com');

        cy.get('#contact-form-4072 > form').submit();
        cy.contains('Your message has been sent').should('not.be.visible'); 

    });
     
    it('Test #5 : Validacion de tipo de dato en email',()=>{
        
    });

    /**
     * Prueba de longitud mínima y máxima: Comprueba que 
     * se apliquen las restricciones de longitud mínima y máxima 
     * en los campos de texto y que se muestren los mensajes de error 
     * correspondientes cuando se superen los límites.
     *  */
    it('Test #6 : Longitud maxima y minima',()=>{});

    /**
     * Prueba de formato de correo electrónico válido: 
     * Verifica que se realice la validación correcta para el 
     * formato de correo electrónico y que se muestre un mensaje 
     * de error si se ingresa un correo electrónico inválido.
     */
    it('Test #7 : Formato de correo electronico',()=>{});
    
    /**
     * Prueba de selección de opciones: Si tienes campos de selección,
     *  verifica que se pueda seleccionar correctamente una opción y
     * que se muestren los mensajes de error si no se selecciona 
     * ninguna opción.
     */
    it('Test #8 : Seleccion de opciones',()=>{});

    /**
     * Prueba de visualización de mensajes de error: 
     * Verifica que se muestren los mensajes de error adecuados 
     * cuando se ingresen datos incorrectos o se omitan campos requeridos.
     */
    it('Test #9 : Prueba de visualizacion de mensajes de error',()=>{});

    /**
     * Prueba de caracteres especiales: Si tienes campos de texto, 
     * verifica que se manejen correctamente los caracteres especiales
     * y que no causen problemas en el envío del formulario.
     */
    it('Test #10 : Caracteres especiales',()=>{});

    
    
})


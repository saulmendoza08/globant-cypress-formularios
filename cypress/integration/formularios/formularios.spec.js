context('Formularios',()=>{
    //primero se define la url, en este caso toma la baseUrl+ cy.visit.
    beforeEach(()=>{
        cy.viewport(1280, 720) // Ancho: 1280px, Alto: 720px
        cy.visit('/');
    })

    /*  
        Verifica que no se permita enviar el formulario 
        si se dejan campos obligatorios vacíos y que se 
        muestren los mensajes de error correspondientes.
    */
    it('Test #1-1 : Envio de nombre vacio en campo',()=>{
        cy.get('#g4072-fullname').type('');
        cy.get('#g4072-email').type('mail');
    
        cy.get('form').submit();
    })
    
    it('Test #1-2 : Envio de email vacio en campo',()=>{
        cy.get('#g4072-fullname').type('Juan');
        cy.get('#g4072-email').type('');
    
        cy.get('form').submit();
    })

    /*
        Verifica que se realice la validación correcta para 
        los diferentes tipos de datos en los campos del formulario 
        (por ejemplo, correo electrónico, número de teléfono, fecha, etc.).
    */
    it('Test #2 : Tipo de dato',()=>{
        cy.get('form')
    });

    /*
        Prueba de envío exitoso: Comprueba que el formulario 
        se envíe correctamente con datos válidos y verifica 
        si se muestra un mensaje de éxito.
    */
    it('Test #3 : Envio exitoso',()=>{});

    /**
     * Prueba de longitud mínima y máxima: Comprueba que 
     * se apliquen las restricciones de longitud mínima y máxima 
     * en los campos de texto y que se muestren los mensajes de error 
     * correspondientes cuando se superen los límites.
     *  */
    it('Test #4 : Longitud maxima y minima',()=>{});

    /**
     * Prueba de formato de correo electrónico válido: 
     * Verifica que se realice la validación correcta para el 
     * formato de correo electrónico y que se muestre un mensaje 
     * de error si se ingresa un correo electrónico inválido.
     */
    it('Test #5 : Formato de correo electronico',()=>{});
    
    /**
     * Prueba de selección de opciones: Si tienes campos de selección,
     *  verifica que se pueda seleccionar correctamente una opción y
     * que se muestren los mensajes de error si no se selecciona 
     * ninguna opción.
     */
    it('Test #6 : Seleccion de opciones',()=>{});

    /**
     * Prueba de visualización de mensajes de error: 
     * Verifica que se muestren los mensajes de error adecuados 
     * cuando se ingresen datos incorrectos o se omitan campos requeridos.
     */
    it('Test #7 : Prueba de visualizacion de mensajes de error',()=>{});

    /**
     * Prueba de caracteres especiales: Si tienes campos de texto, 
     * verifica que se manejen correctamente los caracteres especiales
     * y que no causen problemas en el envío del formulario.
     */
    it('Test #8 : Caracteres especiales',()=>{});

    /**
     * Prueba de respuesta de servidor: Simula una respuesta 
     * del servidor con datos incorrectos y verifica que el formulario 
     * maneje correctamente esta respuesta y muestre los mensajes 
     * de error correspondientes.
     */
    it('Test #9 : Respuesta del servidor',()=>{});

    /**
     * Prueba de navegación: Verifica que después de enviar 
     * el formulario correctamente, se redirija correctamente 
     * a la página siguiente o se muestre el mensaje de 
     * confirmación correspondiente.
     */
    it('Test #10 : Prueba de navegacion',()=>{});
    
})


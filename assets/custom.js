(function ($) {

    $(document).ready(function () {
      
	/*
	 * Use without url event
	*/
	/*
        $('form#contact_form').on('submit', function(){
              if (typeof gtag == 'function') {
                  gtag('event', 'click', { 'event_category': 'formulario', 'event_label': 'contacto' });
              };
              if (typeof ga == 'function') {
                  ga('send','event', 'formulario', 'click', 'contacto');
              };
              if (typeof fbq == 'function') {
                  fbq('track','Lead', {content_name:'contacto'});
              };
        });
	*/
      
        /**
         * Asigna una clase en base al tipo de enlace
         */
        $('a[href^=tel]').addClass("link-phone");
        $('a[href^=mailto]').addClass("link-email").attr("target", "_blank");
		    $('a[href*="wa.me"]').addClass("link-whatsapp").attr("target", "_blank");
		    $('a[href*="m.me"]').addClass("link-messenger").attr("target", "_blank");
		    $('a[href*="maps.google"]').addClass("link-map").attr("target", "_blank");

        // Manejo de Eventos
        $('.link-phone').click(function () {
            if (typeof gtag == 'function') {
                gtag('event', 'click', { 'event_category': 'telefono', 'event_label': 'llamada' });
            };
            if (typeof ga == 'function') {
                ga('send','event', 'telefono', 'click', 'llamada');
            };
            if (typeof fbq == 'function') {
                fbq('track','Contact', {content_name:'telefono'});
            };
        });

        $('.link-email').click(function () {
            if (typeof gtag == 'function') {
                gtag('event', 'click', { 'event_category': 'email', 'event_label': 'envio' });
            }
            if (typeof ga == 'function') {
                ga('send', 'event', 'email', 'click', 'envio');
            };
            if (typeof fbq == 'function') {
                fbq('track','Contact', {content_name:'email'});
            };
        });

        $('.link-whatsapp').click(function () {
            if (typeof gtag == 'function') {
                gtag('event', 'click', { 'event_category': 'telefono', 'event_label': 'whatsapp' });
            }
            if (typeof ga == 'function') {
                ga('send', 'event', 'telefono', 'click', 'whatsapp');
            };
            if (typeof fbq == 'function') {
                fbq('track','Contact', {content_name:'whatsapp'});
            };
        });
        
        $('.link-messenger').click(function () {
            if (typeof gtag == 'function') {
                gtag('event', 'click', { 'event_category': 'telefono', 'event_label': 'messenger' });
            }
            if (typeof ga == 'function') {
                ga('send', 'event', 'telefono', 'click', 'messenger');
            };
            if (typeof fbq == 'function') {
                fbq('track','Contact', {content_name:'messenger'});
            };
        });


        $('.link-map').click(function () {
            if (typeof gtag == 'function') {
                gtag('event', 'click', { 'event_category': 'site', 'event_label': 'map' });
            }
            if (typeof ga == 'function') {
                ga('send', 'event', 'site', 'click', 'map');
            };
            if (typeof fbq == 'function') {
                fbq('track','Contact', {content_name:'map'});
            };
		
        });
	    
	    
    });

})(jQuery);
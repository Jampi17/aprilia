$(document).ready(function () {

var lst=new Array();

lst=[{"lnk":"../Aprilia-pages/Blog/motos-scrambler.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2023/06/moto-scrambler.webp","Nombre":"Motos scrambler: ideales para la ciudad y terrenos off road"},
     {"lnk":"../Aprilia-pages/Blog/chasis-de-moto.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2023/06/chasis-de-moto.webp","Nombre":"Chasis de moto: descubre los diferentes tipos y sus ventaja"},
     {"lnk":"../Aprilia-pages/Blog/motos-doble-proposito.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2023/06/motos-doble-proposito.webp","Nombre":"Motos doble propósito: evolución y uso en escenarios deportivos"},
     {"lnk":"../Aprilia-pages/Blog/tecnicas-de-conduccion.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2023/05/tecnicas-de-conduccion.webp","Nombre":"Técnicas en conducción que se pueden utilizar al manejar una moto"},
     {"lnk":"../Aprilia-pages/Blog/mecanica-de-motos.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2023/03/mecanica-de-motos.webp","Nombre":"Mecánica de motos: cómo reparar las averías simples en casa"},
     {"lnk":"../Aprilia-pages/Blog/cilindraje-de-la-moto.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2023/03/cilindraje.webp","Nombre":"Cilindraje de la moto: identificar las fallas más frecuentes"},
     {"lnk":"../Aprilia-pages/Blog/puntos-ciegos.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2023/04/puntos-ciegos.webp","Nombre":"Puntos ciegos: ¿cuáles son y cómo prevenirlos al andar en moto?"},
     {"lnk":"../Aprilia-pages/Blog/carriles.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2023/03/carriles.webp","Nombre":"Carriles para motos: descubre cómo utilizarlos correctamente"},
     {"lnk":"../Aprilia-pages/Blog/moto_touring.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2023/03/moto-touring.webp","Nombre":"Moto touring, opción perfecta para conocer Colombia en moto"},
     {"lnk":"../Aprilia-pages/Blog/Kit_herramientas.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2023/03/kit-de-herramientas.webp","Nombre":"Kit de herramientas para moto: ¿Cuáles son las más importantes?"},
     {"lnk":"../Aprilia-pages/Blog/pistas-de-carreras.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2023/03/pistas-de-carreras.webp","Nombre":"Pistas de carreras: circuitos que llevan al límite cualquier moto"},
     {"lnk":"../Aprilia-pages/Blog/motos-naked.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2023/02/motos-naked.webp","Nombre":"Motos naked: qué son, tipos, historia y en qué deportes se usan"},
     {"lnk":"../Aprilia-pages/Blog/mantenimiento-correctivo.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2023/02/mantenimiento-correctivo.webp","Nombre":"Mantenimiento correctivo: señales de que tu moto lo necesita"},
     {"lnk":"../Aprilia-pages/Blog/motos-2-tiempos.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2023/01/motos-2-tiempos.webp","Nombre":"Motos 2 tiempos o 4 tiempos: cómo elegir la más conveniente"},
     {"lnk":"../Aprilia-pages/Blog/actores-viales.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2023/01/actores-viales.webp","Nombre":"Actores viales: ¿cómo debe comportarse un motociclista?"},
     {"lnk":"../Aprilia-pages/Blog/off-road.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/12/off-road.webp","Nombre":"Off road: características y ventajas de viajar en este tipo de moto"},
     {"lnk":"../Aprilia-pages/Blog/trial.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/12/trial.webp","Nombre":"Trial: por qué deberías ver y seguir este deporte extremo"},
     {"lnk":"../Aprilia-pages/Blog/tipos-de-motor.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/12/tipos-de-motor.webp","Nombre":"Tipos de motor y su mantenimiento durante un viaje"},
     {"lnk":"../Aprilia-pages/Blog/supermotard.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/12/supermotard.webp","Nombre":"Supermotard: todo lo que necesitas saber de estas carreras"},
     {"lnk":"../Aprilia-pages/Blog/radiador.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/11/radiador.webp","Nombre":"Radiador: ¿qué es y para qué sirve en una moto?"},
     {"lnk":"../Aprilia-pages/Blog/motos-de-alto-cilindraje.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/11/motos-de-alto-cilindraje.webp","Nombre":"Motos de alto cilindraje: en qué deportes se usan y cuáles escoger"},
     {"lnk":"../Aprilia-pages/Blog/motos-mas-rapidas-del-mundo.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/11/motos-mas-rapidas-mundo.webp","Nombre":"Motos más rápidas del mundo: conoce los modelos más poderosos"},
     {"lnk":"../Aprilia-pages/Blog/que-es-el-soat.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/11/que-es-el-soat.webp","Nombre":"Qué es el SOAT y su importancia para tu vehículo"},
     {"lnk":"../Aprilia-pages/Blog/motero.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/11/motero.webp","Nombre":"Motero: tips para recordar antes de unirte a un club"},
     {"lnk":"../Aprilia-pages/Blog/pastillas-de-freno.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/11/pastillas-de-freno.webp","Nombre":"Pastillas de freno en una moto y la importancia de revisarlas"},
     {"lnk":"../Aprilia-pages/Blog/frenos-abs.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/11/frenos-abs.webp","Nombre":"Frenos ABS: cómo entender su funcionamiento en 4 claves"},
     {"lnk":"../Aprilia-pages/Blog/suspension.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/11/suspension.webp","Nombre":"Suspensión de una moto: los tipos y sus usos"},
     {"lnk":"../Aprilia-pages/Blog/inscribirse-en-el-runt.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/11/inscribirse-en-el-runt.webp","Nombre":"Inscribirse en el RUNT: estos son los pasos a seguir"},
     {"lnk":"../Aprilia-pages/Blog/carreras-de-motos.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/11/carreras-de-motos.webp","Nombre":"Carreras de motos: ¿cuáles son las más importantes del mundo?"},
     {"lnk":"../Aprilia-pages/Blog/partes-de-la-moto.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/11/partes-de-la-moto.webp","Nombre":"Partes de la moto: la importancia de conocer el funcionamiento interno"},
     {"lnk":"../Aprilia-pages/Blog/stunt.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/11/stunt.webp","Nombre":"Stunt: ¿en qué consiste este deporte y cuál es su historia principal?"},
     {"lnk":"../Aprilia-pages/Blog/baul-para-moto.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/10/baul-para-moto.webp","Nombre":"Baúl para moto: un dispositivo que te puede ser de mucha ayuda"},
     {"lnk":"../Aprilia-pages/Blog/motos-automaticas.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/11/motos-automaticas.webp","Nombre":"Motos automáticas: sus características y las ventajas que ofrecen"},
     {"lnk":"../Aprilia-pages/Blog/alternador-de-moto.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/10/alternador.webp","Nombre":"Alternador de moto: cómo identificar los posibles fallos"},
     {"lnk":"../Aprilia-pages/Blog/infracciones-de-transito.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/10/infracciones-de-transito.webp","Nombre":"Infracciones de tránsito graves y leves con tu moto"},
     {"lnk":"../Aprilia-pages/Blog/amortiguacion.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/10/amortiguacion.webp","Nombre":"Amortiguación y su funcionamiento en las motos deportivas"},
     {"lnk":"../Aprilia-pages/Blog/seguridad-vial.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/10/seguridad-vial.webp","Nombre":"Seguridad vial: las ventajas de andar en motocicleta"},
     {"lnk":"../Aprilia-pages/Blog/viajar-por-colombia.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/08/viajar-por-colombia.webp","Nombre":"Viajar por Colombia: 5 travesías a bordo de tu moto | Aprilia"},
     {"lnk":"../Aprilia-pages/Blog/motos-scooter.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/09/motos-scooter.webp","Nombre":"Motos scooter: conoce los tipos más destacados"},
     {"lnk":"../Aprilia-pages/Blog/tipos-de-motos.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/08/tipos-de-motos.webp","Nombre":"Tipos de motos ideales para viajar por diferentes ciudades"},
     {"lnk":"../Aprilia-pages/Blog/motos-bajas.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/08/motos-bajas.webp","Nombre":"Motos bajas y altas: sigue estos consejos para comprar"},
     {"lnk":"../Aprilia-pages/Blog/mantenimiento-preventivo.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/08/mantenimiento-preventivo.webp","Nombre":"El mantenimiento preventivo y qué problemas evade"},
     {"lnk":"../Aprilia-pages/Blog/motos-deportivas.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/08/motos-deportivas.webp","Nombre":"Motos deportivas: en qué se diferencian de las motos estándar"},
     {"lnk":"../Aprilia-pages/Blog/road_trip.html","imagen":"https://aprilia-colombia.com/wp-content/uploads/2022/08/road-trip.webp","Nombre":"Road trip: consejos para disfrutar del viaje en motocicleta"}]
    f_lista_motos(lst);

});

function f_lista_motos(registros) {

    var html = "";
    $("#lst-motos").empty();
    $.each(registros, function (d, a) {
        html += '<div class="col-lg-4 col-sm-6 mb-4">';
        html += '<div class="card c-tamanio-desc" style="    border: 5px solid black;    border-radius: 0px!important;">';
        html += '    <a>';
        html += '        <div>';
        html += '            <img class="img-fluid" src="'+a.imagen+'" alt="...">';
        html += '        </div>';
        html += '    </a>';
        html += '    <div class="card-body" style="background: black;padding-right: 26px;padding-left: 34px;">';
        html += '      <h3 style="    color: #FFFFFF;    font-family: "Rajdhani", Sans-serif;    font-weight: 800;    line-height: 1.1em;">';
        html += '            <a href="'+a.lnk+'"  target="_blank" class="card-link c-lett-desc" style="    color: #FFFFFF!important;    font-family: "Rajdhani", Sans-serif;    font-weight: 800;    line-height: 1.1em;    font-size: 17px;">'+a.Nombre+'</a>';
        html += '         </h3>';
        html += '         <a href="#" class="card-link" style="    color: red!important;    font-family: "Rajdhani", Sans-serif;    font-size: 14px;    font-weight: 900;    margin-bottom: 7px;">LEER MÁS >></a>';
        html += '     </div>';
        html += '  </div>';
        html += '  </div>';

    });

    $("#lst-motos").append(html);

}

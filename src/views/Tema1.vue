<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 La negociación internacional

    .row.justify-content-center
      .col-10
        .cajon.color-acento-contenido.p-5.mb-5
          .row.align-items-center
            .col-9
              p.mb-0 El origen del comercio internacional radicó en la finalización de las guerras mundiales a mediados de 1914, donde Estados Unidos se destacó como líder por ser un país ganador en el área del comercio internacional. Esto dio paso a la creación de instituciones internacionales que tuvieran la autoridad de regular las relaciones entre países para así proteger el desarrollo del sistema político-económico como se observa en el siguiente video: 
            .col-3
              img(src="@/assets/curso/tema1-imagen1.svg")

      .col-11
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      .col-10
        p.mb-5 Para lograr esta integración se requiere acoplar las diferentes estructuras de los países sin que el cambio sea tan drástico, buscando que haya un periodo considerable para la transición de estos, cediendo parte de sus atribuciones de gobierno a los diferentes organismos con una coordinación estrecha que permita la unión. 
          br
          br
          | Existen diferentes formas de ceder esas atribuciones al Gobierno, como:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="El área de preferencia arancelaria" :icono="require('@/assets/curso/tema1-tab1.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4.mb-5 El área de preferencia arancelaria
            p.mb-0 Los países que lo conforman reducen de a poco los impuestos a las importaciones, mientras que se mantienen los aranceles individualmente en los países que no lo conforman. 
              br
              br
              | Un ejemplo de este tipo de asociación fue: la Asociación Latinoamericana de Integración; y la Mancomunidad conformada por países excolonias de Inglaterra.
          .col-md-4
            figure
              img(src='@/assets/curso/tema1-imagen2.svg', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="La asociación de libre comercio" :icono="require('@/assets/curso/tema1-tab2.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4.mb-5 La asociación de libre comercio
            p.mb-4 Elimina todos los impuestos de arancel entre los países que lo conforman, pero esos aranceles se mantienen con países que no son parte de esa asociación.
            ul.lista-ul--color
              li 
                i.fab.fa-envira
                | Un ejemplo de dicho tratado están los siguientes países: Austria, Noruega, Dinamarca, Portugal, Suecia, Suiza, Reino Unido y luego Finlandia e Islandia.
              li 
                i.fab.fa-envira
                | Otro ejemplo de este tipo de asociación es Estados Unidos y Canadá.
          .col-md-4
            figure
              img(src='@/assets/curso/tema1-imagen3.svg', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="La unión aduanera" :icono="require('@/assets/curso/tema1-tab3.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4.mb-5 La unión aduanera
            p.mb-0 Integra las macropolíticas, eliminan el impuesto por importación y simplifican el arancel entre los países que lo conforman como el denominado arancel externo común, quiere decir que una vez importado, otros países que no hacen parte de la unión poseen un producto de libre circulación sin tener que volver a pagar arancel. 
              br
              br
              | Un caso de unión aduanera es Zollverin que lo conforman los estados de Alemania; otro es la Comunidad Europea que a la fecha la integran miembros como Italia, Bélgica, Francia, Alemania, Italia, Luxemburgo y Holanda.
          .col-md-4
            figure
              img(src='@/assets/curso/tema1-imagen4.svg', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="La unión económica" :icono="require('@/assets/curso/tema1-tab4.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4.mb-5 La unión económica
            p.mb-0 Importa diferentes mercados, unifica las políticas fiscales, monetarias y sociales tratando de manejar una sola moneda. 
              br
              br
              | Un ejemplo de esta unión es Benelux conformado por Holanda, Bélgica y Luxemburgo.
          .col-md-4
            figure
              img(src='@/assets/curso/tema1-imagen5.svg', alt='Texto que describa la imagen')
              
      .py-4.py-md-5(titulo="La unión política" :icono="require('@/assets/curso/tema1-tab5.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4.mb-5 La unión política
            p.mb-0 Cuenta con la presencia de autoridades  y atribuciones independientes en su soberanía, aunque todos los países que lo conforman no poseen esas características también llamadas supranacional. Allí es donde tiene cabida un consejo que establece las directrices y reglamentos aplicables y obligatorios para todos sus miembros; también se apoya en un tribunal de justicia que se encarga de juzgar y sentenciar la fuerza ilegal en el territorio de los Estados que lo conforman.
          .col-md-4
            figure
              img(src='@/assets/curso/tema1-imagen6.svg', alt='Texto que describa la imagen')
              
      .py-4.py-md-5(titulo="Las asociaciones intra regionales" :icono="require('@/assets/curso/tema1-tab6.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4.mb-5 Las asociaciones intrarregionales
            p.mb-0 Conformadas por lineamentos diferentes que se determinan de acuerdo con la particularidad de cada región que están sujetas a diferentes objetivos y metas, pero dan lugar a numerosas organizaciones económicas y comerciales.
          .col-md-4
            figure
              img(src='@/assets/curso/tema1-imagen7.svg', alt='Texto que describa la imagen')
              
    Separador

    .row.justify-content-center
      .col-10
        .cajon.color-acento-contenido.p-5.mb-5
          p.mb-0 Los tratados de comercio surgen a partir de la globalización y deslocalización, ya que los escenarios comerciales abrían paso a la internacionalidad, siendo importantes para llegar a conciliaciones y apoyándose entre varios países.
            br
            br
            | Los tratados internacionales de comercio están establecidos <strong>para mejorar el intercambio del comercio y las relaciones económicas</strong>, si se habla de tratados de libre comercio se determinan reglas para cada intercambio ya sea de productos o servicios, revisando los impuestos establecidos para minimizarlos o, en la mayoría de casos, eliminarlos en las importaciones o exportaciones, permitiendo un mejor acceso a los mercados, mayor competitividad nacional y disminución de las condiciones que no permitían la relación comercial entre países. Ahora, se invita a viajar unos siglos atrás a conocer los tratados… ¡vamos!
    .tarjeta.tarjeta--gris.p-5
      LineaTiempoC.color-secundario(text-small)
        .row(titulo="XI").justify-content-center
          .col-10
            h1 XI
            p.mb-5 Los acuerdos internacionales iniciaron en siglos anteriores al XI como los tratados entre Roma y Cartago, que se disputaban el control del comercio marítimo, por lo que repartieron áreas del mar Mediterráneo.
            figure.mb-5
              img(src='@/assets/curso/tema1-imagen8.jpg' style='margin-left: 20%; width: 60%;')
            ul.lista-ul--color
              li 
                i.fab.fa-envira
                p.mb-0 El <strong>tratado Tripartito</strong> conocido como uno de los textos mejor conservados con 88 páginas.
              li 
                i.fab.fa-envira
                p.mb-0 El <strong>tratado de Dárdanos</strong> con el que finalizó la Primera Guerra Mitridática.
              li 
                i.fab.fa-envira
                p.mb-0 El <strong>tratado de Fénice</strong> conocido también como la Paz de Fénice con el que finalizó la Primera Guerra Macedónica.
              li 
                i.fab.fa-envira
                p.mb-0 El <strong>tratado de Lutacio</strong> con el que finalizó la Primera Guerra Púnica.
              li 
                i.fab.fa-envira
                p.mb-0 El <strong>Pax Nicephori</strong> un tratado de paz que firmó Carlomagno en el que los imperios estuvieron de acuerdo sobre la posesión del territorio.
              li 
                i.fab.fa-envira
                p.mb-0 El <strong>tratado de Verdún</strong> que decretaba el modo en que debían proceder cuando fallece una monarca sin descendencia, entre otros aspectos.
              
        .row(titulo="XII").px-5
          .col-12
            h1 XI
            p.mb-4 En el <strong>siglo XII</strong>:
          .col-8
            ul.lista-ul--color
              li 
                i.fab.fa-envira
                p.mb-0 El tratado de Devol como consecuencia de la Primera Cruzada.
              li 
                i.fab.fa-envira
                p.mb-0 El concordato de Worms que cambió a querella de las investiduras.
              li 
                i.fab.fa-envira
                p.mb-0 El tratado de Zamora como resultado de una conferencia de paz donde Alfonso I de Portugal se salió victorioso en la batalla de Ourique contra los musulmanes.
              li 
                i.fab.fa-envira
                p.mb-0 El tratado de paz de Fresno-Lavandera.
              li 
                i.fab.fa-envira
                p.mb-0 El tratado de Tordehumos para poner fin a la guerra de León y Castilla, entre otros temas.
                  br
                  | Los tratados de Chinon con la batalla de Bouvines.
              li 
                i.fab.fa-envira
                p.mb-0 El tratado de París entre Francia y Tolosa.
              li 
                i.fab.fa-envira
                p.mb-0 El tratado de Corbeil conformando fronteras estables entre Aragón y Francia.
              li 
                i.fab.fa-envira
                p.mb-0 El tratado de Perth por el dominio de las islas Hébridas.
              li 
                i.fab.fa-envira
                p.mb-0 El tratado de Anagni para una paz a raíz de la conquista de aragonesa, entre otros aspectos.
          .col-4
            figure.mb-0
              img(src='@/assets/curso/tema1-imagen9.jpg')

        .row(titulo="XIV - XV").px-5
          .col-12
            h1 XIV - XV
            p.mb-4 En el <strong>siglo XIV y XV</strong>:
          .col-8
            ul.lista-ul--color
              li 
                i.fab.fa-envira
                p.mb-0 El tratado de paz de Calta Bellota que concluyó con la guerra de las Vísperas Sicilianas.
              li 
                i.fab.fa-envira
                p.mb-0 El tratado de torrellas relativo a sus fronteras de Castilla y Aragón.
              li 
                i.fab.fa-envira
                p.mb-0 El tratado de Mantés.
              li 
                i.fab.fa-envira
                p.mb-0 El tratado de alianza luso-británica como el tratado más antiguo que sigue en vigencia desde 1373 entre Inglaterra y Portugal.
              li 
                i.fab.fa-envira
                p.mb-0 El tratado de Troyes como consecuencia de la batalla de Agincourt.
              li 
                i.fab.fa-envira
                p.mb-0 El tratado de paz de Lodi.
              li 
                i.fab.fa-envira
                p.mb-0 La carta de Calatayud.
              li 
                i.fab.fa-envira
                p.mb-0 El tratado de Granada.
              li 
                i.fab.fa-envira
                p.mb-0 El tratado de Barcelona entre Francia y España.
          .col-4
            figure.mb-0
              img(src='@/assets/curso/tema1-imagen10.jpg')

        .row(titulo="XVI, XVII y XVIII").px-5
          .col-12
            h1 XVI, XVII y XVIII
            p.mb-4 Los <strong>siglos XVI, XVII y XVIII</strong> trajo consigo tratados:
          .col-8
            ul.lista-ul--color
              li 
                i.fab.fa-envira
                p.mb-0 El tratado de Granada como una alianza militar.
              li 
                i.fab.fa-envira
                p.mb-0 El tratado de paz de Zaragoza entre España y Portugal.
              li 
                i.fab.fa-envira
                p.mb-0 El tratado de Londres como un tratado de paz entre España e Inglaterra como final de la guerra Anglo Española.
              li 
                i.fab.fa-envira
                p.mb-0 La cuádruple alianza entre el Imperio romano, países bajos, Francia y Gran Bretaña.
              li 
                i.fab.fa-envira
                p.mb-0 El tratado de Londres y el tratado de París por el que se le dio final a la guerra hispano-estadounidense.
          .col-4
            figure.mb-0
              img(src='@/assets/curso/tema1-imagen13.jpg')

        .row(titulo="XX y XXI")
          .col-12
            h1 XX y XXI 
            p.mb-4 Los <strong>siglo XX y XXI</strong> se ratificaron tratados como:
          .col-8
            ul.lista-ul--color
              li 
                i.fab.fa-envira
                p.mb-0 El de Moscú reconociendo la independencia de Turquía a cambio de no dar asilo en tierras georgianas
              li 
                i.fab.fa-envira
                p.mb-0 El tratado de Londres.
              li 
                i.fab.fa-envira
                p.mb-0 La convención de las Naciones Unidas sobre el derecho del mar denotada como la Constitución de los Océanos.
              li 
                i.fab.fa-envira
                p.mb-0 El tratado de Bruselas conocido como el tratado de fusión de los ejecutivos para la resolución de conflictos y asegurar la aplicación del derecho comunitario equitativamente para todos los estados miembros.
              li 
                i.fab.fa-envira
                p.mb-0 El tratado de Varsovia como aproximación al capitalismo y socialismo y el tratado de Lisboa en el que la Unión Europea. 
          .col-4
            figure.mb-0
              img(src='@/assets/curso/tema1-imagen14.jpg')

    Separador

    .titulo-segundo
      h2 1.2  Negociación

    .row.justify-content-center
      .col-10
        p.mb-5 La palabra negociar implica un esfuerzo de tiempo, trabajo, menos ocio y sacrificio para lograr la meta u objetivo; así mismo, la negociación requiere de un diseño y logro de metas comunes que, eventualmente, se encuentra con una serie de controversias que requieren de una alternativa para solucionar dentro de varias posibilidades por prever.

        .row.mb-5
          .col-lg-8.mb-12.mb-lg-0
            .bloque-texto-d.color-acento-botones.p-4
              .bloque-texto-d__texto.mb-2
                i.fas.fa-quote-left
                h3.text-regular
                  strong La negociación es un proceso que puede dividirse en varias etapas que van más allá de distinguir entre emociones y reflexión, pues hacer parte de una negociación requiere un aporte de variables y conocimientos propios del tema que hacen parte de la conclusión a la que quieren llegar partiendo del conflicto que se presenta para así lograr una solución exitosa para todas las partes
                i.fas.fa-quote-right
              .bloque-texto-d__autor 
                span.mb-0 (Sierralta, 2013).
          .col-lg-4
            figure
              img(src="@/assets/curso/tema1-imagen15.svg")
        
        p.mb-5 Lograr los objetivos en el tema de negociación requiere de un plan o procesos establecidos que deben contemplar los márgenes de imprevistos o pérdidas que se puedan presentar luego de la negociación, así como los aspectos de frustración y falta de manejo del tema en específico; para ello se debe revisar el proceso a continuación: 

      .col-8
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1-imagen16.svg')
          .tarjeta.color-acento-botones.p-3(x="6.4%" y="60.8%")
            .h5.mb-2 1. Objetivos 
            p Inicialmente la negociación precisa de reconocer los objetivos establecidos que tiene en cuenta las diferentes visiones que conducen a la obstrucción de la negociación, siendo importante el reconocimiento
          .tarjeta.color-acento-botones.p-3(x="43.6%" y="37.9%")
            .h5.mb-2 2. Trabajo en equipo 
            p Luego, aparece el trabajo en equipo como un factor importante para la toma de decisiones tratando de lograr una dinámica donde todos puedan participar sin excluir a ningún participante, pues se garantiza la confianza en el grupo y fortalece a su vez el cumplimiento del objetivo en la negociación.
          .tarjeta.color-acento-botones.p-3(x="80.6%" y="60.7%")
            .h5.mb-2 3. Líder
            p El trabajo en equipo requiere de un líder que recibe la información suministrada por cada uno, para sacar así las conclusiones de lo expuesto y transmitir la idea final al punto de quiebre que garantizará una respuesta positiva para el trato.
          .tarjeta.color-acento-botones.p-3(x="66.7%" y="97.5%")
            .h5.mb-2 4. Tácticas
            p Se implementan tácticas que responden a preguntas que están incluidas dentro de los objetivos en función a los instrumentos, medios, y lugar que se lleva a cabo el trato, pues garantizan al máximo un buen margen en todos los detalles principales de la negociación.
          .tarjeta.color-acento-botones.p-3(x="20.8%" y="97.3%")
            .h5.mb-2 5. Negociación
            p En el contexto diplomático y comercial es muy usada la negociación, pues sus mecanismos y técnicas son utilizados en actividades técnicas, internacionales, políticas, empresariales y financieras como un instrumento de solución de conflictos, no solo en estos contextos si no en el diario vivir con los vecinos, compañeros de estudio o de trabajo también, se requiere negociar con los que nos rodean haciendo necesaria la comunicación, entenderse, ser aprobados o bien vistos, ayudar o sentir solidaridad con los demás, para ser respetados y así lograr convivir en paz.
          .tarjeta.color-acento-botones.p-3(x="20.8%" y="80.5%")
            .h5.mb-2 6. Negociador
            p Si se habla de un negociador no podemos pensar que todos los seres humanos lo son, pero el negociador ya tiene una preparación que exige dominar un personaje que se está interpretando como un papel específico en una obra de teatro en el área comercial y financiera; donde lograr un buen desempeño requiere de conocimientos específicos que haga creíble todos los movimientos, actitudes, frases, expresiones o incluso aquellos momentos donde callamos.
      .col-10
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Se podría decir que la negociación también hace parte del arte como algo irrepetible, similar a una obra de teatro: por más que tengan un papel y sea la misma historia cada vez que se repite la presentación tiene cosas diferentes que la caracterizan de acuerdo con el estado de ánimo del actor, a su memoria o una mala jugada del cuerpo que podría implicar la improvisación de los personajes… lo mismo pasa en cada negocio: por más que sean escenarios iguales o similares siempre habrá factores diferentes por lo que no se podría responder de la misma manera, un claro ejemplo sería: el contexto de negociación cambia si es un hombre de 45 años o una dama de 28 años quien la dirige, aquí las maneras en las que se podrán interactuar son diferentes. 
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1-imagen17.svg')
        .row.mb-5
          .col-8
            p.mb-0 Por eso se dice que la espontaneidad o simplicidad con que se asuman los tratos permite innovar o desarrollar nuevas ideas en áreas de la comunicación, cibernética, artificialidad o incluso el área transgénica como crecimiento exponencial abriendo paso a negocios verdes innovadores como a la actualidad radican entre los más importantes, pues permiten el crecimiento y desarrollo sostenible sin afectar las generaciones futuras.
              br
              br
              | La innovación abre paso al marketing en el área de la negociación como un área específica que estudia también el origen de las negociaciones desde la industrialización, el transporte, agilidad de los medios electrónicos de la información y su interacción y movilidad, creando una influencia a nivel empresarial sobre los mercados y corporaciones nacionales e internacionales pues se detecta los diferentes gustos o preferencias incidiendo en las ofertas de productos y servicios en el mercado.
          .col-4
            figure
                img(src='@/assets/curso/tema1-imagen18.jpg')
        p.mb-5 La diferencia cultural se debe tomar en cuenta para reconocer las diferencias que se puedan tener, ya que la religión o diferencia regional puede implicar cambios en las expresiones, jergas o niveles de susceptibilidad que afectarían una negociación por lo que requiere un trato a la confianza, emociones, impresiones, lenguaje, tiempo y espacio, a continuación se presentan qué aspectos se deben tener en cuenta: 
    
    div.p-5.container-slider
      .tarjeta.tarjeta--gris.p-4.mb-0
        SlyderA
          div.p-5
            h3 Confianza
            p.mb-5 Aquí inicia el punto donde se hará creer a la otra parte que la unión será beneficiosa y permitirá la transmisión de verdaderos intereses más allá del término de la negociación, dando la impresión de credibilidad para ambos, permitiendo escenarios de apoyo y cooperación. Esto es posible por la veracidad y afirmaciones comprobadas que dan paso a un clima de confianza y sintonía.
            .row
              .col-8
                .cajon.color-acento-contenido.p-5.mb-5
                  p.mb-0 Es normal que en ambas partes haya desconfianza y quieran averiguar por otros medios que tal es el historial o antecedentes de la otra parte, lo que hace necesario tener unos canales de comunicación asertivos y líneas de interés común por encima de los intereses comerciales que abren paso al primer trato,  ya que si no existe una confianza inicial no se puede comenzar un proyecto o firmar un contrato con ambas partes.
              .col-4
                figure
                  img(src='@/assets/curso/tema1-imagen20.svg')
          div.p-5
            h3 Emociones 
            p.mb-5 Las emociones están ligadas a la psicología, entendiéndose la emoción a una clase de afecto y con una duración más precisa que una reacción afectiva o un estado de ánimo, estas generan en muchas ocasiones situaciones difíciles de entender y,  sin un control, podría causar un problema o conflicto. El ser humano se mueve bajo el control de sus emociones, pero en el área de la negociación no se puede hacer caso a estas, puesto que ahí cometeremos errores y es necesario implementar técnicas de relajación, control mental y ejercicios de respiración para pensar dos veces antes de hablar o dar espacios para que la otra parte también pueda pensar con tranquilidad.
            .row.align-items-center
              .col-6
                figure
                  img(src='@/assets/curso/tema1-imagen21.svg')
              .col-6
                .cajon.color-primario.p-5.mb-5
                  p.mb-0 Hay experiencias que aseguran que luego de haberse dejado llevar por los impulsos aparece el arrepentimiento, cuando ya no se puede hacer nada al respecto.
          
          div.p-5
            h3 Emociones
            .row.align-items-center
              .col-8
                p.mb-0 Hay ejercicios prácticos donde se busca que la persona exprese por medio de un texto lo que siente en el momento, para que lea ese texto unos días después y ver así la reacción pensando si realmente valía la pena haber dicho algo así o si era mejor tomarse su momento y hablar con calma.
                  br
                  br
                  | Cuando una persona se deja llevar de emociones fuertes no piensa y a eso se le llama captura de la amígdala,  es la parte frontal del cerebro se bloquea y solo habla la parte emocional que, en muchos casos, por exaltar una emoción no piensa o no permite que salgan a flote otros sentidos que van ligados a los valores o lo ético.
              .col-4
                figure
                  img(src='@/assets/curso/tema1-imagen22.svg')
          
          div.p-5
            h3 Impresiones
            p.mb-5 Generalmente la impresión de alguien inicia desde el momento que le vemos por primera vez, o en algunas ocasiones cuando hablan mucho de esa persona, esa imagen que da el aspecto físico, cómo se viste, se maquilla, sus accesorios, su forma de hablar y qué tan agradable es. Todo esto genera una impresión del otro y a su vez imagina otros escenarios, estas impresiones surgen de las circunstancias o motivaciones que le precedan.
            .row.align-items-center
              .col-6
                figure
                  img(src='@/assets/curso/tema1-imagen23.svg')
              .col-6
                figure
                  img(src='@/assets/curso/tema1-imagen24.svg')
          
          div.p-5
            h3 Lenguaje
            p.mb-5 Una vez se logra la confianza y se maneja una buena impresión de la otra parte en la negociación, no se debe descuidar el tono y las palabras con las que se conversa, ya que si no se expresa con los términos precisos o en algunos casos se omiten ciertas palabras aclaratorias, se puede dar paso a una mala interpretación ya que hay palabras que pueden ser sinónimos pero generar una percepción diferente para la negociación.
              br
              br
              | Existe una gran diferencia entre las palabras según se exprese y se pronuncie correctamente como lo son las siguientes:
            figure.mb-5
              img(src='@/assets/curso/tema1-imagen25.svg' style='margin-left: 20%; width: 50%;')
            .row
              .col-4.d-flex
                .cajon.color-acento-contenido.mb-0.p-4
                  p.mb-0 Cercenar puede sentirse de una manera violenta o sangrienta.
              .col-4.d-flex
                .cajon.color-primario.mb-0.p-4
                  p.mb-0 Siendo indispensable un amplio dominio del vocabulario para poder entender o traducir cada palabra dentro de la conversación.
              .col-4.d-flex
                .cajon.color-acento-contenido.mb-0.p-4
                  p.mb-0 Mientras que la palabra dividir puede ser más agradable para el receptor.

          div.p-5
            h3 Tiempo
            p.mb-5 Para todas las personas la percepción del tiempo no es la misma ni se valora o respeta de la igual forma, por lo que la puntualidad en una cita de negocios expresa respeto, seriedad y compromiso con la otra parte. Por lo general, las personas respetan una invitación sin aprovecharse del tiempo, como lo es llegar muy tarde o quedarse más de lo estimado. Dependiendo de algunas regiones son diferentes los tiempos para atender una negociación:
            .row.mb-5
              .col-6.d-flex
                .cajon.color-acento-contenido.mb-0.p-4
                  .row
                    .col-lg-8.mb-5.mb-lg-0
                      p.mb-0 En Cuba pueden dejar esperando a una persona hasta una hora  sin pensar que es una falta de respeto, pero en general tienden a ser más acelerados en sus negociaciones.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema1-imagen26.svg')
              .col-6.d-flex
                .cajon.color-primario.mb-0.p-4
                  .row
                    .col-lg-8.mb-5.mb-lg-0
                      p.mb-0 Los japoneses,  en sus negociaciones no son afanados y suelen durar años en una negociación.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema1-imagen27.svg')
            .row
              .col-lg-9.mb-5.mb-lg-0
                .container-text-offset.p-4
                  p.mb-0 Se demuestra que el tiempo hace parte de la cultura y dependiendo de donde estén, se sabrá qué tipo de negociación que se podrá ejercer, pues la edad también permite definir los límites o hasta qué punto podamos ejercer presión.
              .col-lg-3
                figure
                  img(src='@/assets/curso/tema1-imagen28.svg')
          
          div.p-5
            h3 Espacio
            p.mb-5 El espacio físico entre las personas entra en función de la seguridad, protección y el tipo de mensaje que se transmite. La distancia interpersonal, las circunstancias y la cultura varía la negociación, puesto que:
            .tarjeta--container.row.mb-5
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .col-md.tarjeta.color-primario.p-5
                .row.justify-content-center.mb-4
                  .col-6
                    figure
                      img(src='@/assets/curso/tema1-imagen29.svg')
                  
                p En Estados Unidos es normal que para hablar de una transacción se sienten a lados opuestos de la mesa evitando cualquier roce.

              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .col-md.tarjeta.color-acento-botones.p-5
                .row.justify-content-center.mb-4
                  .col-8
                    figure
                      img(src='@/assets/curso/tema1-imagen30.svg')
                  
                p En América Latina se saludan de mano, abrazo, palmada en el hombro o brazo. 

              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .col-md.tarjeta.color-primario.p-5
                .row.justify-content-center.mb-4
                  .col-6
                    figure
                      img(src='@/assets/curso/tema1-imagen31.svg')
                  
                p En Italia se puede ver incluso a los hombres paseando abrazados o con el brazo en torno a los hombros del otro, resaltando así la diferencia con Estados unidos, Alemania y Holanda siendo más fríos y distantes.
  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>

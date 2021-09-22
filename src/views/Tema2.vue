<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Costos y presupuestos

    p.mb-5(data-aos="fade-right" data-aos-delay="500") En el siguiente video podrás conocer los conceptos de costos y presupuestos:

    .row.justify-content-center(data-aos="fade-left" data-aos-delay="500")
      .col-11
          figure.mb-5
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    #t_2_1.titulo-segundo(data-aos="fade" data-aos-delay="500")
      h2 2.1  Costos y gastos por actividades

    p.mb-5(data-aos="fade-right" data-aos-delay="500") Los costos en la producción o comercialización de un producto o servicio son trascendentales en la estructura de una negociación, por lo que se derivan otros procesos que constan de actividades que minimizan los consumos de materias primas o el requerimiento de mano de obra.
      br
      br
      | Los costos se pueden identificar fácilmente según su naturaleza, la variación en producción, su relación con el producto, el proceso organizacional o su uso en planeación, tal como se muestra aquí y profundizando cada uno de ellos:

    //- TabsA debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    TabsA.color-acento-contenido.mb-5(data-aos="fade-left" data-aos-delay="500")
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="Costos según su naturaleza")
        h4 Costos según su naturaleza
        p Estos costos hacen referencia a los tipos de agrupaciones que difieren de la fabricación, como la materia prima o insumos, mano de obra, los gastos requeridos de distribución, administración y financieros. Un ejemplo de este costo es el sueldo de un gerente el cual puede asumirse como costo manufacturero y ser tomado por las unidades producidas en un periodo o también puede conformarse por los administrativos.
        figure(style='')
          img(src='@/assets/curso/tema2-imagen1.jpg' style='margin-left: 10%; width: 80%')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Costos de variación en producción")
        h4 Costos de variación en producción
        p En ocasiones los costos son directamente proporcionales a la cantidad producida o fabricada en una empresa, aquí es cuando se habla de los costos según la variabilidad en el proceso productivo. Como el ejemplo de un taller mecánico o de venta de repuesto, si el arriendo normalmente para un uso normal está por $ 600.000 el arrendador querrá saber qué tan productivo es su taller y si este es muy visitado deseará subirle el precio del arriendo por los altos ingresos que el arrendatario está generando. Es un ejemplo claro de un costo variable también puede depender de la ubicación ya que no vale lo mismo el alquiler de una oficina en un edificio empresarial lujoso a una oficina en una vereda lejana y no muy concurrida.
        figure(style='')
          img(src='@/assets/curso/tema2-imagen2.jpg' style='margin-left: 10%; width: 80%')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Costos según su relación con el producto")
        h4 Costos según su relación con el producto
        p Existe una identificación sencilla de los costos directos para la fabricación, como los requeridos para la materia prima o mano de obra, pero hay otra identificación más compleja que es compartida entre varios productos, como el costo del sueldo de un supervisor que verifica y controla la producción o fabricación de un producto, está relacionado no solo con ese proceso, sino con inventarios, con servicios que hacen engorrosa la contabilidad independiente, siendo estos costos indirectos para el proceso de fabricación, pues es imprescindible calcular estos entre los diversos productos finales.
        figure(style='')
          img(src='@/assets/curso/tema2-imagen3.jpg' style='margin-left: 10%; width: 80%')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Costos según el proceso organización")
        h4 Costos según el proceso organización
        p Existen costos directos e indirectos en la división organizativa, siendo un costo directo para un departamento en específico su actividad, pero al ser indirecto se realizaría en relación con un producto que se fabrica, por ejemplo, en el área o departamento de envasado donde el salario del jefe de ese departamento sería por la producción que tenga en un periodo determinado, pero difiere cuando el costo se valida por la producción de todos los productos que salen del área de envasado, donde el sueldo del jefe se determinaría con los costos de productos producidos.
        figure(style='')
          img(src='@/assets/curso/tema2-imagen4.jpg' style='margin-left: 10%; width: 80%')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Costos según su uso en planeación")
        h4 Costos según su uso en planeación
        p Aquí es donde se empieza a hablar del presupuesto, se consolida en cifras una visión para el siguiente año en orientación a lo que frecuentemente la empresa o entidad estima costos y gastos, para ello requiere sus históricos.
        figure(style='').mb-5
          img(src='@/assets/curso/tema2-imagen5.jpg' style='margin-left: 10%; width: 80%')
        p.mb-0 Los costos para la planeación del presupuesto pueden ser estándar o estimados. El estándar resulta de un cálculo soportado por criterios técnicos del consumo de materiales específicos, que aplican la ingeniería industrial en procesos de producción para tener esos datos fijos; por otro lado están los costos estimados que parten generalmente de la intuición de alguien con experiencia y con la capacidad para analizar el comportamiento de los costos pues es esta persona quien puede ajustar precios o tarifas que requieren de un criterio para la toma de decisiones. 
    
    Separador

    #t_2_2.titulo-segundo(data-aos="fade" data-aos-delay="500")
      h2 2.2  Estrategias de costos
    
    p.mb-5(data-aos="fade-right" data-aos-delay="500") Las estrategias de costos consisten en revisar las actividades que hacen parte de la cadena de suministro y valor de la empresa desde un ámbito global, permite encaminar a la empresa en una apropiada proyección económica y destaca ventajas competitivas sostenibles pues es un proceso de mejora continua. 

    .row.justify-content-center
      .col-lg-10(data-aos="fade-left" data-aos-delay="500")
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2-imagen6.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Estas estrategias tienen el objetivo de organizar la información para que la entidad pueda mantener un nivel competitivo comercial con productos y servicios de alta calidad que satisfacen al cliente por un buen precio; pero solo se consigue implementando un proceso de diseño y aplicación constante en la cadena productiva y de valor en todas las actividades de la empresa que garantizan por medio de un buen producto, entregas a tiempo y rentabilidad la satisfacción del cliente.
        
      .col-lg-12.text-center(data-aos="fade-right" data-aos-delay="500")
        p.mb-5 De este modo, hay estrategias de costos para realizar una mejor administración empresarial:

      .col-lg-11(data-aos="fade-left" data-aos-delay="500")
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-primario.p-5
            h3.text-center El liderazgo en los costos
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema2-imagen7.svg')
              
            p  Se puede lograr mediante el aprovechamiento máximo de los efectos económicos favorables de la entidad y minimizando gastos.

          .col-md.tarjeta.color-acento-contenido.p-5
            h3.text-center Dividiendo la demanda
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema2-imagen8.svg')
              
            p A través de diferentes canales comerciales, líneas de producción o dividiendo los tipos de clientes de acuerdo con su sector permiten distribuir mejor las tareas y líneas de atención y producción.

          .col-md.tarjeta.color-primario.p-5
            h3.text-center Identificando los diferentes productos y servicios
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema2-imagen9.svg')
              
            p Con sus respectivas características o criterios para lograr definir a qué tipo de clientes se pueden ofrecer cada producto y garantizar un mercado llamativo.
      
      .col-10
        .row.mb-5(data-aos="fade-right" data-aos-delay="500")
          .col-lg-7
            .container-text-offset-1.px-3.py-2
              p.mb-0 Generalmente las empresas tienen una cadena de valor que demuestra la posición en el mercado, opciones de estrategia y en qué es más competitiva la entidad para trabajar en esos puntos y obtener ventaja con otros proveedores en el mercado. Se garantiza la cadena de valor cuando se hace un seguimiento al producto desde su diseño hasta el servicio que se podría ofrecer en garantía luego de la venta o asesoramiento en manejo de este.
                br
                br
                | Luego, se analiza qué posición estratégica se tiene referente a cómo está ubicada en el sector industrial y esto solo es visto cuando los clientes le dan un valor agregado al producto o servicio ofertado y sucede en el momento que el cliente le cree al proveedor.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2-imagen10.jpg')
        
        .bloque-texto-d.color-acento-botones.p-4.mb-5(data-aos="fade-left" data-aos-delay="500")
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular
              strong Se podría dar un costo objetivo determinando un precio justo si a este se le resta el margen que se estima para la utilidad nos podría arrojar el costo objetivo, siendo este un instrumento para reducir los costos totales con la ayuda de todos los procesos o departamento de la empresa quienes pueden garantizar que se reduzcan los costos en producción, diseño o ingeniería 
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            span.mb-0 (Paredes, 2021).

        p.mb-5(data-aos="fade-right" data-aos-delay="500") Asimismo, se impulsa a un modelo de gestión que permite a los clientes asimilar de manera fácil una buena percepción de la empresa con alta calidad y precios bajos.
    
    Separador

    #t_2_3.titulo-segundo(data-aos="fade" data-aos-delay="500")
      h2 2.3  Costos de comercio internacional

    p.mb-5(data-aos="fade-left" data-aos-delay="500") El comercio internacional se ve afectado por variaciones en la bolsa y aumentos por fricciones que, en muchas ocasiones, nublan la visión de empresas competitivas en el mercado, el aumento no permite que las entidades tengan acceso a la tecnología e innovación y le reducen el valor a la empresa o incluso algunas van a la quiebra. Existen políticas que inciden en los costos del comercio y se pueden implementar medidas para mitigar su impacto por medio de reformas que afectan positivamente a países con ingresos bajos. A continuación, se presenta el siguiente proceso: 

    .row.justify-content-center
      .col-lg-10(data-aos="fade-right" data-aos-delay="500")
        ImagenInfografica.color-secundario.mb-5

          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2-imagen11.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="14.5%" y="45.5%")
            p Los costos del comercio afectan a algunos países por sus condiciones que, en muchos casos, se les hace casi imposible lograr adquisición; a países aislados se les dificulta la exportación por los altos valores en transporte y a otros por los elevados costos de insumos, materias primas o servicios de primera necesidad.

          .tarjeta.color-acento-botones.p-3(x="45.7%" y="22.5%")
            p Si se reducen los costos del comercio internacional ocasiona un incremento económico en el bienestar y aumenta el producto interno bruto PIB.

          .tarjeta.color-acento-botones.p-3(x="78.5%" y="59.5%")
            p Los países que tienen acceso a productos extranjeros están más actualizados en innovación y tecnología, por lo que unen estos recursos con sus investigaciones para lograr la creación de nuevos productos que facilitan procesos industriales, productivos y operativos y que catapultan el desarrollo económico del país.

        p.mb-5 El avance tecnológico permite que el ser humano tenga una mejor comunicación, pero no se garantiza el control total del tiempo, no se tiene control de todos los bienes y servicios a cabalidad por lo que siempre existirán los contratiempos que causan esas fricciones en el comercio, como es el caso de la pandemia por el Covid-19 la cual incrementó el precio por contenedor y flete desde muchos puertos, en especial los de China doblando su precio normal.
          br
          br
          | Los economistas hacen distinciones de los costos comerciales fijos y variables:
    
      .col-lg-7(data-aos="fade-left" data-aos-delay="500")
        figure.mb-5
          img(src='@/assets/curso/tema2-imagen12.svg', alt='Texto que describa la imagen')

      .col-lg-10(data-aos="fade-right" data-aos-delay="500")
        p.mb-5 Con el pasar del tiempo el comercio de servicios se ha expandido de forma tal que representa la quinta parte de las corrientes comerciales mundiales, ya que los países en desarrollo la aumentan potencialmente. Los servicios inciden en <strong>qué tan competitivo es un país</strong>, pues el servicio de las telecomunicaciones, transporte y energía tienen influencia en la productividad y competitividad; de este modo, si se inicia la importación de servicios y se invierte en el extranjero aumentaría la asequibilidad, calidad y disponibilidad de servicios reduciendo de este modo la pobreza gracias a la diversificación en las exportaciones.
    
    Separador

    #t_2_4.titulo-segundo(data-aos="fade" data-aos-delay="500")
      h2 2.4  Presupuestos

    .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between(data-aos="fade-right" data-aos-delay="500")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Se pueden entender como presupuestos los análisis sistemáticos que, a partir de datos históricos, estudia los costos y gastos requeridos para el presente y futuro en <strong>la implementación de un proyecto, proceso productivo, proceso de contratación o financiero de una empresa</strong>, allí se tiene en cuenta la entrada y salida de los recursos como el dinero, tiempo, insumos, equipos e incluso espacios. 
              br
              br
              | El resultado de un presupuesto es un documento con indicadores financieros que determinan la cantidad de recursos a utilizar en cada punto específico, actividad o proceso empresarial, también arroja datos de rentabilidad, utilidad esperada y cuál sería el estimado para el flujo de caja. 
              br
              br
              | El valor que se da a cada ítem del presupuesto no es al azar o asignando un aproximado del valor del año anterior, <strong>es un valor que surge de un cálculo y estudio previo de los recursos, costos y tiempos</strong> que muestran, posteriormente, qué tan rentable es cada recurso.
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema2-imagen13.svg')

    .row.justify-content-center(data-aos="fade-left" data-aos-delay="500")
      .col-11
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2-imagen14.svg' alt='AvatarTop')
          .tarjeta.tarjeta--verde
            .p-4
              p.mb-0 La importancia del presupuesto radica en que evita el malgasto de los recursos, establece metas y objetivos coherentes, permite anticipar y estar preparados para imprevistos, permite idealizar logros y analizar estrategias del <i>marketing competitivo</i>.
    .row.justify-content-center(data-aos="fade-right" data-aos-delay="500")
      .col-lg-6
        .cajon.color-acento-contenido.p-4.mb-5
          p.mb-5 En la realización de un presupuesto, los recursos y los datos que se deben tener en cuenta son:
          ul.lista-ul--color
            li 
              i.fab.fa-envira
              p.mb-0 Los materiales y los tiempos de reabastecimiento.
            li 
              i.fab.fa-envira
              p.mb-0 La mano de obra y los costos que estos implican para la producción de acuerdo con los tiempos.
            li 
              i.fab.fa-envira
              p.mb-0 Los servicios según la capacidad instalada, pues existen casos en los que inicia con una capacidad de 100 personas, con el pasar del tiempo la empresa crece y su capacidad se triplica lo que requiere la inversión en los servicios de agua, infraestructura, contratación para que esté a una capacidad mayor de la requerida.
                br
                | Los costos indirectos de fabricación o producción fijos y variables.
            li 
              i.fab.fa-envira
              p.mb-0 La administración también es variable.
            li 
              i.fab.fa-envira
              p.mb-0 La maquinaria teniendo en cuenta su capacidad. 
            li 
              i.fab.fa-envira
              p.mb-0 Los costos que requiere para su uso teniendo en cuenta los tiempos, fichas técnicas para conocer el producto o equipo, los procesos y presupuesto de venta.

          p.mb-0 A continuación, se visualiza el diagrama de un plan de presupuesto el cual tiene en cuenta las utilidades y que se hará para mejorarlas, el mercadeo, el flujo de los fondos y la inversión a capital.
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span Diagrama de un plan de presupuesto
        figure
          img(src='@/assets/curso/tema2-imagen15.svg')
          figcaption Nota. Tomada de Soto (2011).

    Separador

    #t_2_5.titulo-segundo(data-aos="fade" data-aos-delay="500")
      h2 2.5  Punto de equilibrio operativo
    
    figure.mb-5(data-aos="fade-right" data-aos-delay="500")
      img(src='@/assets/curso/tema2-imagen16.jpg')

    p.mb-5(data-aos="fade-left" data-aos-delay="500") Este punto en una empresa permite medir el grado de endeudamiento para financiar las actividades operativas de la misma, siendo el nivel de producción o nivel mínimo de ventas que es necesario para que la empresa sea capaz de cubrir los costos fijos. En general, el punto de equilibrio indica que la empresa no necesariamente ganará dinero, pues luego de cubrir esos costos fijos tendrá que revisar los demás gastos y cubrirlos.

    .cajon.color-primario.p-5.mb-5(data-aos="fade-right" data-aos-delay="500")
      p.mb-0 Haciendo el cálculo matemático se dividiría el resultado total de los costos fijos entre el precio de la venta del producto menos los costos variables requeridos para producirlo.

    .row.justify-content-center.mb-5(data-aos="fade-left" data-aos-delay="500")
      .col-lg-7
        p.mb-0 Es decir, es el nivel de ventas que se requiere para cubrir los costos operativos cuando la utilidad operativa es igual a cero, siendo una herramienta fundamental para la empresa puesto que determina el nivel de operación que cubre los costos operativos y evalúa la rentabilidad con diversos niveles de ventas.
          br
          br
          | Las operaciones de negocios tienen establecido un <strong>punto de equilibrio</strong>, resultado de la diferencia entre los costos de ventas y los costos operativos, de esa manera se separan los costos variables y los fijos, pero para lograrlo se debe tener en cuenta cuál es el precio de la venta por unidad, la cantidad de venta en unidades, los ingresos por ventas, los valores de costos fijos en un periodo determinado y los costos variables. 
          br
          br
          | Cuando se quiere determinar el valor de las unidades de venta en el punto de equilibrio, se debe tomar el costo fijo de un periodo determinado y dividirlo entre el valor del precio de venta por unidad menos los costos variables.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema2-imagen17.svg')
    
    .row.justify-content-center.mb-5(data-aos="fade-right" data-aos-delay="500")
      .col-lg-10
        figure
          img(src='@/assets/curso/tema2-imagen18.svg')
    
    p.mb-5(data-aos="fade-left" data-aos-delay="500") De este modo, cuando el ingreso total cubre el gasto o costo total se logra el punto de equilibrio, pero pueden presentarse una serie de variaciones:
    
    .row.justify-content-center.align-items-center
      .col-11(data-aos="fade-right" data-aos-delay="500")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2-imagen19.svg' alt='AvatarTop')
          .tarjeta.tarjeta--verde
            .p-4
              p.mb-0 1. Variaciones en el punto de equilibrio por disminución o aumento de costo fijo.
      .col-11(data-aos="fade-left" data-aos-delay="500")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2-imagen20.svg' alt='AvatarTop')
          .tarjeta.tarjeta--verde
            .p-4
              p.mb-0 2. Variaciones en el punto de equilibrio por disminución o aumento del costo variable.
      .col-11(data-aos="fade-right" data-aos-delay="500")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2-imagen21.svg' alt='AvatarTop')
          .tarjeta.tarjeta--verde
            .p-4
              p.mb-0 3. Variaciones en el punto de equilibrio por la disminución o aumento del precio unitario.
    
      .col-11(data-aos="fade-left" data-aos-delay="500")
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2-imagen22.svg')
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Por eso, se considera importante si una empresa quiere mantener una buena administración financiera en su fabricación o producción debe tener en cuenta la planeación de los presupuestos y su incidencia para lograr un punto de equilibrio que se ve reflejado en las ventas, precios, costos y gastos, dado que el endeudamiento financiero para la producción es el efecto causado sobre la rentabilidad de los capitales de la empresa.

</template>

<script>
export default {
  name: 'Tema2',
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

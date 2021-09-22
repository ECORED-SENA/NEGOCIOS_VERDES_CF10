<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Indicadores de gestión

    figure.mb-5 
      img(src='@/assets/curso/tema3-imagen1.jpg')

    p.mb-5 El desempeño financiero de una empresa depende de lo que llaman la salud financiera, pues esta apunta a su estabilidad mediante un diagnóstico y seguimiento de la misma y basada en índices que permiten determinar la liquidez de la empresa, la eficiencia en el uso de los recursos, la rentabilidad, qué tan solvente es la empresa y cuál es su capacidad de endeudamiento.
      br
      br
      | Existe una serie de medios para cumplir los objetivos y metas propuestas en la planeación estratégica financiera de una empresa que se definen cuando existe una claridad en la visión empresarial.

    .row.justify-content-center
      .col-11
        .cajon.color-acento-contenido.p-5.mb-5
          .row
            .col-lg-9
              p.mb-0 Los indicadores de gestión en múltiples niveles sirven para determinar el éxito en la planeación estratégica, así, los indicadores clave de alto nivel se enfocan en el desempeño de la entidad mientras que los indicadores de gestión de bajo nivel solo se enfocan en procesos o empleados de cada área como gestión humana, servicio al cliente o área contable. Es útil, entonces, implementar una enumeración para los indicadores de gestión ya que son una base para seleccionar lo que se adapte mejor a las suposiciones estratégicas.
            .col-lg-3
              figure
                img(src='@/assets/curso/tema3-imagen2.svg')

    p.mb-5 El seguimiento del crecimiento en ventas está de la mano con el rastreo del crecimiento empresarial, pues se enmarca en periodos de tiempos específicos ya sea diario, semanal, mensual, bimensual, trimestral, semestral o anual con un único propósito: lograr un resultado comparable con los datos de información financiera pudiendo ser delimitada por un producto, área o vendedor, siendo más específica y a información facilitará la toma de decisiones para la mejora de ventas.
    
    Separador

    #t_3_1.titulo-segundo
      h2 3.1  Evaluación financiera

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3-imagen3.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Por medio de los indicadores de gestión financiera se puede inferir qué tan bien se está administrando una empresa con respecto a los ingresos y ganancias. El seguimiento de este indicador permite visualizar si una entidad está logrando sus metas y objetivos a corto, mediano y largo plazo. Así, la industria, el tamaño y el tiempo en el mercado son independientes a que una empresa conozca su desempeño financiero por lo que los profesionales en el área, como los contadores, se ocupan de administrar todos los gastos, ingresos y presupuestos; ahora se profundizará en ellos:

    div.p-5.container-slider
      .tarjeta.tarjeta--gris.p-4.mb-0
        SlyderA
          div.p-5
            h3 Liquidez
            p.mb-5 En una empresa la liquidez está determinada por la capacidad para saldar las obligaciones adquiridas a corto plazo,  a la vez que estas se vencen y no solo se refiere a las finanzas totales de la entidad, sino a su habilidad para convertir en efectivo los activos y pasivos corrientes; de este modo hacerle seguimiento a una empresa permite establecer la capacidad para mantener activo el proceso productivo comercial y, predecir el cumplimiento de las obligaciones que los costean, manteniendo las actividades operativas.
            .row.mb-5
              .col-md-3.mb-5.mb-lg-0
                .tarjeta-avatar
                  img(src='@/assets/curso/tema3-imagen4.svg' alt='AvatarTop')
                  .tarjeta.color-primario
                    .text-white.p-4
                      h2.text-center La razón corriente
                      p Indica la capacidad de la empresa para cumplir con sus obligaciones financieras, endeudamiento o pasivos a corto plazo, dividiendo el activo corriente entre el pasivo corriente se obtiene los activos corrientes para respaldar los pasivos a corto plazo.

              .col-md-3.mb-lg-0
                .tarjeta-avatar
                  img(src='@/assets/curso/tema3-imagen5.svg' alt='AvatarTop')
                  .tarjeta.color-acento-botones
                    .p-4
                      h2.text-center La dependencia del pasivo
                      p Evidencia cómo depende una empresa de la venta de inventarios para la cancelación del pasivo a corto plazo.
              .col-md-3.mb-5.mb-lg-0
                .tarjeta-avatar
                  img(src='@/assets/curso/tema3-imagen6.svg' alt='AvatarTop')
                  .tarjeta.color-primario
                    .text-white.p-4
                      h2.text-center La prueba ácida
                      p Demuestra la capacidad de una empresa para cancelar las obligaciones corrientes pero sin contar con la venta de sus existencias, con los saldos de efectivo, lo producido de sus cuentas por cobrar, inversiones temporales y otros activos de liquidación diferente a los inventarios.

              .col-md-3.mb-lg-0
                .tarjeta-avatar
                  img(src='@/assets/curso/tema3-imagen7.svg' alt='AvatarTop')
                  .tarjeta.color-acento-botones
                    .p-4
                      h2.text-center El capital neto de trabajo
                      p Es lo que le quedaría a la empresa luego de haber cancelado los pasivos a corto plazo, permite al gerente tomar decisiones para inversión.

          div.p-5
            h3 Eficiencia 
            p.mb-5 Es la relación que existe entre los costos de los insumos y los productos de proceso que determina la productividad con la que se pueden administrar todos los recursos de la empresa, para que esta tenga los resultados del proceso. Los indicadores de eficiencia miden el nivel de ejecución del proceso y se concentran para medir el rendimiento de los recursos utilizados.
            .row.align-items-center
              .col-7
                .row.justify-content-center
                  .col-md-5.d-flex.mb-4
                    .tarjeta.tarjeta--verde.rounded-3.p-3
                      p.mb-0 Se presenta por rotación de inventarios todas las veces que los costos en inventarios se transforman en efectivo o se colocan a un crédito.
                  .col-md-7.d-flex.mb-4
                    .tarjeta.tarjeta--verde.rounded-3.p-3
                      p.mb-0 Los inventarios en existencia determinan la cantidad de días para realizar inventarios para la venta, así a menor cantidad de días aumenta la eficiencia en la administración de inventarios.
                  .col-md-5.d-flex.mb-4
                    .tarjeta.tarjeta--verde.rounded-3.p-3
                      p.mb-0 Cuando se mide la frecuencia con la que se recauda la cartera se habla de periodos de cobro.
                  .col-md-7.d-flex.mb-4
                    .tarjeta.tarjeta--verde.rounded-3.p-3
                      p.mb-0 El indicador de productividad es la rotación de activos, pues determina cuántos pesos se generan por cada peso invertido en el activo total.
                  .col-md-5.d-flex
                    .tarjeta.tarjeta--verde.rounded-3.p-3
                      p.mb-0 Cuando se mide la cantidad de veces que las cuentas de cobro giran en promedio en un periodo de tiempo determinado se llama rotación de cartera.
                  .col-md-7.d-flex
                    .tarjeta.tarjeta--verde.rounded-3.p-3
                      p.mb-0 Cuando se rotan los proveedores son las veces que se paga a los proveedores durante un periodo o ejercicio, de este modo, si es elevada la rotación se está haciendo buen uso de los excedentes de efectivo.
              .col-5
                figure
                  img(src='@/assets/curso/tema3-imagen8.svg')
          div.p-5
            h3 Eficacia 
            p.mb-5 La eficacia dentro de los indicadores de gestión evalúa el grado de cumplimiento de los objetivos y metas definidos en la operación estratégica, así el indicador de eficacia determina el logro de los resultados propuestos expresando si las cosas se hicieron de manera correcta, enfocándose en el deber ser, de tal manera que se conozcan y definan los requerimientos del cliente del proceso para validar la entrega del producto final o servicio esperado.
            .row.justify-content-center
              .col-md-6.d-flex
                .tarjeta-avatar-b.mb-5
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema3-imagen9.svg' alt='AvatarTop')
                  .tarjeta.tarjeta--verde
                    .p-4
                      p.mb-0 El margen por cada peso sobre dólar vendido determina lo que se genera para cubrir los gastos productivos y no productivos.
              .col-md-6.d-flex
                .tarjeta-avatar-b.mb-5
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema3-imagen10.svg' alt='AvatarTop')
                  .tarjeta.tarjeta--verde
                    .p-4
                      p.mb-0 El momento en que se refleja el rendimiento de los aportes a la cuenta de patrimonio del monto acumulado por una empresa a la fecha,  de presentación del estado contable de la misma, el cual se debe comparar con la tasa de oportunidad de cada accionista para evaluar sus futuras inversiones.
              .col-md-6.d-flex
                .tarjeta-avatar-b.mb-5
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema3-imagen11.svg' alt='AvatarTop')
                  .tarjeta.tarjeta--verde
                    .p-4
                      p.mb-0 Cuando se determina la rentabilidad de los activos de una empresa se establece una relación entre los beneficios netos y los activos totales de la empresa.
              .col-md-6.d-flex
                .tarjeta-avatar-b.mb-5
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema3-imagen12.svg' alt='AvatarTop')
                  .tarjeta.tarjeta--verde
                    .p-4
                      p.mb-0 Como otra medida para conocer la eficacia de la administración y entrega a los asociados, está la utilidad por acción como una herramienta  para la toma de decisiones que aumentan la participación.
              .col-md-6
                .tarjeta-avatar-b.mb-5
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema3-imagen13.svg' alt='AvatarTop')
                  .tarjeta.tarjeta--verde
                    .p-4
                      p.mb-0 La relación existente entre las utilidades después de los ingresos y egresos no productivos e impuestos, contribuyen a restar la capacidad de producir rentabilidad sobre las ventas.
          div.p-5
            h3 Endeudamiento 
            p.mb-5 Busca medir el grado y la forma en que participan los deudores para el financiamiento de la empresa, se trata de definir el riesgo que les podría causar a los mismos, a los dueños, para un determinado nivel de endeudamiento.
            .row.justify-content-center
              .col-10
                figure
                  img(src='@/assets/curso/tema3-imagen14.svg')

          div.p-5
            h3 Rentabilidad  
            p.mb-5 La palabra rentabilidad proviene de renta, que viene siendo la utilidad o ganancia de algo, aunque también se entiende como inversión. Es la habilidad, cualidad o capacidad para invertir y generar un beneficio cuantificable mediante indicadores financieros.
              br
              br
              | De este modo, se puede afirmar que una empresa adquiere valor solo cuando el rendimiento de su capital es mayor a su tasa de rendimiento, es decir, una empresa genera valor si cubre los costos de producción o ventas, gastos o costos de capital y le queda algo.
            .row.justify-content-center
              .col-8
                figure
                  img(src='@/assets/curso/tema3-imagen15.svg')
          div.p-5
            h3.mb-5 Rentabilidad 
            .cajon.color-primario.p-5.mb-5
              p.mb-0 La contribución marginal dentro de la rentabilidad es considera como el exceso de los ingresos con respecto a los costos variables, el cual debe cubrir los costos fijos y la utilidad.
            .row
              .col-lg-8
                p.mb-0 Existe un margen de contribución que se determina por cada peso que se efectúe en ventas, que se deja para cubrir los costos y gastos fijos. También se determinan las ganancias o utilidad por empresa o proyecto como la capacidad para generar caja, la mínima rentabilidad que debería generar un activo, es decir lo que le cuesta a la empresa financiar sus activos.
              .col-lg-4
                figure
                  img(src='@/assets/curso/tema3-imagen16.svg')
    
    Separador

    #t_3_2.titulo-segundo
      h2 3.2  Informe de gestión

    p.mb-5 La alta dirección o los dueños de negocios o empresas están familiarizados con el término informe financiero ya que es un documento base que reciben dependiendo de la entidad mensual, trimestral o semestralmente, pero no conocen el nivel de detalle, algunos de estos informes pueden llevar pues esos detalles le permitirán al empresario aumentar su:

    .row.justify-content-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/tema3-imagen17.svg')
      .col-lg-4
        figure
          img(src='@/assets/curso/tema3-imagen18.svg')
      .col-lg-4
        figure
          img(src='@/assets/curso/tema3-imagen19.svg')
    
    p.mb-5 Los informes financieros están enfocados al cumplimiento y auditoría para la declaración de renta con sus pérdidas y ganancias, los cálculos de balance, las cuentas por pagar y cobrar, los estados de flujo de caja.

    .row.justify-content-center.mb-5
      .col-lg-9
        .cajon.color-acento-contenido.p-5
          .row.align-items-center
            .col-lg-3
              figure
                img(src='@/assets/curso/tema3-imagen20.svg')
            .col-lg-9
              p.mb-0 Estos informes son obligatorios dentro de una empresa ya que la DIAN, bancos, inversionistas o reguladores se basan en estos informes para aprobar créditos y para validar que la empresa cumple con los principios contables.
    
    .row.justify-content-center.mb-5
      .col-lg-7
        p.mb-4 Es un reflejo de las finanzas empresariales, ya que muestran la imagen de la empresa en calidad de rendimiento, pero no dan un panorama específico por su funcionamiento, rendimiento, rentabilidad y comportamiento en actividades ejecutadas; por eso, aparece la necesidad de los informes de gestión como un estudio al detalle que optimiza la situación económica de la empresa.
          br
          br
          | Los informes de gestión también conocidos en inglés como <i>management report</i> buscan:  
        
        ul.lista-ul--color.mb-4
          li 
            i.fab.fa-envira
            p.mb-0 Orientar a la alta gerencia sobre los diferentes aspectos de una empresa o negocio.
          li 
            i.fab.fa-envira
            p.mb-0 Dejan reposar las diferentes opciones con datos precisos recopilados de las diferentes áreas que hacen seguimiento a los indicadores de gestión, evidenciando el valor de la empresa durante un periodo determinado con los llamados estados financieros y estados administrativos. 
          li 
            i.fab.fa-envira
            p.mb-0 Soportan el comportamiento de las sociedades para la toma de decisiones y seguir siendo competitivos. 
        p.mb-0 Estos informes son fundamentales para una apropiada estrategia organizacional, por ello, se debe garantizar que el informe sea tan detallado que refleje fácilmente las ganancias y pérdidas por área, la tasa de realización y la tasa de uso. 
      .col-lg-5
        figure
          img(src='@/assets/curso/tema3-imagen21.png')

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3-imagen22.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Por ejemplo: el análisis del área de marketing en un periodo de tiempo establecido, determina exactamente los gastos y riesgos que se presentaron por actividad, por otra parte, las ganancias que arrojo un vendedor en un mes son datos que, a simple vista, no se aprecian y representan un indicador fundamental para la empresa.

    .row.align-items-center.mb-5
      .col-lg-6
        p.mb-0 Sin embargo, existen empresas que asumen no tener tiempo para realizar informes de gestión detallados, pero ignoran el hecho que no recibirlos será un obstáculo más que se presentará para el crecimiento de estas, pues se deben evitar alternativas a los sistemas de información de gestión porque son costosos y no generan un retorno de inversión. 
      .col-lg-6
        .cajon.color-acento-contenido.p-5
          .row.align-items-center
            .col-lg-3
              figure
                img(src='@/assets/curso/tema3-imagen23.svg')
            .col-lg-9
              p.mb-0 Una empresa requiere datos detallados sobre sus finanzas y gestión para auditar la liquidez, desarrollo y crecimiento, tratando de asegurar las cuentas que se pueden consolidar evitando una falta de la liquidez específica.

    p.mb-4 El informe de gestión va más allá de la contabilidad, pues es una supervisión técnica y administrativa de las actividades de la empresa que garantiza la implementación de procedimientos, políticas y sistemas que facilitan la generación de informes financieros precisos, ya que establece los puntos de referencia de rendimiento claros, facilita el aprendizaje y ejecución apropiada de operaciones, mejora la comunicación y colaboración,  impulsa el compromiso, la motivación y fomenta el crecimiento continuo de la empresa.

    Separador

</template>

<script>
export default {
  name: 'Tema3',
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

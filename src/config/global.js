export default {
  global: {
    componenteFormativo: 'Costeo e indicadores en la negociación verde',
    descripcionCurso:
      'La negociación comercial internacional es fundamental en la economía nacional, pues está ligada a los acuerdos internacionales que permiten el intercambio en el mercado y facilitan la mejora económica de países subdesarrollados. Ahí se da la oportunidad a las grandes, medianas, pequeñas y microempresas para que puedan innovar y participar en la importación y exportación de productos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La negociación internacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Acuerdos internacionales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Negociación',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Costos y presupuestos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Costos y gastos por actividades',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Estrategias de costos ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Costos de comercio internacional',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Presupuestos',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Punto de equilibrio operativo',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Indicadores de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Evaluación financiera',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Informe de gestión',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Guajardo, C.  (2013). Comercio internacional y globalización. Ediciones Jurídicas Cuyo. ',
      link:
        'https://books.google.com.co/books?hl=es&lr=&id=MbmxtYVYJ2gC&oi=fnd&pg=PA19&dq=historia+del+comercio+internacional&ots=ePr5rDzjWy&sig=TE4Gcc9N0sRR_Hat2kQWEJU4slI#v=onepage&q&f=false',
    },
    {
      referencia: 'OEA. (2021). Tratados y acuerdos. ',
      link: 'http://www.oas.org/es/temas/tratados_acuerdos.asp',
    },
    {
      referencia:
        'Paredes, O. (2021). Análisis y gestión estratégica de costos. ',
      link:
        'http://www.saber.ula.ve/bitstream/handle/123456789/17228/analisis.pdf;jsessionid=AE72FBE4DCA8C270C4984D86B6A63A5B?sequence=1',
    },
    {
      referencia:
        'Sierralta, A. (2013). Negociaciones comerciales internacionales. Fondo Editorial de la Pontificia Universidad Católica del Perú. ',
      link:
        'https://books.google.com.co/books?id=G6DNDwAAQBAJ&printsec=frontcover&dq=negociaciones+internacionales&hl=es-419&sa=X&redir_esc=y#v=onepage&q&f=false',
    },
    {
      referencia:
        'Soto, C.  (2011). Presupuestos empresariales. Ecoe Ediciones. ',
      link:
        'https://books.google.com.co/books?id=K8A0DgAAQBAJ&printsec=frontcover&dq=presupuestos&hl=es-419&sa=X&redir_esc=y#v=onepage&q&f=false',
    },
  ],
  glosario: [
    {
      termino: 'Costos',
      significado:
        'parten de un desembolso económico que hacen parte de las salidas monetarias de una persona o empresa por un periodo determinado, sin ser parte de las ganancias o pérdidas, pero está orientado a la producción o fabricación de una entidad.',
    },
    {
      termino: 'Gastos',
      significado:
        'desembolsos económicos relacionados directamente contra los ingresos de dinero en un mismo periodo de tiempo, pueden ser usados para mantener áreas administrativas o comerciales dentro de una empresa.',
    },
    {
      termino: 'Inventario',
      significado:
        'proceso administrativo y contable de los activos que posee en el momento una entidad, estos son actualizados generalmente en una red de información o servidor que almacena la cantidad de producto terminado o como insumo para producción en su poder.',
    },
    {
      termino: 'Negocio',
      significado:
        'arte de diferenciar emociones y actos reflexivos en los que se busca conciliar o llegar a un acuerdo con otra persona o parte donde ambos se verán beneficiados si se realiza de una manera apropiada.',
    },
    {
      termino: 'Presupuesto',
      significado:
        'análisis de datos históricos que permiten determinar el futuro y presente de los costos y gastos estimados para un proceso productivo, sistema o actividad en una empresa.',
    },
    {
      termino: 'Rentabilidad',
      significado:
        'remuneración que se recibe por un dinero o capital invertido en un negocio, producto o servicio en específico.',
    },
    {
      termino: 'Supranacional',
      significado:
        'categoría de institución que significa pertenencia permanente y pasiva de los individuos más allá del Estado al que pertenecen.',
    },
  ],
  complementario: [
    {
      texto:
        'Universidad Santo Tomás. (2017). Clase de negociación internacional. [Video] YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=2o-HCck8HnU',
    },
    {
      texto: 'Padilla, M. (2012). Gestión financiera. Ecoe Ediciones.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/126525?page=1',
    },
    {
      texto:
        'Claro Perú. (2014). ¿Por qué tener un presupuesto? [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=yPC2jA1ryFA',
    },
    {
      texto:
        'López, A. (2021). Apalancamiento y punto de equilibrio operativo. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=U3zcLiVqs-g',
    },
    {
      texto:
        'Ferreiro, G. L. (2018). Indicadores de desempeño empresarial para medir la calidad de las estrategias financieras. Universidad de La Habana.',
      tipo: 'PDF',
      descarga: '/downloads/cofin05118.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jessica Andrea Jauregui Silva',
        cargo: 'Experta temática',
        centro:
          'Centro de la Industria, Empresa y Servicios CIES - Regional Norte de Santander',
      },
      {
        nombre: 'Paola Moya Peralta ',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sergio Omar Camacho Orduz',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

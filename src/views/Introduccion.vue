<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5(data-aos="fade-right" data-aos-delay="500") Las negociaciones comerciales internacionales son unos procesos que involucran diferentes actores y han tenido una trayectoria grande, como se observa en el siguiente video:

    figure.mb-5(data-aos="fade-left" data-aos-delay="500")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/D0-hLPZzTtY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>

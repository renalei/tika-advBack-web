<template>
  <div class="main-body">
    <top></top>
    <left-slider></left-slider>
    <preserve></preserve>
    <form-right></form-right>
  </div>
</template>


<script type="text/ecmascript-6">
  import Top from 'common/top/top'
  import leftSlider from 'common/leftSlider/leftSlider'
  import Preserve from 'common/content/preserve-type'
  import formRight from 'common/right/formRight'

  export default {
    components: {
      Top,
      leftSlider,
      Preserve,
      formRight
    }
  }

</script>


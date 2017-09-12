<template>
  <div class="main-body">
    <top></top>
    <left-slider></left-slider>
    <add-news></add-news>
  </div>
</template>


<script type="text/ecmascript-6">
  import Top from 'common/top/top'
  import leftSlider from 'common/leftSlider/leftSlider'
  import AddNews from 'common/content/add-news'

  export default {
    components: {
      Top,
      leftSlider,
      AddNews
    }
  }

</script>


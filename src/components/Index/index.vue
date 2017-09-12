<template>
  <div class="main-body">
    <top></top>
    <left-slider></left-slider>
    <content-list></content-list>
    <form-right></form-right>
    <step-right></step-right>
  </div>
</template>


<script type="text/ecmascript-6">
  import Top from 'common/top/top'
  import leftSlider from 'common/leftSlider/leftSlider'
  import ContentList from 'common/content/content-ueList'
  import formRight from 'common/right/formRight'
  import stepRight from 'common/right/stepRight'
  export default {
    components: {
      Top,
      leftSlider,
      ContentList,
      stepRight,
      formRight
    }
  }

</script>


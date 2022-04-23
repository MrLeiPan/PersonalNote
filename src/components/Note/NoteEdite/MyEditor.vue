<template>
  <div class="tinymce-box">
    <editor
        api-key="d4ovmjgdlpviyrcz4r2ewtpol0itvp44mwxn5e7tugrpp1un"
        :init="init"
        :disabled=disabled
        :initial-value="initialValue"
        model-events="change keydown blur focus paste"
        output-format="html"
        v-model="data"


    />
  </div>
</template>

<script>
//引入tinymce编辑器
import Editor from '@tinymce/tinymce-vue'



export default {
  name: "MyEditor",
  components:{
    Editor
  },
  props:["data"],
  data(){
    return{
      content:"",
      initialValue:"",
      disabled:false,
      init:{
        inline: true,
        menubar: false,
        language: 'zh_CN', //本地化设置
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount autosave autoresize'
        ],
        toolbar:
            'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help'
      }
    }
  },
  methods: {
    change(){
      console.log("change");
    },
    keydown(){
      console.log("keydown");
    },
    blur(){
      console.log("blur");
    },
    focus(){
      console.log("focus");
    },
    paste(){
      console.log("paste");
    },
    clickHandle(e){
      this.$emit('')
    }
  },

}
</script>

<style scoped>

</style>

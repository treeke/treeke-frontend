<template>
<div>
  <MyHeader/>
    <div class="picshow">
  <ul>
    <li><a href="/"><i><img src="@/assets/imgs/b01.jpg"></i>
      <div class="font">
        <h3>关于我</h3>
      </div>
      </a></li>
    <li><a href="/"><i><img src="@/assets/imgs/b02.jpg"></i>
      <div class="font">
        <h3>关于我</h3>
      </div>
      </a></li>
    <li><a href="/"><i><img src="@/assets/imgs/b03.jpg"></i>
      <div class="font">
        <h3>关于我</h3>
      </div>
      </a></li>
    <li><a href="/"><i><img src="@/assets/imgs/b04.jpg"></i>
      <div class="font">
        <h3>关于我</h3>
      </div>
      </a></li>
    <li><a href="/"><i><img src="@/assets/imgs/b05.jpg"></i>
      <div class="font">
        <h3>关于我</h3>
      </div>
      </a></li>
  </ul>
</div>
<MyFooter></MyFooter>
</div>
</template>

<script>
import MyHeader from "@/components/Header.vue";
import MyFooter from "@/components/Footer.vue";
export default {
  name: "PicShow",
  data() {
    return {};
  },
  components: {
    MyHeader,
    MyFooter
  },
  props: {},
  methods: {},
  watch: {}
};
</script>

<style>
.picshow {
  width: 100%;
  overflow: hidden;
  margin: 20px auto;
}
.picshow li {
  width: 20%;
  display: inline-block;
  float: left;
  overflow: hidden;
  position: relative;
}
.picshow li i {
  overflow: hidden;
  display: block;
  height: 400px;
}
.picshow li img {
  display: block;
  width: 100%;
  transition: all 0.5s;
}
.picshow li:hover img {
  transform: scale(1.05, 1.05);
  opacity: 1;
}
/* .picshow li:hover .font::before, .picshow li:hover .font::after { opacity: 1; transform: scale(1); transition: all 0.5s; } */
.picshow li .font {
  color: #fff;
  padding: 0;
  margin: 0;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
}
.picshow li .font::before,
.picshow li .font::after {
  position: absolute;
  content: "";
  opacity: 0;
  -webkit-transition: opacity 0.4s, -webkit-transform 0.4s;
  -moz-transition: opacity 0.4s, -moz-transform 0.4s;
  -o-transition: opacity 0.4s, -o-transform 0.4s;
  transition: opacity 0.4s, transform 0.4s;
}
.picshow li .font::before {
  top: 14%;
  right: 5%;
  bottom: 14%;
  left: 5%;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  -webkit-transform: scale(0, 1);
  -moz-transform: scale(0, 1);
  -o-transform: scale(0, 1);
  transform: scale(0, 1);
  -webkit-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -o-transform-origin: 0 0;
  transform-origin: 0 0;
}
.picshow li .font::after {
  top: 8%;
  right: 10%;
  bottom: 8%;
  left: 10%;
  border-right: 1px solid #fff;
  border-left: 1px solid #fff;
  -webkit-transform: scale(1, 0);
  -moz-transform: scale(1, 0);
  -o-transform: scale(1, 0);
  transform: scale(1, 0);
  -webkit-transform-origin: 100% 0;
  -moz-transform-origin: 100% 0;
  -o-transform-origin: 100% 0;
  transform-origin: 100% 0;
}
.picshow li .font h3 {
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  width: 80%;
  position: absolute;
  top: 50%;
  left: 10%;
  background: rgba(0, 0, 0, 0.5);
  line-height: 1.9;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  opacity: 0;
}
.picshow li:hover .font h3 {
  top: 45%;
  opacity: 1;
}
</style>


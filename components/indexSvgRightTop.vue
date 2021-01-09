<template>
  <div>
    <svg
      class="svg_right_1"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 640 480"
      style="enable-background: new 0 0 640 480"
      xml:space="preserve"
    >
      <circle class="svg_right_1_1" cx="322" cy="239" r="235" />
      <path
        class="svg_right_1_2"
        d="M280.6,209.8c0-37.5,135.3-67.8,302.4-67.8"
      />
      <path
        class="svg_right_1_2"
        d="M280.6,209.8c0,17.9-83.9,29.2-218.1,29.2"
      />
      <path
        class="svg_right_1_2"
        d="M290.6,258.8c0-37.5,135.3-67.8,302.4-67.8"
      />
      <path
        class="svg_right_1_2"
        d="M290.6,258.8c0,17.9-83.9,29.2-218.1,29.2"
      />
      <path
        class="svg_right_1_2"
        d="M304.6,307.8c0-37.5,135.3-67.8,302.4-67.8"
      />
      <path
        class="svg_right_1_2"
        d="M304.6,307.8c0,17.9-83.9,29.2-218.1,29.2"
      />
    </svg>
    <!--  -->
    <svg
      id="morph-example"
      class="svg_right_2"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 640 480"
      style="enable-background: new 0 0 640 480"
      xml:space="preserve"
    >
      <circle class="svg_right_2_1" cx="320" cy="240" r="235" />
      <path
        class="svg_right_2_2"
        d="M291.6,188.9c36.5-8.4,96.5,116.5,134.1,279.4"
      />
      <path class="svg_right_2_2" d="M291.6,188.9c-17.5,4-47.3-75.2-77.5-206" />
      <path
        class="svg_right_2_2"
        d="M246.1,209.6c36.5-8.4,96.5,116.5,134.1,279.4"
      />
      <path class="svg_right_2_2" d="M246.1,209.6c-17.5,4-47.3-75.2-77.5-206" />
      <path
        class="svg_right_2_2"
        d="M201.5,234.3c36.5-8.4,96.5,116.5,134.1,279.4"
      />
      <path class="svg_right_2_2" d="M201.5,234.3c-17.5,4-47.3-75.2-77.5-206" />
      <circle class="svg_right_2_3" cx="503" cy="105" r="77" />
    </svg>
    <svg
      version="1.1"
      id="Слой_1"
      class="svg_left"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 400 400"
      style="enable-background: new 0 0 400 400"
      xml:space="preserve"
    >
      <g>
        <circle class="st0" cx="201.6" cy="200.4" r="194.6" />
      </g>
      <g>
        <circle class="st1" cx="318.9" cy="50" r="46" />
      </g>
      <path class="st1" d="M379.9,278.9" />
      <path
        class="st1"
        d="M369.8,283.8c-21.5,9.1-44.3,13.7-67.9,13.7c-23.6,0-46.4-4.6-67.9-13.7c-20.8-8.7-39.4-21.3-55.4-37.4
	c-16-16-28.6-34.7-37.4-55.4c-9.1-21.5-13.7-44.3-13.7-67.9c0-23.6,4.6-46.4,13.7-67.9c7.3-17.3,17.3-33.1,29.6-47.1l-7,1.1
	c-25.6,30.9-41,70.6-41,113.9c0,98.8,80.1,178.9,178.9,178.9c26.7,0,52-5.9,74.8-16.4l3-6.5C376.4,280.8,373.1,282.4,369.8,283.8z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>
<style scoped>
.st0 {
  fill: #efbebe;
}
.st1 {
  fill: #fafafa;
}
.svg_left {
  position: absolute;
  width: 18%;
  bottom: 10%;
  z-index: 1;
  left: -5%;
  animation-name: svg_left;
  animation-duration: 2s;
  transition: 0.3s;
}
.svg_left:hover {
  left: -4%;
  transform: scale(1.1);
}
@keyframes svg_left {
  from {
    left: -40%;
    bottom: 0%;
    transform: rotate(180deg);
  }
  to {
    left: -5%;
    bottom: 10%;
    transform: rotate(0deg);
  }
}
.svg_right_1_1 {
  fill: #b4dce6;
}
.svg_right_1_2 {
  fill: none;
  stroke: #ffffff;
  stroke-width: 7;
  stroke-miterlimit: 10;
}
.svg_right_2_1 {
  fill: #685f99;
}
.svg_right_2_2 {
  fill: none;
  stroke: #ffffff;
  stroke-width: 7;
  stroke-miterlimit: 10;
}
.svg_right_2_3 {
  fill: #fce6ea;
}
.svg_right_1 {
  position: absolute;
  width: 7%;
  bottom: 10%;
  z-index: 1;
  right: 5%;
  animation-name: svg_right_1;
  animation-duration: 2s;
  transition: 0.3s;
}
.svg_right_1:hover {
  transform: scale(1.1) rotate(20deg);
}
@keyframes svg_right_1 {
  from {
    right: 1%;
    bottom: 70%;
  }
  to {
    right: 5%;
    bottom: 10%;
  }
}
.svg_right_2 {
  overflow: visible;
  position: absolute;
  width: 6%;
  top: 10%;
  z-index: 1;
  right: 45%;
  animation-name: svg_right_2;
  animation-duration: 2s;
  transition: 0.3s;
}
.svg_right_2_3 {
  transition: 1s;
}
.svg_right_2:hover .svg_right_2_3 {
  transform: rotate(360deg);
}
@keyframes svg_right_2 {
  from {
    right: 0%;
    top: 10%;
  }
  to {
    right: 45%;
    top: 10%;
  }
}
</style>
<template>
  <div class="mid">
    <div class="content_center">
      <ul class="serials">
        <li>랜덤</li>
        <li>랜덤</li>
        <li>랜덤</li>
        <li>랜덤</li>
        <li>랜덤</li>
        <li>랜덤</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.content_center {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  margin-right: auto;
  margin-left: auto;
  max-width: 60rem;

  /* font-size: 1rem;
  font-weight: 400;
  line-height: 1.5; */

  /* color: white; */
}

.mid {
  color: black;
  padding: 15px;

  border-bottom: 0.05rem solid #eee;
}

ul.serials li {
  display: list-item;
  text-align: -webkit-match-parent;
  unicode-bidi: isolate;
  padding: 10px 15px;
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 1px 1px 1px #f5f5f5;
  margin-bottom: 10px;
  color: initial;
}

ul.serials {
  padding-left: 0px;
  list-style: none;
  width: 100%;
  padding-bottom: 30px;
}
</style>

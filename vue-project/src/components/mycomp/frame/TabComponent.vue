<template>
  <div class="tab">
    <div class="content_center">
      <nav class="w-100">
        <RouterLink to="/">
          <a class="nav-link">홈</a>
        </RouterLink>

        <a class="nav-link">문제</a>
        <a class="nav-link">시험</a>
        <a class="nav-link">북마크</a>
        <a class="nav-link">포럼</a>
      </nav>
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

.tab {
  background-color: #428bca;

  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;

  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;

  color: white;
}

.w-100 {
  width: 100% !important;
  white-space: nowrap;
}

.nav-link {
  padding: 0.8rem 1rem 0.8rem 0;
  color: white;

  /* text-align: center; */
  /* display: flex; */
  /* align-items: center; */
}
</style>

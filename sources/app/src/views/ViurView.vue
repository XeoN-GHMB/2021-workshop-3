<template>
  <div class="viur">
    <img src="../assets/viur.svg">
    <h1>Welcome to ViUR</h1>
    <p>ViUR is an open source software development framework that was created to fulfill both designers and developers needs and requirements.</p>
    <p> It provides a clear concept for implementing agile data management software. It's written in Python™ and already attracted a steady growing community constantly helping and improving ViUR.</p>

    <h3>Essential Links</h3>
    <ul class="links">
        <li><a href="https://viur.dev/" target="_blank" rel="noopener">ViUR.dev</a></li>
        <li><a href="hhttps://viur-core.readthedocs.io/en/latest/?badge=latest" target="_blank" rel="noopener">Core Docs</a></li>
        <li><a href="https://github.com/viur-framework/viur-base" target="_blank" rel="noopener">ViUR Base Template</a></li>
        <li><a href="https://github.com/viur-framework/awesome-viur" target="_blank" rel="noopener">awesome-viur</a></li>
    </ul>

    <h3>1. Whitelist Vue dev-server</h3>
    <div class="code">
      <code>
        if os.environ['GAE_ENV'] == "localdev":<br>
        &nbsp;&nbsp;"Whitelist vueJs Frontend server"<br>
        &nbsp;&nbsp;request.BrowseHandler.requestValidators = []<br>
        &nbsp;&nbsp;def preprocessRequestHandler(path):<br>
        &nbsp;&nbsp;&nbsp;&nbsp;currentRequest.get().response.headers["Access-Control-Allow-Origin"] = "http://localhost:8081"<br>
            currentRequest.get().response.headers["Access-Control-Allow-Credentials"] = "true"<br>
        &nbsp;&nbsp;&nbsp;&nbsp;return (path)<br>
          conf["viur.requestPreprocessor"] = preprocessRequestHandler
      </code>
    </div>

    <h3>Example Login Process</h3>
    <user-login></user-login>

    <h3>Requesttypes</h3>
    import:<br>
    <code>
      import Request from "@/request.js"
    </code>
    <div style="margin-top:20px;">
    <ul>
      <li><b>Request.get</b>: Send data as get request, get requests are cacheable</li>
      <li><b>Request.post</b>: Send data as post request</li>
      <li><b>Request.securePost</b>: This request fetches an skey which is appended</li>
      <li><b>Request.list</b>: send a list request with moduleName and dataObject</li>
      <li><b>Request.view</b>: send a view request with moduleName and dataObject</li>
    </ul>
    </div>

    <h3>Views</h3>
    use addRoute to autogenerate the matching route for a view<br>
    This route will automatically fetch a skellist<br>
    <code>
      addRoute("example/example_list")
    </code>

    <div style="height:100px"></div>


  </div>
</template>

<script>

import userLogin from "@/components/userLogin.vue";
export default {
  name: "ShoelaceView",
  components: {userLogin},
  setup(props, context) {


    return {}
  }
}
</script>
<style scoped>
  .code{
    text-align: left;
    margin: 0 auto;
    width:800px;
    margin-bottom: 10px;
  }
  img{
    width:20%;
  }

ul {
  list-style-type: none;
  padding: 0;
}

ul.links li {
  display: inline-block;
  margin: 0 10px;
}
</style>







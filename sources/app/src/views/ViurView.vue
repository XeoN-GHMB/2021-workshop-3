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

   <h2>Login Process</h2>
    <h3>1. Whitelist Vue dev-server</h3>
    <p>Add the following code to the <strong>main.py</strong> from your Viur-project to allow the VueJS-Server to communicate with Viur!</p>

    <p>First add the missing imports:</p>
     <div class="code">
      <code>
        import os <br>
        from viur.core import request <br>
        from viur.core.utils import currentRequest
      </code>
    </div>

    <p>Then add the preprocess Handler:</p>
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
    <br>
    <p>Make sure that  <code>User.json = True</code> is added to your User-module</p>
  <br>
     <h3>2. Example Login Process</h3>
    <user-login></user-login>
    <hr>
     <h3>Requesttypes</h3>
    To use the requests, known from Jinja, you have to import this script:<br>
    <code>
      import Request from "@/request.js"
    </code>
    <div style="margin-top:20px;">
    <ul>
      <li><b>Request.get("$url", {...})</b>: Send data as get request, get requests are cacheable
      <div class="code"><code>
        Request.get("/json/user/view/self").then(<br>
            (resp) => {<br>
                console.log(resp)<br>
            }).catch(<br>
                (error)=>{<br>
                     console.log(error)<br>
                })<br>
      </code></div>

      </li>
      <li>
        <p><b>Request.list("$modulename", {....})</b>: send a list request with moduleName and dataObject.
          <br> Internally, the list-request uses the get-request. You can add a dataObject with filters.</p>
        <div class="code">
        <code>
          Request.list("modulename", {"key":"5sdf434636"}).then(<br>
          (resp) => {<br>
              console.log(resp.data)<br>
          }).catch(<br>
              (error)=>{<br>
                  console.log(error)<br>
              })
        </code>
        </div>
      </li>
       <li><b>Request.post("$url",{...})</b>: Send data as post request</li>
      <li><b>Request.view("$modulename","key", {...})</b>: send a view request with moduleName and key and dataObj</li>
       <li><b>Request.securePost()</b>: This request fetches an skey which is appended</li>
    </ul>
    </div>
    <hr>

    <h3>Views</h3>
    use addRoute to autogenerate the matching route for a view<br>
    This route will automatically fetch a skellist<br>
    <code>
      addRoute("example/example_list.vue")
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

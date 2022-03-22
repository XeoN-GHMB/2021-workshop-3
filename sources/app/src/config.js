export default {
    // This is the URL used for requests to the ViUR application
    apiUrl: import.meta.env.DEV ? "http://localhost:8080" : "",
    // This is the place where viur-shoelace will be served in production
    staticFolder: "/static/app"

}

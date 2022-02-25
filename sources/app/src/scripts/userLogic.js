import Request from "@/request.js"

const userLogic = (global) => {

    //reset reactive variables
    function loginStatusReset(error,status){
        global.state.userLoggedIn = status
        global.state.user = null
        console.error(error)
    }

    //login
    function login(name, password){
        global.state.userLoggedIn = "loading"
        Request.securePost("/json/user/auth_userpassword/login",
    {
                "name": name,
                "password": password
            }
        ).then((resp) => {

            // we can only view our user if login was successful
            Request.get("/json/user/view/self").then(
            (resp) => {
                console.log(resp.status)
                global.state.userLoggedIn = "success"
                global.state.user = resp.values
            }).catch(
                (error)=>{
                    loginStatusReset(error, "failed")
                }
            )
        }).catch(
            (error) => {
                loginStatusReset(error, "failed")

            }
        )
    }

    //logout
    function logout(){
        Request.securePost("/json/user/logout"
        ).then(
            (resp) => {
                loginStatusReset(resp, "initial")
            }
        ).catch(
            (error) => console.error(error)
        )
    }

    //test if logged in
    function isLoggedIn(){

        Request.get("/json/user/view/self").then(
        (resp) => {
            console.log(resp.status)
            global.state.userLoggedIn = "success"
            global.state.user = resp.values
        }).catch(
            (error)=>{

            }
        )

        return global.state.userLoggedIn
    }

    //get current user
    function getUser(){
        return global.state.user
    }

    return {
        login,
        logout,
        isLoggedIn,
        getUser
    }
}

export default userLogic
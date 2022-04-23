import http from "@/api/apiConfig/http";

export default {
    /*获取书列表*/
    getBooks(){
        return  http.post("/api/books/getBase?pid=1").then((resp)=>{
            return resp.data
        })
    },

    /*获取目录*/
    getCategories(pid) {
        return http.post("/api/categories/category?pid="+pid).then((resp)=>{
            return resp.data
        })
    }

}
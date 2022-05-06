import http from "@/api/apiConfig/http";

export default {
    /*获取书列表*/
    getBooks(){
        return  http.post("/api/books/getBase?pid=1").then((resp)=>{
            return resp.data
        })
    },
    /*获取一级目录*/
    getCategories(data){
        let user = JSON.parse(localStorage.getItem("user"));//序列化的对象需要parse转换为js对象，因为localStorage不能存储对象
        console.log(user);
        data.uid = user.id
        return http.post("/api/categories/category",data).then((resp)=>{
            return resp.data
        })
    },
    /*获取笔记目录*/
    getNotesCategories(data) {
        let user = JSON.parse(localStorage.getItem("user"));//序列化的对象需要parse转换为js对象，因为localStorage不能存储对象
        console.log(user);
        data.uid = user.id
        return http.post("/api/cascade/notes",data).then((resp)=>{
            return resp.data
        })
    },

    /*获取书籍目录*/
    getBooksCategories(data) {
        let user = JSON.parse(localStorage.getItem("user"));//序列化的对象需要parse转换为js对象，因为localStorage不能存储对象
        console.log(user);
        data.uid = user.id
        return http.post("/api/cascade/books",data).then((resp)=>{
            return resp.data
        })
    },

    /*通过id获取笔记*/
    getNoteById(data){
        let user = JSON.parse(localStorage.getItem("user"));//序列化的对象需要parse转换为js对象，因为localStorage不能存储对象
        console.log(user);
        data.uid = user.id
        return http.post("/api/notes/getNote",data).then((resp)=>{
            return resp.data
        })
    },

    /*添加二级目录(主题)*/
    addSubCategory(data){
        let user = JSON.parse(localStorage.getItem("user"));//序列化的对象需要parse转换为js对象，因为localStorage不能存储对象
        console.log(user);
        data.uid = user.id
        return http.post("/api/categories/add",data).then((resp)=>{
            return resp.data
        })
    },

    /*删除主题*/
    deleteSub(data){
        let user = JSON.parse(localStorage.getItem("user"));//序列化的对象需要parse转换为js对象，因为localStorage不能存储对象
        console.log(user);
        data.uid = user.id
        return http.post("/api/categories/delete",data).then((resp)=>{
            return resp.data
        })
    },

    /*添加笔记*/
    addNote(note){
        return http.post("/api/notes/add",note).then((resp)=>{
            return resp.data
        })
    },

    /*用户登录*/

    login(user){
        return http.post("/api/users/login",user).then((resp)=>{
            return resp.data
        })
    },

    /*用户注册*/

    register(user){
        return http.post("/api/users/register",user).then((resp)=>{
            return resp.data
        })
    },

    /*更新笔记*/

    updateNote(note){
        let user = JSON.parse(localStorage.getItem("user"));//序列化的对象需要parse转换为js对象，因为localStorage不能存储对象
        console.log(user);
        note.uid = user.id
        return http.post("/api/notes/update",note).then((resp)=>{
            return resp.data
        })
    }
}

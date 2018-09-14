const apiGetAllBlogs = 'http://api.slg.vn/apiv2/article/list-articles?offset=0&limit=99';
const apiShowBlog = 'http://api.slg.vn/apiv2/article/articles';

async function getBlogsFromServer() {
    try {
        let response = await fetch(apiGetAllBlogs, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: '',
        });
        let blogs = await response.status === 200 ? JSON.parse(response._bodyInit) : [];
        return blogs.data;
    } catch (error) {
        alert(error);
    }
}

async function getBlogDetailFromServer(id) {
    const link = apiShowBlog + "/" + id;
    console.log(link);
    try {
        let response = await fetch(link, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: '',
        });
        console.log(response);
        let blog = await response.status === 200 ? response._bodyText : '';
        return blog;
    } catch (error) {
        alert(error);
    }
}

export { 
    getBlogsFromServer,
    getBlogDetailFromServer
};
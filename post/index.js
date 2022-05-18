const API_URL = "https://jsonplaceholder.typicode.com"
 async function getPostsAndComments(){
    const response = await Promise.all([
        fetch(`${API_URL}/posts`) ,
        fetch( `${API_URL}/comments`)
    ]);
    const [postsResponse , commentsResponse] = response;
    const posts = await postsResponse.json();
    const comments = await commentsResponse.json();
    return [posts , comments];
 };

// function mySort(a,b) {
//     return sort(a.connent.length, b.comment.length)
// }
 function getMergedCommentsToPosts(posts , comments, sortOrder){
    const commentsHash = {};
    for(let comment of comments){
        if(commentsHash[comment.postId]){
            commentsHash[comment.postId].push(comment)
        }else{
            commentsHash[comment.postId] = [comment]
        }
    }
    const postAndComments = posts.map(post => {
        return {
            ...post,
            comments : commentsHash[post.id].slice(Math.floor(Math.random() *commentsHash[post.id].length) )
        }
    })
    return sortOrder === 1 ? postAndComments.sort((a, b) => a.comments.length - b.comments.length) : sortOrder === -1 ? postAndComments.sort((a, b) => b.comments.length - a.comments.length) : postAndComments
 }
//  const [posts , comments] = await getPostsAndComments();
//  const postsWithComents = getMergedCommentsToPosts(posts ,comments );
//  console.log(postsWithComents)
async function drowTable(posts){
    const loadingContainer = document.getElementById("loadingContainer");
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    const th_ID = document.createElement("th");
    th_ID.innerText = "ID"
    const th_BODY = document.createElement("th");
    th_BODY.innerText = "Body"
    const th_TITLE = document.createElement("th");
    th_TITLE.innerText = "Title"
    tr.append(th_ID , th_TITLE , th_BODY);
    thead.append(tr);
    const allPosts = await posts
    allPosts.sort()
    for(let post of allPosts){
        
        const tr = document.createElement("tr");
        tr.classList.add('tr')
        const td_ID = document.createElement("td");
        td_ID.classList.add('td-id')
        td_ID.innerText = post.id;
        const td_TITLE = document.createElement("td");
        td_TITLE.classList.add('td-title')
        td_TITLE.innerText = post.title;
        const td_BODY = document.createElement("td");
        td_BODY.classList.add('td-body')
        td_BODY.innerText = post.body;
        
        const td_MORE = document.createElement("td");
        const tr_USER_ID = document.createElement("tr");
        td_MORE.classList.add('tr-more')
        const td_USER_ID_TITLE = document.createElement("td");
        const td_USER_ID = document.createElement("td");
        td_USER_ID_TITLE.innerText = "userid"
        td_USER_ID.innerText = post.userId
        const tr_COMMENTS = document.createElement("tr");
        const td_COMMENTS_TITLE = document.createElement("td");
      
        td_COMMENTS_TITLE.innerText = 'Comments'
        tr_COMMENTS.append(td_COMMENTS_TITLE)
        const td_COMMENTS_ITEM = document.createElement("td");
        td_COMMENTS_TITLE.innerText = 'Comments'
        post.comments.forEach(elem => {
            td_COMMENTS_ITEM.innerHTML += `<p>${elem.name}</p>`
        });
        tr_COMMENTS.append(td_COMMENTS_ITEM)
        td_MORE.append(tr_USER_ID, tr_COMMENTS)
        tr_USER_ID.append(td_USER_ID_TITLE,td_USER_ID)
        tr.append(td_ID , td_TITLE , td_BODY, td_MORE);
        tbody.append(tr);
        document.getElementsByClassName('sort-btn')[0].classList.remove('hide')
        // for(let comment of post.commant) {

        // }

        const td_COMMENTS= document.createElement("td");
        
    }   
    table.append(thead , tbody);
    loadingContainer ? loadingContainer.remove() : null;
    document.body.append(table);
 }

 async function f(sortOrder) {
     const response = await getPostsAndComments()
     const [posts , comments] = response
     return getMergedCommentsToPosts(posts ,comments, sortOrder)
 }
 let sortOrderArr = null

 async function moreItems() {
     await drowTable(f(sortOrderArr));
     for(let i = 0; i < document.getElementsByClassName('tr').length; i++) {
        document.getElementsByClassName('tr')[i].addEventListener('click', function(){
            this.classList.toggle('show')
        })
     }
   
 }
 moreItems()
 document.getElementsByClassName('sort-btn')[0].addEventListener("click", function() {
    sortOrderArr = sortOrderArr === 1 ? -1 : sortOrderArr === -1 ? null : 1
    document.getElementsByTagName('table')[0] ? document.getElementsByTagName('table')[0].remove() : null
    drowTable(f(sortOrderArr));
 })

// setTimeout(() => {
//     console.log( document.getElementsByClassName('sort-btn')[0])
// },1000)




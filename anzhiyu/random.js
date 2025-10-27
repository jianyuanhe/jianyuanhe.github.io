var posts=["2025/10/27/计算机网络的分类/","2025/10/26/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
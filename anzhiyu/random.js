var posts=["2025/10/26/hello-world/","2025/10/27/计算机网络结构基础/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
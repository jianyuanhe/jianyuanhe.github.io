var posts=["2025/10/29/网规基础2数据通信概念/","2025/10/27/网规基础2计算机网络结构基础/","2025/10/30/网规基础3数据编码，调制技术与通信领域/","2025/11/02/网规基础4局域网，广域网/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
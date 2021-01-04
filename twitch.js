let isLoading = false
let nowIndex = 0
appendData()
function getdata (callback){
    let id = '5nim7hdqglhzm7ueuaygfvg4amxu0u'
    let url = 'https://api.twitch.tv/kraken/streams/?client_id='+id+'&game=League%20of%20Legends&limit=9&offset='+nowIndex;
    isLoading = true
        $.ajax({
            url : url,
            headers:{
                Accept: 'application/vnd.twitchtv.v5+json'
            },
            success:(response)=>{
                callback(null,response)
            },
            error:()=>{
                callback(err)
            }
        })
}
function appendData(){
    getdata((err,data)=>{
        if(err){
            console.log(err)
        }else{
          const streams =  data.streams
          const contain =  $(".contain")
          for(let stream of streams) {
              contain.append(getcolumn(stream))
          }
            //   contain.append(' <li class="col"></li>'+
            //   '<li class="col"></li>'+
            //   '<li class="col"></li>')
              nowIndex+=20
              isLoading = false
        }
    })
}

function getcolumn(data){
    return`
            <li>
                <a href="javascript:;" class="pre">
                <img src="${data.preview.medium}" alt="" onload="this.style.opacity=1;">
                </a>
                <a href="javascript:;">
                    <img src="./img/404_preview-320x180.jpg" alt="">
                </a>
                <div class="bottom">
                <a href="javascript:;"  class="pre_bottom">
                <img src="${data.channel.logo}" alt="" onload="this.style.opacity=1;">
                </a>
                    <a href="javascript:;">
                        <img src="./img/avatar.png" alt="">
                    </a>
                    <div class="name">${data.channel.status}<br>
                                      ${data.channel.display_name}
                    </div> 
                </div>
            </li>
    `
}
document.onscroll = function(){
    if($(window).scrollTop()+$(window).height()>$(document).height()-200){
      if(!isLoading){
        appendData()
        console.log(nowIndex)
      }
    }
}
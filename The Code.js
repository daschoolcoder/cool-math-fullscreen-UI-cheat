               function cheat() {
          const e = document.createElement("html");
          e.innerHTML = ` <div id="body"><center> <b style="color:green"> CoolMathGames Fullscreen Cheat </b> 
          <br>
          <br> <button onclick='alert("NO spaces in the input command if you are going to use a space put a - a dash or a minus symbol instead");'> how to use </button> <button id="h_btn"> hide menu </button>
          <br>
          <br>
<input id="Game-id" placeholder='enter a game'> </input> <button id="exe" style='border-width:2px; border-color:black; color:rgb(20,2,0) ; background-color:rgb(199,199,199)'> run </button>
<br>
<br>
</center>
<br>
<p color:black style='padding:5px'> by daschoolcoder</p>
           </div>`;
          e.style = "position: absolute; top: 0px; left: 20px;";
          document.body.appendChild(e);
const hb = document.getElementById("h_btn");
hb.onclick = function () {
 const ro = document.createElement("button");
 ro.innerHTML = "re open";
 ro.style = ' position: absolute; top: 1px; left: 20px;z-index: 10';
 
 document.body.removeChild(e);
 document.body.appendChild(ro);
ro.onclick = function() {
document.body.appendChild(e)
document.body.removeChild(ro);
}
  ;} 
          const b = document.getElementById("body");
          b.style = 'background-color:rgb(199,199,199); width:250px;height:180px;    ';
          var exe = document.getElementById("exe");
          exe.onclick = function() {
            var g = document.getElementById("Game-id").value;
            window.location.href = 'https://www.coolmathgames.com/0-' + g + '/play';
          };
        }
        cheat();

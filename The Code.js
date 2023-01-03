        function cheat() {
          const e = document.createElement("html");
          e.innerHTML = ` <div id="body"><center> <b style="color:green"> CoolMathGames Fullscreen Cheat </b> 
          <br>
          <br> <button onclick='alert("NO spaces in the input command if you are going to use a space put a - a dash or a minus symbol instead");'> how to use </button>
          <br>
          <br>
<input id="Game-id" placeholder='enter a game'> </input> <button id="exe" style='border-width:2px; border-color:black; color:rgb(20,2,0) ; background-color:rgb(199,199,199)'> run </button>
<br>
<br>
</center>
<br>
<p color:black style='padding:5px'> by daschoolcoder</p>
           </div>`;
          e.style= "position: absolute; top: 0px; left: 20px;";
          document.body.appendChild(e);

          const b = document.getElementById("body");
          b.style = 'background-color:rgb(199,199,199); width:250px;height:180px;    ';
          var exe = document.getElementById("exe");
          exe.onclick = function() {
            var G_i = document.getElementById("Game-id").value;

            window.location.href = 'https://www.coolmathgames.com/0-' + G_i + '/play';}
          ;}
  cheat();

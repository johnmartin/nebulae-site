!function(o,a){function r(){var o=new a,r={xl:0,xr:e,yt:0,yb:n},i=o.compute(t,r),s=[];for(var l in i.cells){var g=i.cells[l].halfedges,h=g.length;if(!(3>h)){var v=g[0].getStartpoint(),p=[];p.push([v.x,v.y]);for(var u=0;h>u;u++)v=g[u].getEndpoint(),p.push([v.x,v.y]);s.push("<polygon opacity='"+i.cells[l].site.opacity+"' fill='#FFFFFF' points='"+p.join(" ")+"' />")}}return"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 "+e+" "+n+"'><g>"+s.join("")+"</g></svg>"}for(var t=[],e=200,n=1e3,i=100,s=0;i>s;s++){var l=Math.random()*e,g=Math.random()*n,h=8*Math.random()/100;t.push({x:l,y:g,opacity:h})}var v=r();o("#header-style").html('#header{background-image: url("data:image/svg+xml;charset=utf-8,'+v+'")}')}(window.jQuery,window.Voronoi);
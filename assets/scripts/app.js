!function ($, Voronoi) {

  var sites = [];
  var header_width = 200;
  var header_height = 1000;
  var total_cells = 100;
  for (var i = 0; i < total_cells; i++) {
    var x = Math.random()*header_width;
    var y = Math.random()*header_height;
    var opacity = (Math.random()*8)/100;
    sites.push({ x: x, y: y, opacity: opacity });
  }

  function VoronoiSVG () {
    var voronoi = new Voronoi();
    var bbox = { xl: 0, xr: header_width, yt:0, yb: header_height };
    var result = voronoi.compute(sites, bbox);
    var polys = [];
    for (var x in result.cells) {
      var halfedges = result.cells[x].halfedges;
      var halfedges_total = halfedges.length;
      if (halfedges_total < 3) {
        continue;
      }
      var v = halfedges[0].getStartpoint();
      var pt = [];
      pt.push([v.x, v.y]);
      for (var y = 0; y < halfedges_total; y++) {
        v = halfedges[y].getEndpoint();
        pt.push([v.x, v.y]);
      }
      polys.push('<polygon opacity=\''+result.cells[x].site.opacity+'\' fill=\'#FFFFFF\' points=\''+pt.join(' ')+'\' />');
    }
    return '<svg version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 '+header_width+' '+header_height+'\'><g>'+polys.join('')+'</g></svg>';
  }

  var svg = VoronoiSVG();
  $('#header-style').html('#header{background-image: url("data:image/svg+xml;charset=utf-8,'+svg+'")}');

}(window.jQuery, window.Voronoi);

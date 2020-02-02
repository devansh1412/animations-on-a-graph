var cy = cytoscape({
  container: document.getElementById('cy'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
    .style({
      'content': 'data(id)',
      'background-color': 'black'
    })
    .selector('edge')
    .style({
      'curve-style': 'bezier',
      'content': 'data(weight)',
      'width': 4,
      'line-color': '#ee87e5',
      'target-arrow-color': 'red'
    })
    .selector('.highlighted')
    .style({
      'background-color': 'blue',
      'line-color': 'white',
      'transition-property': 'background-color, line-color, target-arrow-color',
      'transition-duration': '0.5s'
    }),

  elements: {
    nodes: [
      { data: { id: 'a' } },
      { data: { id: 'b' } },
      { data: { id: 'c' } },
      { data: { id: 'd' } },
      { data: { id: 'e' } }
    ],

    edges: [
      { data: { id: 'ab', weight: 5, source: 'a', target: 'b' } },
      { data: { id: 'bd', weight: 1, source: 'b', target: 'd' } },
      { data: { id: 'bc', weight: 7, source: 'b', target: 'c' } },
      { data: { id: 'de', weight: 3, source: 'd', target: 'e' } },
      { data: { id: 'ad', weight: 4, source: 'a', target: 'd' } }
    ]
  },


  layout: {
    name: 'grid',
    roots: '#a',
    rows: 2

  }
});
var out = [];
function bfs() {
  var u;
  u = document.getElementById('u');
  u = u.value;
  if (u == 'a') {
    out = ['a', 'ab', 'b', 'ad', 'd','bd', 'bc', 'c','de' ,'e'];
  }
  else if (u == 'b') {
    out = ['b','ab', 'a','bc', 'c','bd', 'd' ,'de' ,'e'];
  }
  else if (u == 'c') {
    out = ['c','bc', 'b','ab', 'a','bd', 'd','de','e'];
  }
  else if (u == 'd') {
    out = ['d','ad', 'a', 'de', 'e','bd', 'b','bc','c'];
  }
  else if (u == 'e') {
    out = ['e','de', 'd','ad','a','bd', 'b','bc','c'];
  }
  else {
    console.log("Not valid node");
  }
  t = setInterval(high, 1000);
  console.log(out);
}
function dfs() {
  var u;
  u = document.getElementById('u');
  u = u.value;
  if (u == 'a') {
    out = ['a', 'ab', 'b', 'bd', 'd', 'de', 'e','bc' ,'c'];
  }
  else if (u == 'b') {
    out = ['b','bd', 'd','de', 'e','ad', 'a' ,'bc' ,'c'];
  }
  else if (u == 'c') {
    out = ['c','bc', 'b','bd', 'd','de','e','ad', 'a'];
  }
  else if (u == 'd') {
    out = ['d','bd', 'b','ab', 'a','bc','c','de', 'e'];
  }
  else if (u == 'e') {
    out = ['e','de', 'd','bd', 'b','ab', 'a','bc','c'];
  }
  else {
    console.log("Not valid node");
  }
  t = setInterval(high, 1000);
  console.log(out);
}

function mst() {
  var u;
  u = document.getElementById('u');
  u = u.value;
  if (u == 'a') {
    out = ['a', 'ad', 'd', 'de', 'e','bd','b','bc' ,'c'];
  }
  else if (u == 'b') {
    out = ['b','bd', 'd','de', 'e','ad', 'a' ,'bc' ,'c'];
  }
  else if (u == 'c') {
    out = ['c','bc', 'b','bd', 'd','de','e','ad', 'a'];
  }
  else if (u == 'd') {
    out = ['d','bd', 'b','ad', 'a','bc','c','de', 'e'];
  }
  else if (u == 'e') {
    out = ['e','de', 'd','bd', 'b','ad', 'a','bc','c'];
  }
  else {
    console.log("Not valid node");
  }
  t = setInterval(high, 1000);
  console.log(out);
}

var t = null;
var j = 0;
function high() {
  console.log("running");
  var highlight = cy.elements().getElementById(out[j]);
  highlight.addClass('highlighted');
  j++;
  if (j > 10) {
    clearInterval(t);
  }
}




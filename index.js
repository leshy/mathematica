(function(){
  var fs, join, map, mathematica, out$ = typeof exports != 'undefined' && exports || this;
  fs = require('fs');
  join = require('path').join;
  map = require('leshdash').map;
  out$.mathematica = mathematica = curry$(function(root, name, data){
    var filePath;
    filePath = join(root, name + '.csv');
    return fs.writeFileSync(filePath, map(data, function(v, i){
      return v.join(',');
    }).join('\n'));
  });
  function curry$(f, bound){
    var context,
    _curry = function(args) {
      return f.length > 1 ? function(){
        var params = args ? args.concat() : [];
        context = bound ? context || this : this;
        return params.push.apply(params, arguments) <
            f.length && arguments.length ?
          _curry.call(context, params) : f.apply(context, params);
      } : f;
    };
    return _curry();
  }
}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xlc2gvY29kaW5nL3llbnRvd24vbWF0aGVtYXRpY2EvaW5kZXgubHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7RUFFRSxFQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxJQUFBO0VBQ1EsSUFBUixDQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsTUFBQSxDQUFBLENBQVE7RUFDSSxHQUFaLENBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxVQUFBLENBQUEsQ0FBWTtxQkFHUCxXQUFZLENBQUEsQ0FBQSxRQUFFLFFBQUEsQ0FBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUE7O0lBQ25CLFFBQVMsQ0FBQSxDQUFBLENBQUUsS0FBSyxNQUFNLElBQUssQ0FBQSxDQUFBLENBQUUsTUFBZDtXQUVmLEVBQUUsQ0FBQyxjQUFjLFVBQVUsSUFBSSxNQUFNLFFBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTthQUFTLENBQUMsQ0FBQyxLQUFLLEdBQUQ7S0FBdEIsQ0FBNEIsQ0FBQyxLQUFLLElBQUEsQ0FBL0MiLCJzb3VyY2VzQ29udGVudCI6WyIjIGF1dG9jb21waWxlXG5yZXF1aXJlISB7XG4gIGZzXG4gIHBhdGg6IHsgam9pbiB9XG4gIGxlc2hkYXNoOiB7IG1hcCB9XG59XG5cbmV4cG9ydCBtYXRoZW1hdGljYSA9IChyb290LCBuYW1lLCBkYXRhKSAtLT5cbiAgZmlsZVBhdGggPSBqb2luKHJvb3QsIG5hbWUgKyAnLmNzdicpXG4jICBmcy53cml0ZUZpbGVTeW5jIGZpbGVQYXRoLCBtYXAoZGF0YSwgKHYsaSkgLT4gXCIje2l9LCN7dn1cIikuam9pbiAnXFxuJ1xuICBmcy53cml0ZUZpbGVTeW5jIGZpbGVQYXRoLCBtYXAoZGF0YSwgKHYsaSkgLT4gdi5qb2luKCcsJykpLmpvaW4gJ1xcbidcbiJdfQ==

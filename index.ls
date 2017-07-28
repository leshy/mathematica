# autocompile
require! {
  fs
  path: { join }
  leshdash: { map }
}

export mathematica = (root, name, data) -->
  filePath = join(root, name + '.csv')
#  fs.writeFileSync filePath, map(data, (v,i) -> "#{i},#{v}").join '\n'
  fs.writeFileSync filePath, map(data, (v,i) -> v.join(',')).join '\n'

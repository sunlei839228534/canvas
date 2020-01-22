function create():Element {
  let div = document.createElement('div')
  div.innerHTML = "hello"
  div.id = "hello"
  return div
}

document.body.append(create())
